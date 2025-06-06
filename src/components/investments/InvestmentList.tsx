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
    <Card className="glass-morphism" data-oid="7lo2asu">
      <CardHeader data-oid="sb57gyp">
        <CardTitle data-oid="690u_5-">Cartera de Inversiones</CardTitle>
        <CardDescription data-oid=":iiapt7">
          Inversiones activas y su rendimiento
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="3wzglw:">
        <div className="space-y-4" data-oid="0xcv1z2">
          {investments.length > 0 ? (
            investments.map((investment) => (
              <div
                key={investment.id}
                className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                data-oid="f_fvpf7"
              >
                <div className="flex items-center gap-3" data-oid="9vj6kz-">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                    data-oid=".7v1lkw"
                  >
                    <Wallet
                      className="h-4 w-4 text-blue-600"
                      data-oid="3s_28et"
                    />
                  </div>
                  <div data-oid="hdah6qh">
                    <p className="font-medium" data-oid="jaoc8bt">
                      {formatInvestmentType(investment.investment_type)}
                    </p>
                    <p className="text-sm text-gray-500" data-oid="eiwxos-">
                      {investment.description || "Sin descripción"}
                    </p>
                  </div>
                </div>
                <div className="text-right" data-oid="o.o5n7l">
                  <p className="font-medium text-blue-600" data-oid="z4_-wk3">
                    $
                    {investment.amount.toLocaleString("es-MX", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  {investment.expected_return && (
                    <div
                      className="flex items-center text-green-500 text-sm"
                      data-oid="bnn431p"
                    >
                      <TrendingUp className="h-3 w-3 mr-1" data-oid="jug.p39" />
                      <span data-oid="8ts1dpx">
                        +{investment.expected_return}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-gray-500" data-oid="5sn3g2l">
              No hay inversiones registradas
            </div>
          )}

          {investments.length === 0 && (
            <>
              <div
                className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                data-oid="8cbwf1c"
              >
                <div className="flex items-center gap-3" data-oid=":3ds6gu">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                    data-oid="bs9ogm0"
                  >
                    <Wallet
                      className="h-4 w-4 text-blue-600"
                      data-oid="cs7g2g-"
                    />
                  </div>
                  <div data-oid=":c-g9-1">
                    <p className="font-medium" data-oid="7ej5nhb">
                      Acciones - Ejemplo
                    </p>
                    <p className="text-sm text-gray-500" data-oid="r_rm7gd">
                      100 acciones
                    </p>
                  </div>
                </div>
                <div className="text-right" data-oid="1v3fkqf">
                  <p className="font-medium text-blue-600" data-oid="v4bup5.">
                    $15,000.00
                  </p>
                  <div
                    className="flex items-center text-green-500 text-sm"
                    data-oid="792u6ta"
                  >
                    <TrendingUp className="h-3 w-3 mr-1" data-oid="t-xjnmz" />
                    <span data-oid="ikgcd98">+8.5%</span>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                data-oid="jf0jr.z"
              >
                <div className="flex items-center gap-3" data-oid="or8et:z">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                    data-oid="0a4z2_3"
                  >
                    <Wallet
                      className="h-4 w-4 text-blue-600"
                      data-oid="xn26z0a"
                    />
                  </div>
                  <div data-oid="fy-:_nt">
                    <p className="font-medium" data-oid="a4iopz6">
                      Fondo de Inversión Global
                    </p>
                    <p className="text-sm text-gray-500" data-oid="gi86ed1">
                      Participación
                    </p>
                  </div>
                </div>
                <div className="text-right" data-oid=".1iw.7x">
                  <p className="font-medium text-blue-600" data-oid="olnyn69">
                    $25,000.00
                  </p>
                  <div
                    className="flex items-center text-green-500 text-sm"
                    data-oid="jwk667c"
                  >
                    <TrendingUp className="h-3 w-3 mr-1" data-oid="a914f02" />
                    <span data-oid="xyuyxht">+4.2%</span>
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
