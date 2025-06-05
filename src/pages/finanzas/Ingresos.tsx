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
    <MainLayout data-oid="ov7tg.n">
      <div className="space-y-4" data-oid="e5st.c.">
        <div className="flex items-center justify-between" data-oid="ew3a87q">
          <h1 className="text-2xl font-bold" data-oid="krcxao2">
            Gestión de Ingresos
          </h1>
          <Button className="gap-1" data-oid="8gq8rpr">
            <Plus className="h-4 w-4" data-oid="1eaerb2" />
            <span data-oid="gwnaajo">Nuevo Ingreso</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4" data-oid="hszn-j4">
          <Card className="glass-morphism" data-oid="wi.yquv">
            <CardHeader data-oid="_sc30tq">
              <CardTitle data-oid="1gvksh0">Registrar Ingreso</CardTitle>
              <CardDescription data-oid="_.lcpev">
                Ingrese los detalles del ingreso
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="8gzop47">
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-oid="m_dc505"
              >
                <div className="space-y-2" data-oid="0jf-dal">
                  <Label htmlFor="amount" data-oid="fuf4t0h">
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
                    data-oid="7904i4-"
                  />
                </div>

                <div className="space-y-2" data-oid="4y04:t2">
                  <Label htmlFor="category" data-oid="5jns.w4">
                    Categoría
                  </Label>
                  <Select
                    value={category}
                    onValueChange={setCategory}
                    data-oid="jsv1v0f"
                  >
                    <SelectTrigger data-oid="ypwikw_">
                      <SelectValue
                        placeholder="Seleccione categoría"
                        data-oid="_p19ms."
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="d6eqd.y">
                      <SelectItem value="ventas" data-oid="nnry:_1">
                        Ventas
                      </SelectItem>
                      <SelectItem value="servicios" data-oid="w3p6oe1">
                        Servicios
                      </SelectItem>
                      <SelectItem value="comisiones" data-oid="u2ipgjc">
                        Comisiones
                      </SelectItem>
                      <SelectItem value="inversiones" data-oid="ua58rz.">
                        Rendimiento de Inversiones
                      </SelectItem>
                      <SelectItem value="otros" data-oid="nya34ze">
                        Otros
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="hi03h5f">
                  <Label htmlFor="client" data-oid="sc:mzky">
                    Cliente
                  </Label>
                  <Input
                    id="client"
                    placeholder="Nombre del cliente"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    data-oid="br:v-.i"
                  />
                </div>

                <div className="space-y-2" data-oid="--ewsyl">
                  <Label htmlFor="description" data-oid="e.:h64a">
                    Descripción
                  </Label>
                  <Input
                    id="description"
                    placeholder="Descripción del ingreso"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    data-oid="vao-_iy"
                  />
                </div>

                <div className="space-y-2" data-oid="s0_jox4">
                  <Label htmlFor="date" data-oid="hcu63nw">
                    Fecha
                  </Label>
                  <div className="relative" data-oid="fisrnsq">
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      data-oid="vnd-veb"
                    />

                    <Calendar
                      className="absolute right-3 top-2.5 h-4 w-4 text-gray-500"
                      data-oid="gyh6yfo"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" data-oid="6s74r-3">
                  Registrar Ingreso
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="glass-morphism" data-oid="ui3hckh">
            <CardHeader data-oid="mfusn11">
              <CardTitle data-oid="zcsu-au">Últimos Ingresos</CardTitle>
              <CardDescription data-oid="sp:zy5a">
                Movimientos de ingresos recientes
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="ow79ip4">
              <div className="space-y-4" data-oid="zpttm7u">
                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="yhnuwfe"
                >
                  <div className="flex items-center gap-3" data-oid="2xwun0e">
                    <div
                      className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                      data-oid="whsrk08"
                    >
                      <ArrowUp
                        className="h-4 w-4 text-green-600"
                        data-oid="29x1p7-"
                      />
                    </div>
                    <div data-oid="jvdckcd">
                      <p className="font-medium" data-oid=":ppckq-">
                        Pago de Cliente XYZ
                      </p>
                      <p className="text-sm text-gray-500" data-oid="-o:6cf3">
                        Factura #2023-156
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="0_ngrtg">
                    <p
                      className="font-medium text-green-600"
                      data-oid="vks-cbl"
                    >
                      +$5,200.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="fw4a02v">
                      Ayer
                    </p>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="8d9h-39"
                >
                  <div className="flex items-center gap-3" data-oid="x8pa2uf">
                    <div
                      className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                      data-oid="hxtp4gr"
                    >
                      <ArrowUp
                        className="h-4 w-4 text-green-600"
                        data-oid="6g3ihzn"
                      />
                    </div>
                    <div data-oid="u0b7h9q">
                      <p className="font-medium" data-oid="hlcsy1p">
                        Consultoría Cliente DEF
                      </p>
                      <p className="text-sm text-gray-500" data-oid="r_m9s1r">
                        Proyecto anual
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="fq_m-gd">
                    <p
                      className="font-medium text-green-600"
                      data-oid="5k3zug5"
                    >
                      +$12,000.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="0cjknlx">
                      27/03/2025
                    </p>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="j8z-o6:"
                >
                  <div className="flex items-center gap-3" data-oid="nq.3ott">
                    <div
                      className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                      data-oid="dzuo3u6"
                    >
                      <FileText
                        className="h-4 w-4 text-green-600"
                        data-oid="15gza95"
                      />
                    </div>
                    <div data-oid="acc2zdv">
                      <p className="font-medium" data-oid="18e6j1j">
                        Venta de Productos
                      </p>
                      <p className="text-sm text-gray-500" data-oid=":nxlrje">
                        Cliente ABC
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="1d5priv">
                    <p
                      className="font-medium text-green-600"
                      data-oid="t.6k89-"
                    >
                      +$3,450.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="a8l.3s4">
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
