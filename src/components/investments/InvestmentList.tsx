
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      const { data, error } = await supabase
        .from('investments')
        .select('*');
        
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
    return type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ');
  };

  return (
    <Card className="glass-morphism">
      <CardHeader>
        <CardTitle>Cartera de Inversiones</CardTitle>
        <CardDescription>
          Inversiones activas y su rendimiento
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {investments.length > 0 ? (
            investments.map(investment => (
              <div key={investment.id} className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Wallet className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{formatInvestmentType(investment.investment_type)}</p>
                    <p className="text-sm text-gray-500">{investment.description || 'Sin descripción'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-blue-600">${investment.amount.toLocaleString('es-MX', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                  {investment.expected_return && (
                    <div className="flex items-center text-green-500 text-sm">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      <span>+{investment.expected_return}%</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-gray-500">
              No hay inversiones registradas
            </div>
          )}
          
          {investments.length === 0 && (
            <>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Wallet className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Acciones - Ejemplo</p>
                    <p className="text-sm text-gray-500">100 acciones</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-blue-600">$15,000.00</p>
                  <div className="flex items-center text-green-500 text-sm">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+8.5%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Wallet className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Fondo de Inversión Global</p>
                    <p className="text-sm text-gray-500">Participación</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-blue-600">$25,000.00</p>
                  <div className="flex items-center text-green-500 text-sm">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+4.2%</span>
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
