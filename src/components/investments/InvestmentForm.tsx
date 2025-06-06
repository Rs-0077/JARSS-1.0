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
    <Card className="glass-morphism" data-oid="_.-oqcc">
      <CardHeader data-oid="dse3r3u">
        <CardTitle data-oid="az31:5:">Registrar Inversión</CardTitle>
        <CardDescription data-oid="z.74z-d">
          Ingrese los detalles de la inversión
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="foaitd4">
        <form onSubmit={handleSubmit} className="space-y-4" data-oid="reqte4_">
          <div className="space-y-2" data-oid="ck_het2">
            <Label htmlFor="amount" data-oid="7zr_2gt">
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
              data-oid="vmcjey7"
            />
          </div>

          <div className="space-y-2" data-oid="l-czf22">
            <Label htmlFor="investmentType" data-oid="g2dg_jm">
              Tipo de Inversión
            </Label>
            <Select
              value={investmentType}
              onValueChange={setInvestmentType}
              data-oid="75a9.lh"
            >
              <SelectTrigger data-oid="od1:-:c">
                <SelectValue placeholder="Seleccione tipo" data-oid=":vvpzbt" />
              </SelectTrigger>
              <SelectContent data-oid="9d:ddmi">
                <SelectItem value="acciones" data-oid=":830:59">
                  Acciones
                </SelectItem>
                <SelectItem value="bonos" data-oid="obhfas6">
                  Bonos
                </SelectItem>
                <SelectItem value="fondos_inversion" data-oid=":m7g1-u">
                  Fondos de Inversión
                </SelectItem>
                <SelectItem value="bienes_raices" data-oid="oet29j7">
                  Bienes Raíces
                </SelectItem>
                <SelectItem value="criptomonedas" data-oid="swl-cgc">
                  Criptomonedas
                </SelectItem>
                <SelectItem value="deposito_plazo" data-oid="4adkb6l">
                  Depósito a Plazo
                </SelectItem>
                <SelectItem value="otros" data-oid="sysafqk">
                  Otros
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2" data-oid="1-5esgo">
            <Label htmlFor="expectedReturn" data-oid="r6j06qk">
              Rendimiento Esperado (%)
            </Label>
            <Input
              id="expectedReturn"
              placeholder="0.00"
              type="number"
              step="0.01"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              data-oid="nz8sbr0"
            />
          </div>

          <div className="space-y-2" data-oid="g1qpsgy">
            <Label htmlFor="description" data-oid=".faaf_:">
              Descripción
            </Label>
            <Input
              id="description"
              placeholder="Descripción de la inversión"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              data-oid="79.9djx"
            />
          </div>

          <div className="space-y-2" data-oid="__t3be4">
            <Label htmlFor="date" data-oid="hgo9yei">
              Fecha
            </Label>
            <div className="relative" data-oid="ysegwqj">
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                data-oid="-5sz469"
              />

              <Calendar
                className="absolute right-3 top-2.5 h-4 w-4 text-gray-500"
                data-oid=".-9.dhu"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" data-oid="did4qop">
            Registrar Inversión
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
