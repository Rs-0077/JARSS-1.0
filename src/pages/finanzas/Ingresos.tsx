import { MainLayout } from "@/components/layout/MainLayout";
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
import { useState } from "react";
import { Plus, ArrowUp, FileText, Calendar } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Ingresos = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [client, setClient] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from("transactions").insert([
        {
          type: "ingreso",
          amount: parseFloat(amount),
          description,
          category,
          client,
          date: date || new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      toast({
        title: "Ingreso registrado",
        description: "El ingreso ha sido registrado exitosamente",
      });

      // Reset form
      setAmount("");
      setCategory("");
      setDescription("");
      setDate("");
      setClient("");
    } catch (error) {
      console.error("Error al registrar ingreso:", error);
      toast({
        title: "Error",
        description: "No se pudo registrar el ingreso",
        variant: "destructive",
      });
    }
  };

  return (
    <MainLayout data-oid="e472z1t">
      <div className="space-y-4" data-oid="_am7jh-">
        <div className="flex items-center justify-between" data-oid="jo:_chd">
          <h1 className="text-2xl font-bold" data-oid="iv:b2q4">
            Gestión de Ingresos
          </h1>
          <Button className="gap-1" data-oid="lr8vvlf">
            <Plus className="h-4 w-4" data-oid="q-:n7g9" />
            <span data-oid="kpglpl7">Nuevo Ingreso</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4" data-oid="c7a4sp5">
          <Card className="glass-morphism" data-oid="v0r1i9q">
            <CardHeader data-oid="qg9-63i">
              <CardTitle data-oid="fzcmqc8">Registrar Ingreso</CardTitle>
              <CardDescription data-oid="_pqbpcs">
                Ingrese los detalles del ingreso
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="crqpx71">
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-oid="d_0q94h"
              >
                <div className="space-y-2" data-oid="q6dkjk1">
                  <Label htmlFor="amount" data-oid="8fxwgqn">
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
                    data-oid="j8lmfrm"
                  />
                </div>

                <div className="space-y-2" data-oid="2eeq.yl">
                  <Label htmlFor="category" data-oid="t3.mses">
                    Categoría
                  </Label>
                  <Select
                    value={category}
                    onValueChange={setCategory}
                    data-oid=".ybxhk2"
                  >
                    <SelectTrigger data-oid="fln.8de">
                      <SelectValue
                        placeholder="Seleccione categoría"
                        data-oid="w2phbgt"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="z2_8zr0">
                      <SelectItem value="ventas" data-oid="z5s-rlv">
                        Ventas
                      </SelectItem>
                      <SelectItem value="servicios" data-oid="07z7upt">
                        Servicios
                      </SelectItem>
                      <SelectItem value="comisiones" data-oid="tqy29u8">
                        Comisiones
                      </SelectItem>
                      <SelectItem value="inversiones" data-oid="n45y.35">
                        Rendimiento de Inversiones
                      </SelectItem>
                      <SelectItem value="otros" data-oid=":4kg3xt">
                        Otros
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="otinrzc">
                  <Label htmlFor="client" data-oid="8otd6tz">
                    Cliente
                  </Label>
                  <Input
                    id="client"
                    placeholder="Nombre del cliente"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    data-oid="r.cxwzu"
                  />
                </div>

                <div className="space-y-2" data-oid="cirxtj.">
                  <Label htmlFor="description" data-oid="nxzlfbt">
                    Descripción
                  </Label>
                  <Input
                    id="description"
                    placeholder="Descripción del ingreso"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    data-oid="hgy66r5"
                  />
                </div>

                <div className="space-y-2" data-oid="j88ob.p">
                  <Label htmlFor="date" data-oid=".-jcxpd">
                    Fecha
                  </Label>
                  <div className="relative" data-oid="d.e_870">
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      data-oid="lehf:-8"
                    />

                    <Calendar
                      className="absolute right-3 top-2.5 h-4 w-4 text-gray-500"
                      data-oid="414nb77"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" data-oid="3r7t8u8">
                  Registrar Ingreso
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="glass-morphism" data-oid="8uu-561">
            <CardHeader data-oid="sck8mv0">
              <CardTitle data-oid="zlttljf">Últimos Ingresos</CardTitle>
              <CardDescription data-oid="_.sviuw">
                Movimientos de ingresos recientes
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="m201e9i">
              <div className="space-y-4" data-oid="8g_wdqd">
                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="52x6x7a"
                >
                  <div className="flex items-center gap-3" data-oid="jah8fyh">
                    <div
                      className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                      data-oid="3alhkyl"
                    >
                      <ArrowUp
                        className="h-4 w-4 text-green-600"
                        data-oid="prn08sx"
                      />
                    </div>
                    <div data-oid="bz78:sc">
                      <p className="font-medium" data-oid="-4e1wxg">
                        Pago de Cliente XYZ
                      </p>
                      <p className="text-sm text-gray-500" data-oid="b8dvs62">
                        Factura #2023-156
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="f06liyu">
                    <p
                      className="font-medium text-green-600"
                      data-oid="pze:jz1"
                    >
                      +$5,200.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="odvgbnx">
                      Ayer
                    </p>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="fzpysgk"
                >
                  <div className="flex items-center gap-3" data-oid="7yeiwmv">
                    <div
                      className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                      data-oid="hxl40zg"
                    >
                      <ArrowUp
                        className="h-4 w-4 text-green-600"
                        data-oid="1nz4xmj"
                      />
                    </div>
                    <div data-oid="zuumwop">
                      <p className="font-medium" data-oid="ji_8e9u">
                        Consultoría Cliente DEF
                      </p>
                      <p className="text-sm text-gray-500" data-oid="39g0y:m">
                        Proyecto anual
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="9vmi.84">
                    <p
                      className="font-medium text-green-600"
                      data-oid="kqdjvyt"
                    >
                      +$12,000.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="nqxq.6o">
                      27/03/2025
                    </p>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="pm4rg3-"
                >
                  <div className="flex items-center gap-3" data-oid="lys-28o">
                    <div
                      className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                      data-oid="d2f03i3"
                    >
                      <FileText
                        className="h-4 w-4 text-green-600"
                        data-oid="ym7q2dm"
                      />
                    </div>
                    <div data-oid="ska7zoo">
                      <p className="font-medium" data-oid="31qxww.">
                        Venta de Productos
                      </p>
                      <p className="text-sm text-gray-500" data-oid="aw1cz3h">
                        Cliente ABC
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="wau00_n">
                    <p
                      className="font-medium text-green-600"
                      data-oid="1milfe8"
                    >
                      +$3,450.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="70lam:.">
                      25/03/2025
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Ingresos;
