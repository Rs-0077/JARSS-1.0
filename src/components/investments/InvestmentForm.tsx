
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface InvestmentFormProps {
  onInvestmentAdded: () => void;
}

export const InvestmentForm = ({ onInvestmentAdded }: InvestmentFormProps) => {
  const [amount, setAmount] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase
        .from('investments')
        .insert([
          { 
            amount: parseFloat(amount),
            investment_type: investmentType,
            description,
            date: date || new Date().toISOString().split('T')[0],
            expected_return: expectedReturn ? parseFloat(expectedReturn) : null
          }
        ] as any);
        
      if (error) throw error;
      
      toast({
        title: "Inversión registrada",
        description: "La inversión ha sido registrada exitosamente",
      });
      
      // Reset form
      setAmount("");
      setInvestmentType("");
      setDescription("");
      setDate("");
      setExpectedReturn("");
      
      // Notify parent that a new investment was added
      onInvestmentAdded();
      
    } catch (error) {
      console.error("Error al registrar inversión:", error);
      toast({
        title: "Error",
        description: "No se pudo registrar la inversión",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="glass-morphism">
      <CardHeader>
        <CardTitle>Registrar Inversión</CardTitle>
        <CardDescription>
          Ingrese los detalles de la inversión
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Monto</Label>
            <Input 
              id="amount" 
              placeholder="0.00" 
              type="number" 
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="investmentType">Tipo de Inversión</Label>
            <Select 
              value={investmentType} 
              onValueChange={setInvestmentType}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="acciones">Acciones</SelectItem>
                <SelectItem value="bonos">Bonos</SelectItem>
                <SelectItem value="fondos_inversion">Fondos de Inversión</SelectItem>
                <SelectItem value="bienes_raices">Bienes Raíces</SelectItem>
                <SelectItem value="criptomonedas">Criptomonedas</SelectItem>
                <SelectItem value="deposito_plazo">Depósito a Plazo</SelectItem>
                <SelectItem value="otros">Otros</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="expectedReturn">Rendimiento Esperado (%)</Label>
            <Input 
              id="expectedReturn" 
              placeholder="0.00" 
              type="number" 
              step="0.01"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Input 
              id="description" 
              placeholder="Descripción de la inversión" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date">Fecha</Label>
            <div className="relative">
              <Input 
                id="date" 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
            </div>
          </div>
          
          <Button type="submit" className="w-full">Registrar Inversión</Button>
        </form>
      </CardContent>
    </Card>
  );
};
