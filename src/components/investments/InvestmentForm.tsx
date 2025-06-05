import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
      const { data, error } = await supabase.from("investments").insert([
        {
          amount: parseFloat(amount),
          investment_type: investmentType,
          description,
          date: date || new Date().toISOString().split("T")[0],
          expected_return: expectedReturn ? parseFloat(expectedReturn) : null,
        },
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
    <Card className="glass-morphism" data-oid="vojpfum">
      <CardHeader data-oid=":8ryc4a">
        <CardTitle data-oid="0:h9f.1">Registrar Inversión</CardTitle>
        <CardDescription data-oid="lj:ascx">
          Ingrese los detalles de la inversión
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="e7wm9ca">
        <form onSubmit={handleSubmit} className="space-y-4" data-oid="7_sv4qt">
          <div className="space-y-2" data-oid="zxjsb8b">
            <Label htmlFor="amount" data-oid="fjy9bt2">
              Monto
            </Label>
            <Input
              id="amount"
              placeholder="0.00"
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              data-oid="hfas53_"
            />
          </div>

          <div className="space-y-2" data-oid="d_om:sw">
            <Label htmlFor="investmentType" data-oid="8p3eyr8">
              Tipo de Inversión
            </Label>
            <Select
              value={investmentType}
              onValueChange={setInvestmentType}
              data-oid="6m:3zw0"
            >
              <SelectTrigger data-oid="jn3lvyl">
                <SelectValue placeholder="Seleccione tipo" data-oid="0934.pd" />
              </SelectTrigger>
              <SelectContent data-oid="eqcf33z">
                <SelectItem value="acciones" data-oid="zx8qssh">
                  Acciones
                </SelectItem>
                <SelectItem value="bonos" data-oid="86ordon">
                  Bonos
                </SelectItem>
                <SelectItem value="fondos_inversion" data-oid="ziasuj-">
                  Fondos de Inversión
                </SelectItem>
                <SelectItem value="bienes_raices" data-oid="1e:ajyp">
                  Bienes Raíces
                </SelectItem>
                <SelectItem value="criptomonedas" data-oid="m_41z9j">
                  Criptomonedas
                </SelectItem>
                <SelectItem value="deposito_plazo" data-oid="k.wj3qc">
                  Depósito a Plazo
                </SelectItem>
                <SelectItem value="otros" data-oid="8e17ir1">
                  Otros
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2" data-oid="tisg6l1">
            <Label htmlFor="expectedReturn" data-oid="_dz.h6z">
              Rendimiento Esperado (%)
            </Label>
            <Input
              id="expectedReturn"
              placeholder="0.00"
              type="number"
              step="0.01"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              data-oid="5y4ba9o"
            />
          </div>

          <div className="space-y-2" data-oid="i5::ic7">
            <Label htmlFor="description" data-oid="dtn4i1u">
              Descripción
            </Label>
            <Input
              id="description"
              placeholder="Descripción de la inversión"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              data-oid="51-k8a9"
            />
          </div>

          <div className="space-y-2" data-oid="8rmawe1">
            <Label htmlFor="date" data-oid="n5gd6no">
              Fecha
            </Label>
            <div className="relative" data-oid="1825f.8">
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                data-oid="r3k2m45"
              />

              <Calendar
                className="absolute right-3 top-2.5 h-4 w-4 text-gray-500"
                data-oid="j2lqh2:"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" data-oid="mhzhbsm">
            Registrar Inversión
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
