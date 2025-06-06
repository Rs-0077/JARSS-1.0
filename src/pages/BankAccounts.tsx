import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  supabase,
  secureBankingFetch,
  sanitizeContent,
} from "@/integrations/supabase/client";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

// Interface for the account data
interface Account {
  id: string;
  name: string;
  bank_name: string | null;
  account_number: string | null;
  current_balance: number | null;
  currency: string;
  type: string;
}

export default function BankAccounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);

  // Function to load accounts using the secure banking API
  const loadAccounts = async () => {
    setLoading(true);
    try {
      const result = await secureBankingFetch("get_accounts", {});
      setAccounts(result.accounts || []);
    } catch (error: any) {
      console.error("Error loading accounts:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to load accounts",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAccounts();
  }, []);

  return (
    <MainLayout data-oid="ij9a7qz">
      <div className="container mx-auto p-4" data-oid="aeifybv">
        <div
          className="flex justify-between items-center mb-6"
          data-oid="bsadkxi"
        >
          <h1 className="text-2xl font-bold" data-oid="3um5-1r">
            Bank Accounts
          </h1>
          <Button onClick={loadAccounts} disabled={loading} data-oid="t4r_v:e">
            {loading ? "Loading..." : "Refresh"}
          </Button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          data-oid="_0kxuu7"
        >
          {accounts.map((account) => (
            <Card
              key={account.id}
              className="overflow-hidden"
              data-oid="a2iz910"
            >
              <CardHeader className="bg-gray-50" data-oid="25col1:">
                <CardTitle data-oid="ua7jta:">
                  {sanitizeContent(account.name)}
                </CardTitle>
                <CardDescription data-oid="xppm92b">
                  {account.bank_name
                    ? sanitizeContent(account.bank_name)
                    : "N/A"}{" "}
                  - {account.type}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4" data-oid="jsxiwjw">
                <p className="text-sm text-gray-500" data-oid="4ylz3fx">
                  Account Number
                </p>
                <p className="font-mono" data-oid="jqvscnh">
                  {account.account_number
                    ? `${account.account_number.substring(0, 4)}****${account.account_number.substring(account.account_number.length - 4)}`
                    : "N/A"}
                </p>
                <Separator className="my-4" data-oid=":sfx_mv" />
                <p className="text-sm text-gray-500" data-oid="2f6e7rk">
                  Current Balance
                </p>
                <p className="text-2xl font-bold" data-oid="wgyyom1">
                  {new Intl.NumberFormat("es-MX", {
                    style: "currency",
                    currency: account.currency,
                  }).format(account.current_balance || 0)}
                </p>
              </CardContent>
              <CardFooter className="bg-gray-50" data-oid="qe6b-fb">
                <Button variant="outline" className="w-full" data-oid=":cyh_2n">
                  View Transactions
                </Button>
              </CardFooter>
            </Card>
          ))}

          {accounts.length === 0 && !loading && (
            <div className="col-span-full text-center py-10" data-oid="bd01fcl">
              <p className="text-gray-500" data-oid="b-tyubq">
                No accounts found. Add your first account to get started.
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
