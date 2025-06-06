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
import { Plus, ArrowDown, FileText, Calendar } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Gastos = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [supplier, setSupplier] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from("transactions").insert([
        {
          type: "gasto",
          amount: parseFloat(amount),
          description,
          category,
          supplier,
          date: date || new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      toast({
        title: "Gasto registrado",
        description: "El gasto ha sido registrado exitosamente",
      });

      // Reset form
      setAmount("");
      setCategory("");
      setDescription("");
      setDate("");
      setSupplier("");
    } catch (error) {
      console.error("Error al registrar gasto:", error);
      toast({
        title: "Error",
        description: "No se pudo registrar el gasto",
        variant: "destructive",
      });
    }
  };

  return (
    <MainLayout data-oid="ok4r_gv">
      <div className="space-y-4" data-oid="bfny6pv">
        <div className="flex items-center justify-between" data-oid="5d1omwx">
          <h1 className="text-2xl font-bold" data-oid="zmg3:a_">
            Gestión de Gastos
          </h1>
          <Button className="gap-1" data-oid="_v5kx3w">
            <Plus className="h-4 w-4" data-oid="xtjoue1" />
            <span data-oid="ih6hgfd">Nuevo Gasto</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4" data-oid="4jfae_d">
          <Card className="glass-morphism" data-oid="y6fiymr">
            <CardHeader data-oid="25_0704">
              <CardTitle data-oid="t0yp1xm">Registrar Gasto</CardTitle>
              <CardDescription data-oid="h:7kfn6">
                Ingrese los detalles del gasto
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="b_w5iwm">
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-oid="ff.3tan"
              >
                <div className="space-y-2" data-oid="ija8qqq">
                  <Label htmlFor="amount" data-oid="3:ha9dw">
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
                    data-oid="3tqt:-6"
                  />
                </div>

                <div className="space-y-2" data-oid=".8lyaif">
                  <Label htmlFor="category" data-oid="wefs_hi">
                    Categoría
                  </Label>
                  <Select
                    value={category}
                    onValueChange={setCategory}
                    data-oid="1fw5drt"
                  >
                    <SelectTrigger data-oid="5ie10k7">
                      <SelectValue
                        placeholder="Seleccione categoría"
                        data-oid="jc352-_"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="807e8_7">
                      <SelectItem value="compras" data-oid="lq6n7:r">
                        Compras
                      </SelectItem>
                      <SelectItem value="servicios" data-oid="e3mu74t">
                        Servicios
                      </SelectItem>
                      <SelectItem value="nomina" data-oid="rriq4pg">
                        Nómina
                      </SelectItem>
                      <SelectItem value="impuestos" data-oid="u415vd3">
                        Impuestos
                      </SelectItem>
                      <SelectItem value="alquiler" data-oid="tu0t-7q">
                        Alquiler
                      </SelectItem>
                      <SelectItem value="servicios_publicos" data-oid="6bu79:w">
                        Servicios Públicos
                      </SelectItem>
                      <SelectItem value="marketing" data-oid=":_kv9qf">
                        Marketing
                      </SelectItem>
                      <SelectItem value="otros" data-oid="61rsqw4">
                        Otros
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="olpng9x">
                  <Label htmlFor="supplier" data-oid="bjy17kd">
                    Proveedor
                  </Label>
                  <Input
                    id="supplier"
                    placeholder="Nombre del proveedor"
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                    data-oid="9x7983d"
                  />
                </div>

                <div className="space-y-2" data-oid="mjjul94">
                  <Label htmlFor="description" data-oid="_iw3fg5">
                    Descripción
                  </Label>
                  <Input
                    id="description"
                    placeholder="Descripción del gasto"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    data-oid="v46f3tb"
                  />
                </div>

                <div className="space-y-2" data-oid="jsr0c3u">
                  <Label htmlFor="date" data-oid="w2d6s-w">
                    Fecha
                  </Label>
                  <div className="relative" data-oid="ypx:766">
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      data-oid="870tl85"
                    />

                    <Calendar
                      className="absolute right-3 top-2.5 h-4 w-4 text-gray-500"
                      data-oid="mklqjli"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" data-oid="5:wnw1i">
                  Registrar Gasto
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="glass-morphism" data-oid="w4mw7h8">
            <CardHeader data-oid="k_ynxdz">
              <CardTitle data-oid="8i2jy_h">Últimos Gastos</CardTitle>
              <CardDescription data-oid="_znsh5y">
                Movimientos de gastos recientes
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="i7bw5ar">
              <div className="space-y-4" data-oid="fnl6ut-">
                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="d-wys:n"
                >
                  <div className="flex items-center gap-3" data-oid="f5qli9_">
                    <div
                      className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center"
                      data-oid="nd0vfik"
                    >
                      <ArrowDown
                        className="h-4 w-4 text-red-600"
                        data-oid=".38z6dt"
                      />
                    </div>
                    <div data-oid="1bmijw6">
                      <p className="font-medium" data-oid="gxsje5w">
                        Pago a Proveedor ABC
                      </p>
                      <p className="text-sm text-gray-500" data-oid="77txiwc">
                        Materiales
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="a7krkj6">
                    <p className="font-medium text-red-600" data-oid="acamc57">
                      -$1,840.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="gnd8yoo">
                      29/03/2025
                    </p>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="t8orv3k"
                >
                  <div className="flex items-center gap-3" data-oid="i_n3_8h">
                    <div
                      className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center"
                      data-oid="kh1ibeu"
                    >
                      <ArrowDown
                        className="h-4 w-4 text-red-600"
                        data-oid="a8xbg7u"
                      />
                    </div>
                    <div data-oid="uo172v4">
                      <p className="font-medium" data-oid="424n5_.">
                        Pago de Servicios
                      </p>
                      <p className="text-sm text-gray-500" data-oid="y36biwz">
                        Electricidad y agua
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="kyri14d">
                    <p className="font-medium text-red-600" data-oid="stzh1:.">
                      -$450.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="ot3:ofx">
                      28/03/2025
                    </p>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="58k4p6j"
                >
                  <div className="flex items-center gap-3" data-oid="kz2rms8">
                    <div
                      className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center"
                      data-oid="sjg_90-"
                    >
                      <FileText
                        className="h-4 w-4 text-red-600"
                        data-oid="m1vz5zw"
                      />
                    </div>
                    <div data-oid="wo9p_2t">
                      <p className="font-medium" data-oid="4bjat93">
                        Alquiler Oficina
                      </p>
                      <p className="text-sm text-gray-500" data-oid="y7jarwo">
                        Mes de abril
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="r:.pym.">
                    <p className="font-medium text-red-600" data-oid="j97vbmp">
                      -$2,500.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="eet_63c">
                      26/03/2025
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

export default Gastos;
