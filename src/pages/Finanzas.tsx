import { MainLayout } from "@/components/layout/MainLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/dashboard/StatCard";
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
import {
  PiggyBank,
  Receipt,
  Wallet,
  CreditCard,
  Plus,
  FileText,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

const Finanzas = () => {
  const [transactionType, setTransactionType] = useState("ingreso");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [account, setAccount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from("transactions").insert([
        {
          type: transactionType,
          amount: parseFloat(amount),
          description,
          date: date || new Date().toISOString(),
          account_id: account || null,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Transacción registrada",
        description: "La transacción ha sido registrada exitosamente",
      });

      // Reset form
      setAmount("");
      setCategory("");
      setDescription("");
      setDate("");
    } catch (error) {
      console.error("Error al registrar transacción:", error);
      toast({
        title: "Error",
        description: "No se pudo registrar la transacción",
        variant: "destructive",
      });
    }
  };

  return (
    <MainLayout data-oid="7s-l-zy">
      <div className="space-y-4" data-oid="i:tav3p">
        <div className="flex items-center justify-between" data-oid="num4f3t">
          <h1 className="text-2xl font-bold" data-oid=":7mn_ht">
            Gestión Financiera
          </h1>
          <Button className="gap-1" data-oid="n2zaysk">
            <Plus className="h-4 w-4" data-oid="2lnmug9" />
            <span data-oid="fx.mkzl">Nueva Transacción</span>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4" data-oid="z-tj19k">
          <StatCard
            title="Balance Total"
            value="$124,500.00"
            icon={Wallet}
            trend="up"
            trendValue="+8.2% desde el mes pasado"
            data-oid="1e09ah_"
          />

          <StatCard
            title="Ingresos (Mes)"
            value="$28,750.00"
            icon={ArrowUp}
            trend="up"
            trendValue="+5.4% desde el mes pasado"
            data-oid="vone:ow"
          />

          <StatCard
            title="Gastos (Mes)"
            value="$12,340.00"
            icon={ArrowDown}
            trend="down"
            trendValue="-2.7% desde el mes pasado"
            data-oid="pzs7.ee"
          />

          <StatCard
            title="Cuentas por Cobrar"
            value="$18,300.00"
            icon={Receipt}
            trend="neutral"
            trendValue="4 facturas pendientes"
            data-oid="obvafis"
          />
        </div>

        <Tabs defaultValue="transacciones" data-oid="-_5u.xw">
          <TabsList
            className="grid w-full grid-cols-3 max-w-md"
            data-oid="jr73ajm"
          >
            <TabsTrigger value="transacciones" data-oid="ulw0xen">
              Transacciones
            </TabsTrigger>
            <TabsTrigger value="cuentas" data-oid="kunlpot">
              Cuentas
            </TabsTrigger>
            <TabsTrigger value="conciliacion" data-oid="xxzamk_">
              Conciliación
            </TabsTrigger>
          </TabsList>
          <TabsContent value="transacciones" data-oid="jtzsc:b">
            <div className="grid md:grid-cols-3 gap-4" data-oid=":kyeqgv">
              <Card className="md:col-span-1 glass-morphism" data-oid="hxrdlw4">
                <CardHeader data-oid="vq3aao4">
                  <CardTitle data-oid=":bada5_">
                    Registrar Transacción
                  </CardTitle>
                  <CardDescription data-oid="a1z73kx">
                    Ingrese los detalles de la transacción
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid="fhmjmt:">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    data-oid="_huzh.s"
                  >
                    <div className="space-y-2" data-oid="9.xmmp.">
                      <Label htmlFor="tipo" data-oid="59b8d03">
                        Tipo de Transacción
                      </Label>
                      <Select
                        value={transactionType}
                        onValueChange={setTransactionType}
                        data-oid="7ze2h6e"
                      >
                        <SelectTrigger data-oid="8zp16gl">
                          <SelectValue
                            placeholder="Seleccione tipo"
                            data-oid="vo8s7ru"
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="bpkifcg">
                          <SelectItem value="ingreso" data-oid="1_zdkj6">
                            Ingreso
                          </SelectItem>
                          <SelectItem value="gasto" data-oid="2pu:mqd">
                            Gasto
                          </SelectItem>
                          <SelectItem value="transferencia" data-oid="w5591wt">
                            Transferencia
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2" data-oid="d8y15m_">
                      <Label htmlFor="amount" data-oid="yl5hymh">
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
                        data-oid="qxndhel"
                      />
                    </div>

                    <div className="space-y-2" data-oid="3.5baj9">
                      <Label htmlFor="category" data-oid=":qwc5jh">
                        Categoría
                      </Label>
                      <Select
                        value={category}
                        onValueChange={setCategory}
                        data-oid="oio1kun"
                      >
                        <SelectTrigger data-oid="r:pwgt8">
                          <SelectValue
                            placeholder="Seleccione categoría"
                            data-oid="sp5etod"
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="u9_4z.w">
                          <SelectItem value="ventas" data-oid="8w1:onp">
                            Ventas
                          </SelectItem>
                          <SelectItem value="servicios" data-oid="gopwnla">
                            Servicios
                          </SelectItem>
                          <SelectItem value="comisiones" data-oid="5hj6fru">
                            Comisiones
                          </SelectItem>
                          <SelectItem value="compras" data-oid="g3q-3.g">
                            Compras
                          </SelectItem>
                          <SelectItem value="servicios" data-oid="1u_dro3">
                            Servicios
                          </SelectItem>
                          <SelectItem value="nomina" data-oid="ds5d9wh">
                            Nómina
                          </SelectItem>
                          <SelectItem value="impuestos" data-oid="txer4t7">
                            Impuestos
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2" data-oid="747vqoj">
                      <Label htmlFor="description" data-oid="11u316v">
                        Descripción
                      </Label>
                      <Input
                        id="description"
                        placeholder="Descripción de la transacción"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        data-oid="pvuviyk"
                      />
                    </div>

                    <div className="space-y-2" data-oid="56ccr7n">
                      <Label htmlFor="date" data-oid="9p5ci5x">
                        Fecha
                      </Label>
                      <div className="relative" data-oid="22_6hn-">
                        <Input
                          id="date"
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          data-oid="6:cegsv"
                        />

                        <Calendar
                          className="absolute right-3 top-2.5 h-4 w-4 text-gray-500"
                          data-oid=":5:qdck"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" data-oid="bt7pfg-">
                      Registrar Transacción
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 glass-morphism" data-oid="h.lqfnx">
                <CardHeader data-oid="tui7-5i">
                  <CardTitle data-oid="deewtqr">
                    Últimas Transacciones
                  </CardTitle>
                  <CardDescription data-oid="m:yjio4">
                    Movimientos financieros recientes
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid="9sa22.m">
                  <div className="space-y-4" data-oid="101ijk-">
                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="00s4-nr"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="3xim:_c"
                      >
                        <div
                          className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                          data-oid="oq3j1hs"
                        >
                          <ArrowUp
                            className="h-4 w-4 text-green-600"
                            data-oid="ebm4fs8"
                          />
                        </div>
                        <div data-oid="db2k_t.">
                          <p className="font-medium" data-oid="vg6j7:p">
                            Pago de Cliente XYZ
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="8_16o29"
                          >
                            Factura #2023-156
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="ua.wur2">
                        <p
                          className="font-medium text-green-600"
                          data-oid="us7afuk"
                        >
                          +$5,200.00
                        </p>
                        <p className="text-sm text-gray-500" data-oid="4jt:6gx">
                          Ayer
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="39xy_83"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="r2cz:pb"
                      >
                        <div
                          className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center"
                          data-oid="vp_fkpp"
                        >
                          <ArrowDown
                            className="h-4 w-4 text-red-600"
                            data-oid="9sketi_"
                          />
                        </div>
                        <div data-oid="3a8ne12">
                          <p className="font-medium" data-oid=".xlb_b2">
                            Pago a Proveedor ABC
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="8-1uiz-"
                          >
                            Materiales
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="r4z.7u7">
                        <p
                          className="font-medium text-red-600"
                          data-oid="47pyz23"
                        >
                          -$1,840.00
                        </p>
                        <p className="text-sm text-gray-500" data-oid="xlzq6za">
                          29/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="t1t2as3"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="i0v-2kq"
                      >
                        <div
                          className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                          data-oid="63yxyu-"
                        >
                          <ArrowUp
                            className="h-4 w-4 text-green-600"
                            data-oid="q0epvkd"
                          />
                        </div>
                        <div data-oid="4rill42">
                          <p className="font-medium" data-oid="4.4:37k">
                            Consultoría Cliente DEF
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="63dg94w"
                          >
                            Proyecto anual
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="3rmwdm8">
                        <p
                          className="font-medium text-green-600"
                          data-oid="0pppvrp"
                        >
                          +$12,000.00
                        </p>
                        <p className="text-sm text-gray-500" data-oid="2eyu3b8">
                          27/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="jzi4mac"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="o9x5u8g"
                      >
                        <div
                          className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                          data-oid="9zn3ttr"
                        >
                          <CreditCard
                            className="h-4 w-4 text-blue-600"
                            data-oid="-y57n7l"
                          />
                        </div>
                        <div data-oid="e4u7mli">
                          <p className="font-medium" data-oid="cs7dg0_">
                            Transferencia entre cuentas
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="69.4no3"
                          >
                            Cuenta de Ahorro {"->"} Cuenta Corriente
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="thr5684">
                        <p
                          className="font-medium text-blue-600"
                          data-oid="p:kbw6u"
                        >
                          $8,500.00
                        </p>
                        <p className="text-sm text-gray-500" data-oid="-l.a4dc">
                          25/03/2025
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="cuentas" data-oid="wk7bd01">
            <Card data-oid=".-83_pt">
              <CardHeader data-oid="8mw_1yq">
                <CardTitle data-oid="-wn3n-9">Cuentas Bancarias</CardTitle>
                <CardDescription data-oid="jttsueo">
                  Administre sus cuentas bancarias y saldos
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="oaugms6">
                <div className="grid md:grid-cols-3 gap-4" data-oid="jhbdet9">
                  <div
                    className="p-4 rounded-lg glass-morphism hover-scale"
                    data-oid="yvlbnlr"
                  >
                    <div
                      className="flex justify-between items-center mb-4"
                      data-oid="35n8c06"
                    >
                      <div data-oid="f:8w8:s">
                        <h3 className="font-semibold" data-oid="k1nxk-:">
                          Cuenta Corriente
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="mu5i6sl">
                          Banco Nacional
                        </p>
                      </div>
                      <CreditCard
                        className="h-5 w-5 text-contable-primary"
                        data-oid="n6eqm7."
                      />
                    </div>
                    <p className="text-2xl font-bold mb-1" data-oid="bzawwd.">
                      $64,320.45
                    </p>
                    <p className="text-xs text-gray-500" data-oid="r3sk89e">
                      **** **** **** 3456
                    </p>
                  </div>

                  <div
                    className="p-4 rounded-lg glass-morphism hover-scale"
                    data-oid="8vfpfc0"
                  >
                    <div
                      className="flex justify-between items-center mb-4"
                      data-oid="rzs0hk7"
                    >
                      <div data-oid="8skk7it">
                        <h3 className="font-semibold" data-oid="2mtjfz8">
                          Cuenta de Ahorro
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="lnxlsoz">
                          Banco del Sur
                        </p>
                      </div>
                      <PiggyBank
                        className="h-5 w-5 text-contable-primary"
                        data-oid="h.q9-nn"
                      />
                    </div>
                    <p className="text-2xl font-bold mb-1" data-oid="g29y0p2">
                      $38,750.22
                    </p>
                    <p className="text-xs text-gray-500" data-oid="ce3ndnz">
                      **** **** **** 7890
                    </p>
                  </div>

                  <div
                    className="p-4 rounded-lg glass-morphism hover-scale"
                    data-oid="7oigjpm"
                  >
                    <div
                      className="flex justify-between items-center mb-4"
                      data-oid="-88_.9-"
                    >
                      <div data-oid="1mc9::y">
                        <h3 className="font-semibold" data-oid="4yc04e9">
                          Cuenta de Inversión
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="aazd2-h">
                          Banco Mercantil
                        </p>
                      </div>
                      <FileText
                        className="h-5 w-5 text-contable-primary"
                        data-oid="eo5789s"
                      />
                    </div>
                    <p className="text-2xl font-bold mb-1" data-oid="_hv.ukf">
                      $21,430.00
                    </p>
                    <p className="text-xs text-gray-500" data-oid="ay6z37x">
                      **** **** **** 5432
                    </p>
                  </div>
                </div>

                <div className="mt-6" data-oid="-01jjmo">
                  <Button variant="outline" data-oid="3k2izsl">
                    <Plus className="h-4 w-4 mr-2" data-oid="-q4tl9n" />
                    Agregar Cuenta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="conciliacion" data-oid="7bo015l">
            <Card data-oid="qqu3k5z">
              <CardHeader data-oid="yb2ahod">
                <CardTitle data-oid="c5ewjsn">Conciliación Bancaria</CardTitle>
                <CardDescription data-oid=".:4e1k7">
                  Compare sus registros con los extractos bancarios
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="gaki-6e">
                <div className="space-y-4" data-oid="2bkko-:">
                  <div
                    className="flex items-center justify-between pb-4 border-b border-gray-200/20"
                    data-oid=".:5xt.i"
                  >
                    <div data-oid="g8m8yc2">
                      <h3 className="font-medium" data-oid="webdn4c">
                        Saldo según Extracto Bancario
                      </h3>
                      <p className="text-sm text-gray-500" data-oid="-9hu565">
                        Banco Nacional - Marzo 2025
                      </p>
                    </div>
                    <p className="font-semibold" data-oid="akfjhhg">
                      $64,520.45
                    </p>
                  </div>

                  <div
                    className="flex items-center justify-between pb-4 border-b border-gray-200/20"
                    data-oid="udzb.84"
                  >
                    <div data-oid="c7-7hvt">
                      <h3 className="font-medium" data-oid="madk2yx">
                        Saldo según Registros Contables
                      </h3>
                      <p className="text-sm text-gray-500" data-oid="hofrq-8">
                        Sistema Interno - Marzo 2025
                      </p>
                    </div>
                    <p className="font-semibold" data-oid="rixg69f">
                      $64,320.45
                    </p>
                  </div>

                  <div
                    className="bg-amber-50/10 p-4 rounded-lg border border-amber-200/20"
                    data-oid="fc8smkt"
                  >
                    <h3
                      className="font-medium text-amber-900"
                      data-oid="bwie_vb"
                    >
                      Diferencia Identificada
                    </h3>
                    <p className="text-sm text-amber-700" data-oid="2xdlxf3">
                      $200.00
                    </p>
                    <div className="mt-2" data-oid="_yc-w-9">
                      <p className="text-sm text-amber-700" data-oid="lzh-47p">
                        Posibles causas:
                      </p>
                      <ul
                        className="list-disc list-inside text-sm text-amber-700"
                        data-oid="xg4st2f"
                      >
                        <li data-oid="ec7utkc">Cheques en tránsito</li>
                        <li data-oid="lesb6kd">Depósitos no registrados</li>
                        <li data-oid="7oyp:um">
                          Cargos bancarios no contabilizados
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Button data-oid="sp769-.">Iniciar Conciliación</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Finanzas;
