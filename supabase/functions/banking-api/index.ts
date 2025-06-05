
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

/**
 * Banking API Simulation
 * This edge function simulates a banking API for future integrations.
 * It includes security measures against common web vulnerabilities.
 */
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: {
          headers: { Authorization: req.headers.get("Authorization")! },
        },
      }
    );

    // Create a sanitization function to prevent XSS
    const sanitizeInput = (input: string) => {
      return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    // Get the request body
    const body = await req.json();
    const operation = body.operation;

    // Verify the CSRF token (in a real application, this would be implemented)
    const csrfToken = req.headers.get("X-CSRF-Token");
    if (!csrfToken) {
      return new Response(
        JSON.stringify({ error: "CSRF token missing" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Authentication check (in a real application, this would validate the token)
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized access" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Log the operation for audit purposes
    console.log(`Banking API operation requested: ${operation} by user: ${user.id}`);

    // Process different banking operations
    switch (operation) {
      case "get_accounts":
        return await getAccounts(supabaseClient, body, corsHeaders);

      case "get_transactions":
        return await getTransactions(supabaseClient, body, corsHeaders);

      case "transfer_funds":
        return await transferFunds(supabaseClient, body, corsHeaders, sanitizeInput);

      default:
        return new Response(
          JSON.stringify({ error: "Invalid operation" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
    }
  } catch (error) {
    console.error("Banking API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

/**
 * Get Accounts from the database
 */
async function getAccounts(supabaseClient, body, corsHeaders) {
  const { data: userProfile } = await supabaseClient
    .from("profiles")
    .select("company_id")
    .single();

  if (!userProfile?.company_id) {
    return new Response(
      JSON.stringify({ error: "Company profile not found" }),
      { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  const { data: accounts, error } = await supabaseClient
    .from("accounts")
    .select("*")
    .eq("company_id", userProfile.company_id);

  if (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({ accounts }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
}

/**
 * Get Transactions from the database
 */
async function getTransactions(supabaseClient, body, corsHeaders) {
  const accountId = body.account_id;
  
  if (!accountId) {
    return new Response(
      JSON.stringify({ error: "Account ID is required" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  const { data: transactions, error } = await supabaseClient
    .from("bank_transactions")
    .select("*")
    .eq("account_id", accountId);

  if (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({ transactions }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
}

/**
 * Simulate a funds transfer between accounts
 */
async function transferFunds(supabaseClient, body, corsHeaders, sanitizeInput) {
  const { from_account, to_account, amount, description } = body;
  
  // Validate inputs
  if (!from_account || !to_account || !amount) {
    return new Response(
      JSON.stringify({ error: "Missing required fields" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // Sanitize the description to prevent XSS
  const sanitizedDescription = description ? sanitizeInput(description) : null;

  try {
    // Get user's company ID for permissions check
    const { data: userProfile } = await supabaseClient
      .from("profiles")
      .select("company_id")
      .single();

    if (!userProfile?.company_id) {
      return new Response(
        JSON.stringify({ error: "Company profile not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify account ownership and sufficient funds (simulation)
    const { data: fromAccount, error: fromError } = await supabaseClient
      .from("accounts")
      .select("*")
      .eq("id", from_account)
      .eq("company_id", userProfile.company_id)
      .single();

    if (fromError || !fromAccount) {
      return new Response(
        JSON.stringify({ error: "Source account not found or not authorized" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (fromAccount.current_balance < amount) {
      return new Response(
        JSON.stringify({ error: "Insufficient funds" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create outgoing transaction
    const outgoingTx = {
      account_id: from_account,
      amount: -amount,
      description: sanitizedDescription || "Transfer to another account",
      transaction_type: "transfer_out",
      company_id: userProfile.company_id,
      status: "completed",
      bank_reference: `TRF-${Date.now()}`
    };

    // Create incoming transaction
    const incomingTx = {
      account_id: to_account,
      amount: amount,
      description: sanitizedDescription || "Transfer from another account",
      transaction_type: "transfer_in",
      company_id: userProfile.company_id,
      status: "completed",
      bank_reference: `TRF-${Date.now()}`
    };

    // Insert both transactions
    const { error: txError } = await supabaseClient
      .from("bank_transactions")
      .insert([outgoingTx, incomingTx]);

    if (txError) {
      return new Response(
        JSON.stringify({ error: txError.message }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Update account balances
    const { error: updateFromError } = await supabaseClient
      .from("accounts")
      .update({ current_balance: fromAccount.current_balance - amount })
      .eq("id", from_account);

    if (updateFromError) {
      return new Response(
        JSON.stringify({ error: updateFromError.message }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { error: updateToError } = await supabaseClient
      .rpc("update_destination_account_balance", {
        dest_account_id: to_account,
        transfer_amount: amount
      });

    if (updateToError) {
      return new Response(
        JSON.stringify({ error: updateToError.message }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Transfer completed successfully",
        reference: outgoingTx.bank_reference
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Transfer funds error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process transfer" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
}
