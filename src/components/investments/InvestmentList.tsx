import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, Wallet } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Define a type that matches the structure of our 'investments' table
interface Investment {
  id: string;
  amount: number;
  investment_type: string;
  description: string | null;
  date: string;
  expected_return: number | null;
  created_at: string | null;
  updated_at: string | null;
}

interface InvestmentListProps {
  refreshTrigger: number;
}

export const InvestmentList = ({ refreshTrigger }: InvestmentListProps) => {
  const [investments, setInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    fetchInvestments();
  }, [refreshTrigger]);

  const fetchInvestments = async () => {
    try {
      const { data, error } = await supabase.from("investments").select("*");

      if (error) throw error;

      if (data) {
        // Cast the data to our Investment type
        setInvestments(data as unknown as Investment[]);
      }
    } catch (error) {
      console.error("Error fetching investments:", error);
      toast({
        title: "Error",
        description: "No se pudieron cargar las inversiones",
        variant: "destructive",
      });
    }
  };

  // Format investment type for display
  const formatInvestmentType = (type: string): string => {
    return type.charAt(0).toUpperCase() + type.slice(1).replace("_", " ");
  };

  return (
    <Card className="glass-morphism" data-oid="g4p553z">
      <CardHeader data-oid="q0inr75">
        <CardTitle data-oid="vl_g_a5">Cartera de Inversiones</CardTitle>
        <CardDescription data-oid="lc1ljhn">
          Inversiones activas y su rendimiento
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="ek.uw-j">
        <div className="space-y-4" data-oid="-:zo:ka">
          {investments.length > 0 ? (
            investments.map((investment) => (
              <div
                key={investment.id}
                className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                data-oid=":dd-7:m"
              >
                <div className="flex items-center gap-3" data-oid="lih1b6f">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                    data-oid="1-g9s8z"
                  >
                    <Wallet
                      className="h-4 w-4 text-blue-600"
                      data-oid="gh3iltn"
                    />
                  </div>
                  <div data-oid="9auatd2">
                    <p className="font-medium" data-oid="uq_pwf3">
                      {formatInvestmentType(investment.investment_type)}
                    </p>
                    <p className="text-sm text-gray-500" data-oid="a4a_f1b">
                      {investment.description || "Sin descripción"}
                    </p>
                  </div>
                </div>
                <div className="text-right" data-oid="kqw89_n">
                  <p className="font-medium text-blue-600" data-oid="okki30x">
                    $
                    {investment.amount.toLocaleString("es-MX", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  {investment.expected_return && (
                    <div
                      className="flex items-center text-green-500 text-sm"
                      data-oid="sy1vt2n"
                    >
                      <TrendingUp className="h-3 w-3 mr-1" data-oid="ho27d1_" />
                      <span data-oid="9-.tqwz">
                        +{investment.expected_return}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-gray-500" data-oid="c_pxm23">
              No hay inversiones registradas
            </div>
          )}

          {investments.length === 0 && (
            <>
              <div
                className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                data-oid=".fg2kgr"
              >
                <div className="flex items-center gap-3" data-oid="bxagzdr">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                    data-oid="9_qjo1m"
                  >
                    <Wallet
                      className="h-4 w-4 text-blue-600"
                      data-oid="tarkshp"
                    />
                  </div>
                  <div data-oid="r32znyg">
                    <p className="font-medium" data-oid="9yubev5">
                      Acciones - Ejemplo
                    </p>
                    <p className="text-sm text-gray-500" data-oid="wc02kmz">
                      100 acciones
                    </p>
                  </div>
                </div>
                <div className="text-right" data-oid="e3w3p-k">
                  <p className="font-medium text-blue-600" data-oid="60_norh">
                    $15,000.00
                  </p>
                  <div
                    className="flex items-center text-green-500 text-sm"
                    data-oid="-f7-kna"
                  >
                    <TrendingUp className="h-3 w-3 mr-1" data-oid="1-evzby" />
                    <span data-oid=".ji.5b3">+8.5%</span>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                data-oid="u391x5r"
              >
                <div className="flex items-center gap-3" data-oid="g2syw7x">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                    data-oid="0ay56nw"
                  >
                    <Wallet
                      className="h-4 w-4 text-blue-600"
                      data-oid="60odquo"
                    />
                  </div>
                  <div data-oid="ck70jqf">
                    <p className="font-medium" data-oid="5buw133">
                      Fondo de Inversión Global
                    </p>
                    <p className="text-sm text-gray-500" data-oid="4xn9q2b">
                      Participación
                    </p>
                  </div>
                </div>
                <div className="text-right" data-oid="axp6bby">
                  <p className="font-medium text-blue-600" data-oid="a-gjfhr">
                    $25,000.00
                  </p>
                  <div
                    className="flex items-center text-green-500 text-sm"
                    data-oid="d2:m3.g"
                  >
                    <TrendingUp className="h-3 w-3 mr-1" data-oid="aazd3bi" />
                    <span data-oid="t39p2nj">+4.2%</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
