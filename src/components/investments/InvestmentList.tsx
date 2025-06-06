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
    <Card className="glass-morphism" data-oid="-n4fogx">
      <CardHeader data-oid="pe:h796">
        <CardTitle data-oid="qon1nwu">Cartera de Inversiones</CardTitle>
        <CardDescription data-oid="vhvg3ua">
          Inversiones activas y su rendimiento
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="t:kmgyf">
        <div className="space-y-4" data-oid="2uw7ks0">
          {investments.length > 0 ? (
            investments.map((investment) => (
              <div
                key={investment.id}
                className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                data-oid="yz2m.8."
              >
                <div className="flex items-center gap-3" data-oid="aq:3xge">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                    data-oid="7pmpkwe"
                  >
                    <Wallet
                      className="h-4 w-4 text-blue-600"
                      data-oid=":q0ba1k"
                    />
                  </div>
                  <div data-oid="gey9g-o">
                    <p className="font-medium" data-oid="z_t2d03">
                      {formatInvestmentType(investment.investment_type)}
                    </p>
                    <p className="text-sm text-gray-500" data-oid="7co:dp.">
                      {investment.description || "Sin descripción"}
                    </p>
                  </div>
                </div>
                <div className="text-right" data-oid="u8al9gz">
                  <p className="font-medium text-blue-600" data-oid="jggqqdh">
                    $
                    {investment.amount.toLocaleString("es-MX", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  {investment.expected_return && (
                    <div
                      className="flex items-center text-green-500 text-sm"
                      data-oid="ojl60_:"
                    >
                      <TrendingUp className="h-3 w-3 mr-1" data-oid="3cqa1nz" />
                      <span data-oid="z8b_so4">
                        +{investment.expected_return}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-gray-500" data-oid="dx:kaoz">
              No hay inversiones registradas
            </div>
          )}

          {investments.length === 0 && (
            <>
              <div
                className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                data-oid="gb_oznt"
              >
                <div className="flex items-center gap-3" data-oid="quiovkp">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                    data-oid="r2k5:fo"
                  >
                    <Wallet
                      className="h-4 w-4 text-blue-600"
                      data-oid="l_uq_2r"
                    />
                  </div>
                  <div data-oid="z79d3a3">
                    <p className="font-medium" data-oid="ac9cpf1">
                      Acciones - Ejemplo
                    </p>
                    <p className="text-sm text-gray-500" data-oid="0km1h:f">
                      100 acciones
                    </p>
                  </div>
                </div>
                <div className="text-right" data-oid="5xvub-q">
                  <p className="font-medium text-blue-600" data-oid="ob9_fgc">
                    $15,000.00
                  </p>
                  <div
                    className="flex items-center text-green-500 text-sm"
                    data-oid="m9607kn"
                  >
                    <TrendingUp className="h-3 w-3 mr-1" data-oid="7nfvgc." />
                    <span data-oid="k19go4q">+8.5%</span>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                data-oid="iu7yjsa"
              >
                <div className="flex items-center gap-3" data-oid="i3.5-2:">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                    data-oid="16c074w"
                  >
                    <Wallet
                      className="h-4 w-4 text-blue-600"
                      data-oid="lbx_8fs"
                    />
                  </div>
                  <div data-oid="-n_r-6r">
                    <p className="font-medium" data-oid="3a1f1oz">
                      Fondo de Inversión Global
                    </p>
                    <p className="text-sm text-gray-500" data-oid="vwy:l3g">
                      Participación
                    </p>
                  </div>
                </div>
                <div className="text-right" data-oid="9p:1ozj">
                  <p className="font-medium text-blue-600" data-oid="16flreq">
                    $25,000.00
                  </p>
                  <div
                    className="flex items-center text-green-500 text-sm"
                    data-oid="4u-2rk1"
                  >
                    <TrendingUp className="h-3 w-3 mr-1" data-oid="p.ewomj" />
                    <span data-oid="1:dvp8n">+4.2%</span>
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
