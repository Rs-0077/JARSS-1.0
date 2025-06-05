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
    <MainLayout data-oid="q3cmc_8">
      <div className="space-y-4" data-oid="kq7_5-3">
        <div className="flex items-center justify-between" data-oid="d13uq2l">
          <h1 className="text-2xl font-bold" data-oid="t2.czwz">
            Gestión de Gastos
          </h1>
          <Button className="gap-1" data-oid="a.hb6qm">
            <Plus className="h-4 w-4" data-oid="rbxiz4o" />
            <span data-oid="czjy..m">Nuevo Gasto</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4" data-oid="nj3dmff">
          <Card className="glass-morphism" data-oid="6bar7rm">
            <CardHeader data-oid=":51etf9">
              <CardTitle data-oid="de:v90g">Registrar Gasto</CardTitle>
              <CardDescription data-oid="vo34ur_">
                Ingrese los detalles del gasto
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="7p89qzz">
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-oid="3vfgif0"
              >
                <div className="space-y-2" data-oid="s3i8-0d">
                  <Label htmlFor="amount" data-oid="6wx8boo">
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
                    data-oid="0wd-pjt"
                  />
                </div>

                <div className="space-y-2" data-oid="1f6e6ay">
                  <Label htmlFor="category" data-oid="sad6i9w">
                    Categoría
                  </Label>
                  <Select
                    value={category}
                    onValueChange={setCategory}
                    data-oid="dmx8c1m"
                  >
                    <SelectTrigger data-oid="ydts--y">
                      <SelectValue
                        placeholder="Seleccione categoría"
                        data-oid="133.814"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="jbpyi5m">
                      <SelectItem value="compras" data-oid="l1if8qv">
                        Compras
                      </SelectItem>
                      <SelectItem value="servicios" data-oid="2f8i.4h">
                        Servicios
                      </SelectItem>
                      <SelectItem value="nomina" data-oid="7ouhcqn">
                        Nómina
                      </SelectItem>
                      <SelectItem value="impuestos" data-oid="kat6q3-">
                        Impuestos
                      </SelectItem>
                      <SelectItem value="alquiler" data-oid="2zwpm7z">
                        Alquiler
                      </SelectItem>
                      <SelectItem value="servicios_publicos" data-oid="-f25dqp">
                        Servicios Públicos
                      </SelectItem>
                      <SelectItem value="marketing" data-oid=":kl63g4">
                        Marketing
                      </SelectItem>
                      <SelectItem value="otros" data-oid="yevrg08">
                        Otros
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="ry2ifvs">
                  <Label htmlFor="supplier" data-oid="o1t6lnh">
                    Proveedor
                  </Label>
                  <Input
                    id="supplier"
                    placeholder="Nombre del proveedor"
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                    data-oid="ymcz5pt"
                  />
                </div>

                <div className="space-y-2" data-oid="_mirt:t">
                  <Label htmlFor="description" data-oid="mzqka12">
                    Descripción
                  </Label>
                  <Input
                    id="description"
                    placeholder="Descripción del gasto"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    data-oid="t21t2k5"
                  />
                </div>

                <div className="space-y-2" data-oid="-f6k2bx">
                  <Label htmlFor="date" data-oid="8:q0uuk">
                    Fecha
                  </Label>
                  <div className="relative" data-oid="y2wm.7j">
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      data-oid="w4brisx"
                    />

                    <Calendar
                      className="absolute right-3 top-2.5 h-4 w-4 text-gray-500"
                      data-oid="nknw1sj"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" data-oid="cin_bug">
                  Registrar Gasto
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="glass-morphism" data-oid="c_r-4gj">
            <CardHeader data-oid="t36jeek">
              <CardTitle data-oid="c1zm:y_">Últimos Gastos</CardTitle>
              <CardDescription data-oid="1p6_-_s">
                Movimientos de gastos recientes
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="227qu_g">
              <div className="space-y-4" data-oid="hz9eaay">
                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="zicia-i"
                >
                  <div className="flex items-center gap-3" data-oid="lemsesb">
                    <div
                      className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center"
                      data-oid="79k-05l"
                    >
                      <ArrowDown
                        className="h-4 w-4 text-red-600"
                        data-oid="ha1.enr"
                      />
                    </div>
                    <div data-oid=".5-j-5:">
                      <p className="font-medium" data-oid="nqxd..u">
                        Pago a Proveedor ABC
                      </p>
                      <p className="text-sm text-gray-500" data-oid="5vjef:p">
                        Materiales
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="hdy:h4w">
                    <p className="font-medium text-red-600" data-oid="co_5r1h">
                      -$1,840.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="_3ya3zc">
                      29/03/2025
                    </p>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="qvvrr-i"
                >
                  <div className="flex items-center gap-3" data-oid="1w44y0m">
                    <div
                      className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center"
                      data-oid="ov.59r7"
                    >
                      <ArrowDown
                        className="h-4 w-4 text-red-600"
                        data-oid="-pc6yng"
                      />
                    </div>
                    <div data-oid=".7vpk0q">
                      <p className="font-medium" data-oid="_7dv5u4">
                        Pago de Servicios
                      </p>
                      <p className="text-sm text-gray-500" data-oid="kw8cv-f">
                        Electricidad y agua
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="d07ib:8">
                    <p className="font-medium text-red-600" data-oid="kdnse-r">
                      -$450.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="hst.hhj">
                      28/03/2025
                    </p>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="_i6vdr1"
                >
                  <div className="flex items-center gap-3" data-oid="nw29m06">
                    <div
                      className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center"
                      data-oid="rhwejo2"
                    >
                      <FileText
                        className="h-4 w-4 text-red-600"
                        data-oid="yts:qxu"
                      />
                    </div>
                    <div data-oid="1dalj2l">
                      <p className="font-medium" data-oid="i7366sb">
                        Alquiler Oficina
                      </p>
                      <p className="text-sm text-gray-500" data-oid="sqba1ew">
                        Mes de abril
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="0pf_ll7">
                    <p className="font-medium text-red-600" data-oid="y19vktw">
                      -$2,500.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="jtqqwoy">
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
