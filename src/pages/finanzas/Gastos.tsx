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
    <MainLayout data-oid="lwm-y1p">
      <div className="space-y-4" data-oid="n32u6ou">
        <div className="flex items-center justify-between" data-oid="tyn-3.w">
          <h1 className="text-2xl font-bold" data-oid="k92tla5">
            Gestión de Gastos
          </h1>
          <Button className="gap-1" data-oid="0rdizvf">
            <Plus className="h-4 w-4" data-oid="qinda1-" />
            <span data-oid="e_kfjp:">Nuevo Gasto</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4" data-oid="-me_rpq">
          <Card className="glass-morphism" data-oid="v:ut4mh">
            <CardHeader data-oid="0xx8sno">
              <CardTitle data-oid="eqot3u1">Registrar Gasto</CardTitle>
              <CardDescription data-oid="lub0mtf">
                Ingrese los detalles del gasto
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="7uemegv">
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-oid="0r.0:e3"
              >
                <div className="space-y-2" data-oid="vj2x.np">
                  <Label htmlFor="amount" data-oid="4zdcjub">
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
                    data-oid="-cno8nu"
                  />
                </div>

                <div className="space-y-2" data-oid="uugte-.">
                  <Label htmlFor="category" data-oid="u72r6m6">
                    Categoría
                  </Label>
                  <Select
                    value={category}
                    onValueChange={setCategory}
                    data-oid="gg_z1xi"
                  >
                    <SelectTrigger data-oid="zcneund">
                      <SelectValue
                        placeholder="Seleccione categoría"
                        data-oid="0q1pqjf"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="oehfm80">
                      <SelectItem value="compras" data-oid="7m67ex3">
                        Compras
                      </SelectItem>
                      <SelectItem value="servicios" data-oid="jn3xrel">
                        Servicios
                      </SelectItem>
                      <SelectItem value="nomina" data-oid=".fk8r.8">
                        Nómina
                      </SelectItem>
                      <SelectItem value="impuestos" data-oid="p5:xsaw">
                        Impuestos
                      </SelectItem>
                      <SelectItem value="alquiler" data-oid="2-s:-og">
                        Alquiler
                      </SelectItem>
                      <SelectItem value="servicios_publicos" data-oid="osl7rk-">
                        Servicios Públicos
                      </SelectItem>
                      <SelectItem value="marketing" data-oid="vsbqlz8">
                        Marketing
                      </SelectItem>
                      <SelectItem value="otros" data-oid="p85rzhq">
                        Otros
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="oxw_vip">
                  <Label htmlFor="supplier" data-oid="b1f4k96">
                    Proveedor
                  </Label>
                  <Input
                    id="supplier"
                    placeholder="Nombre del proveedor"
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                    data-oid="90_4j30"
                  />
                </div>

                <div className="space-y-2" data-oid="ulceuzi">
                  <Label htmlFor="description" data-oid="o48tyql">
                    Descripción
                  </Label>
                  <Input
                    id="description"
                    placeholder="Descripción del gasto"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    data-oid="43tevij"
                  />
                </div>

                <div className="space-y-2" data-oid="-r6e-.j">
                  <Label htmlFor="date" data-oid="3xlq25l">
                    Fecha
                  </Label>
                  <div className="relative" data-oid="ko2.07s">
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      data-oid="ebcl8dw"
                    />

                    <Calendar
                      className="absolute right-3 top-2.5 h-4 w-4 text-gray-500"
                      data-oid="az6o6g6"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" data-oid="k3yfrkv">
                  Registrar Gasto
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="glass-morphism" data-oid="tct9z7p">
            <CardHeader data-oid="18uf:l5">
              <CardTitle data-oid="58lpvwn">Últimos Gastos</CardTitle>
              <CardDescription data-oid="bo-mq:9">
                Movimientos de gastos recientes
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="wi70hod">
              <div className="space-y-4" data-oid=":pnc4x2">
                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="_otpi9k"
                >
                  <div className="flex items-center gap-3" data-oid="-9w7g.p">
                    <div
                      className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center"
                      data-oid="acx2h-j"
                    >
                      <ArrowDown
                        className="h-4 w-4 text-red-600"
                        data-oid="-cr_y93"
                      />
                    </div>
                    <div data-oid="w9h6d94">
                      <p className="font-medium" data-oid="q30opm:">
                        Pago a Proveedor ABC
                      </p>
                      <p className="text-sm text-gray-500" data-oid="ufbp5x1">
                        Materiales
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="2tea4z:">
                    <p className="font-medium text-red-600" data-oid="7y.9p_s">
                      -$1,840.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="jfp:fd9">
                      29/03/2025
                    </p>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="476t3wi"
                >
                  <div className="flex items-center gap-3" data-oid="1uupmbx">
                    <div
                      className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center"
                      data-oid="m0nkmru"
                    >
                      <ArrowDown
                        className="h-4 w-4 text-red-600"
                        data-oid="xg84gab"
                      />
                    </div>
                    <div data-oid="6d85.9.">
                      <p className="font-medium" data-oid="u_4q58m">
                        Pago de Servicios
                      </p>
                      <p className="text-sm text-gray-500" data-oid="dow1b7e">
                        Electricidad y agua
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="g-bsqqd">
                    <p className="font-medium text-red-600" data-oid="4u1bdv2">
                      -$450.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="a5wmy:.">
                      28/03/2025
                    </p>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                  data-oid="9wdnzu."
                >
                  <div className="flex items-center gap-3" data-oid="3h5x5w0">
                    <div
                      className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center"
                      data-oid="xwwul8a"
                    >
                      <FileText
                        className="h-4 w-4 text-red-600"
                        data-oid="94950ap"
                      />
                    </div>
                    <div data-oid="uprv2k.">
                      <p className="font-medium" data-oid="t9kkpww">
                        Alquiler Oficina
                      </p>
                      <p className="text-sm text-gray-500" data-oid="6ah7zar">
                        Mes de abril
                      </p>
                    </div>
                  </div>
                  <div className="text-right" data-oid="8rm2.y3">
                    <p className="font-medium text-red-600" data-oid="3-6c3fj">
                      -$2,500.00
                    </p>
                    <p className="text-sm text-gray-500" data-oid="k2m807l">
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
