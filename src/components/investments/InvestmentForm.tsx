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
    <Card className="glass-morphism" data-oid="7am8in3">
      <CardHeader data-oid="1rzokk8">
        <CardTitle data-oid="ifmbcvp">Registrar Inversión</CardTitle>
        <CardDescription data-oid="yw32-fn">
          Ingrese los detalles de la inversión
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="odlbfjn">
        <form onSubmit={handleSubmit} className="space-y-4" data-oid="y7i6q6v">
          <div className="space-y-2" data-oid="wsvhv66">
            <Label htmlFor="amount" data-oid="c-ysiw.">
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
              data-oid="-4mpo2g"
            />
          </div>

          <div className="space-y-2" data-oid="5yu5w4:">
            <Label htmlFor="investmentType" data-oid="5:.jb5f">
              Tipo de Inversión
            </Label>
            <Select
              value={investmentType}
              onValueChange={setInvestmentType}
              data-oid="n2uaju."
            >
              <SelectTrigger data-oid="unodpk4">
                <SelectValue placeholder="Seleccione tipo" data-oid="ygekksl" />
              </SelectTrigger>
              <SelectContent data-oid="iq9llla">
                <SelectItem value="acciones" data-oid="zxhf6l-">
                  Acciones
                </SelectItem>
                <SelectItem value="bonos" data-oid="g.e.cw:">
                  Bonos
                </SelectItem>
                <SelectItem value="fondos_inversion" data-oid="bu-80tu">
                  Fondos de Inversión
                </SelectItem>
                <SelectItem value="bienes_raices" data-oid="x32h.nn">
                  Bienes Raíces
                </SelectItem>
                <SelectItem value="criptomonedas" data-oid="qi426a.">
                  Criptomonedas
                </SelectItem>
                <SelectItem value="deposito_plazo" data-oid="4ob42l2">
                  Depósito a Plazo
                </SelectItem>
                <SelectItem value="otros" data-oid="bjb158k">
                  Otros
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2" data-oid="x5wxfyv">
            <Label htmlFor="expectedReturn" data-oid="hshmw30">
              Rendimiento Esperado (%)
            </Label>
            <Input
              id="expectedReturn"
              placeholder="0.00"
              type="number"
              step="0.01"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              data-oid="xo441ol"
            />
          </div>

          <div className="space-y-2" data-oid="8:3s:9-">
            <Label htmlFor="description" data-oid="osfziay">
              Descripción
            </Label>
            <Input
              id="description"
              placeholder="Descripción de la inversión"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              data-oid="2_pb_59"
            />
          </div>

          <div className="space-y-2" data-oid="_t91-.n">
            <Label htmlFor="date" data-oid=".mw6gqv">
              Fecha
            </Label>
            <div className="relative" data-oid="ge.m6ps">
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                data-oid="taglae."
              />

              <Calendar
                className="absolute right-3 top-2.5 h-4 w-4 text-gray-500"
                data-oid="2wchjlx"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" data-oid="hb7ksjb">
            Registrar Inversión
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
