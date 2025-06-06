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
    <MainLayout data-oid="13anhuf">
      <div className="space-y-4" data-oid="nc._ckz">
        <div className="flex items-center justify-between" data-oid="naxrj4l">
          <h1 className="text-2xl font-bold" data-oid="3x6g5vl">
            Gestión de Ingresos
          </h1>
          <Button className="gap-1" data-oid="z7xdpb_">
            <Plus className="h-4 w-4" data-oid="xx7pzuo" />
            <span data-oid="cbjj390">Nuevo Ingreso</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4" data-oid="wxo199i">
          <Card className="glass-morphism" data-oid="zn9x-_l">
            <CardHeader data-oid="x9kyxf5">
              <CardTitle data-oid="2ha-pt4">Registrar Ingreso</CardTitle>
              <CardDescription data-oid="m2ycy-3">
                Ingrese los detalles del ingreso
              </CardDescription>
            </CardHeader>
            <CardContent data-oid=".v:1a21">
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-oid="g8p1r4i"
              >
                <div className="space-y-2" data-oid="5q9hnyl">
                  <Label htmlFor="amount" data-oid="5qo:z5l">
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
                    data-oid="4:uibpe"
                  />
                </div>

                <div className="space-y-2" data-oid="kd8zo20">
                  <Label htmlFor="category" data-oid="d255-p-">
                    Categoría
                  </Label>
                  <Select
                    value={category}
                    onValueChange={setCategory}
                    data-oid="z1:pn.n"
                  >
                    <SelectTrigger data-oid="v6db10y">
                      <SelectValue
                        placeholder="Seleccione categoría"
                        data-oid="7w9o4w5"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="yp3ddke">
                      <SelectItem value="ventas" data-oid="yog6-6d">
                        Ventas
                      </SelectItem>
                      <SelectItem value="servicios" data-oid="3n7j23x">
                        Servicios
                      </SelectItem>
                      <SelectItem value="comisiones" data-oid="6-cxp8f">
                        Comisiones
                      </SelectItem>
                      <SelectItem value="inversiones" data-oid="uz0qyil">
                        Rendimiento de Inversiones
                      </SelectItem>
                      <SelectItem value="otros" data-oid="pf9ch8z">
                        Otros
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="npv_di8">
                  <Label htmlFor="client" data-oid="_da4._w">
                    Cliente
                  </Label>
                  <Input
                    id="client"
                    placeholder="Nombre del cliente"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    data-oid="-oxom:z"
                  />
                </div>

                <div className="space-y-2" data-oid="myea83d">
                  <Label htmlFor="description" data-oid="6w8hos-">
                    Descripción
                  </Label>
                  <Input
                    id="description"
                    placeholder="Descripción del ingreso"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    data-oid="nkpgie:"
                  />
                </div>

                <div className="space-y-2" data-oid="1d9x0n5">
                  <Label htmlFor="date" data-oid="-tah_12">
                    Fecha
                  </Label>
                  <div className="relative" data-oid="b9o9inn">
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      data-oid="4sgpv7-"
                    />

                    <Calendar
                      className="absolute right-3 top-2.5 h-4 w-4 text-gray-500"
                      data-oid="78a5:yt"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" data-oid=":3q0vfs">
                  Registrar Ingreso
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="glass-morphism" data-oid="uhuljz-">
            <CardHeader data-oid="rjfaigt">
              <CardTitle data-oid="qg4d0k_">Últimos Ingresos</CardTitle>
              <CardDescription data-oid="-v7jbaa">
                Movimientos de ingresos recientes
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="_4fvkjd">
              <div className="space-y-4" data-oid="q8h1r5t">
                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="78ueya4"
                >
                  <div className="flex items-center gap-3" data-oid="c-qznds">
                    <div
                      className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                      data-oid="m4xxvc0"
                    >
                      <ArrowUp
                        className="h-4 w-4 text-green-600"
                        data-oid="cbga_rd"
                      />
                    </div>
                    <div data-oid="pbi:rn-">
                      <p className="font-medium" data-oid="cldo:3j">
                        Pago de Cliente XYZ
                      </p>
                      <p className="text-sm text-gray-500" data-oid="5a:tq56">
                        Factura #2023-156
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="jb7ympf">
                    <p
                      className="font-medium text-green-600"
                      data-oid="gvvv8.i"
                    >
                      +$5,200.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="99-y43j">
                      Ayer
                    </p>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="c3xwn9_"
                >
                  <div className="flex items-center gap-3" data-oid="ajem851">
                    <div
                      className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                      data-oid="_8h9bp1"
                    >
                      <ArrowUp
                        className="h-4 w-4 text-green-600"
                        data-oid="n7-e6ys"
                      />
                    </div>
                    <div data-oid="1ea7x7-">
                      <p className="font-medium" data-oid="vdmt33l">
                        Consultoría Cliente DEF
                      </p>
                      <p className="text-sm text-gray-500" data-oid="smv:6zz">
                        Proyecto anual
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="o7pj:nc">
                    <p
                      className="font-medium text-green-600"
                      data-oid="tzcnpkr"
                    >
                      +$12,000.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="cfm3_5j">
                      27/03/2025
                    </p>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="t86dv3:"
                >
                  <div className="flex items-center gap-3" data-oid="xahgfac">
                    <div
                      className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                      data-oid="n0:y0ie"
                    >
                      <FileText
                        className="h-4 w-4 text-green-600"
                        data-oid="u6jhe-g"
                      />
                    </div>
                    <div data-oid="16z26zy">
                      <p className="font-medium" data-oid="p3z_va.">
                        Venta de Productos
                      </p>
                      <p className="text-sm text-gray-500" data-oid=".pwks3y">
                        Cliente ABC
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid=":ci-aqf">
                    <p
                      className="font-medium text-green-600"
                      data-oid="ox5x814"
                    >
                      +$3,450.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid=".z1wcm8">
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
