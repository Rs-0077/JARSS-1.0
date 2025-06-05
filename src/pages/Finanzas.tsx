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
    <MainLayout data-oid="w0nroqf">
      <div className="space-y-4" data-oid="-57tsxr">
        <div className="flex items-center justify-between" data-oid="_c1r:c:">
          <h1 className="text-2xl font-bold" data-oid="l29r8r3">
            Gestión Financiera
          </h1>
          <Button className="gap-1" data-oid="a9hq48f">
            <Plus className="h-4 w-4" data-oid="fn2cr1n" />
            <span data-oid="lh7oln2">Nueva Transacción</span>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4" data-oid="iz4itoo">
          <StatCard
            title="Balance Total"
            value="$124,500.00"
            icon={Wallet}
            trend="up"
            trendValue="+8.2% desde el mes pasado"
            data-oid="9:.v995"
          />

          <StatCard
            title="Ingresos (Mes)"
            value="$28,750.00"
            icon={ArrowUp}
            trend="up"
            trendValue="+5.4% desde el mes pasado"
            data-oid="g7df5g0"
          />

          <StatCard
            title="Gastos (Mes)"
            value="$12,340.00"
            icon={ArrowDown}
            trend="down"
            trendValue="-2.7% desde el mes pasado"
            data-oid="lowv2k5"
          />

          <StatCard
            title="Cuentas por Cobrar"
            value="$18,300.00"
            icon={Receipt}
            trend="neutral"
            trendValue="4 facturas pendientes"
            data-oid="yuqi7q4"
          />
        </div>

        <Tabs defaultValue="transacciones" data-oid=":vw_rum">
          <TabsList
            className="grid w-full grid-cols-3 max-w-md"
            data-oid="_kz4s68"
          >
            <TabsTrigger value="transacciones" data-oid="u3ct26y">
              Transacciones
            </TabsTrigger>
            <TabsTrigger value="cuentas" data-oid="a1.36w2">
              Cuentas
            </TabsTrigger>
            <TabsTrigger value="conciliacion" data-oid="z78rszq">
              Conciliación
            </TabsTrigger>
          </TabsList>
          <TabsContent value="transacciones" data-oid="kyf6s:a">
            <div className="grid md:grid-cols-3 gap-4" data-oid="3m1z-w.">
              <Card className="md:col-span-1 glass-morphism" data-oid="9j_elnj">
                <CardHeader data-oid="l8pswkz">
                  <CardTitle data-oid="_7314br">
                    Registrar Transacción
                  </CardTitle>
                  <CardDescription data-oid="8sr5m3y">
                    Ingrese los detalles de la transacción
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid="5kw37et">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    data-oid="r3ymzlu"
                  >
                    <div className="space-y-2" data-oid="2-_5-xq">
                      <Label htmlFor="tipo" data-oid="d2tps3z">
                        Tipo de Transacción
                      </Label>
                      <Select
                        value={transactionType}
                        onValueChange={setTransactionType}
                        data-oid="2d_igf4"
                      >
                        <SelectTrigger data-oid="ug.b-a0">
                          <SelectValue
                            placeholder="Seleccione tipo"
                            data-oid="ehk-kvx"
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="6797fwu">
                          <SelectItem value="ingreso" data-oid="ur8e039">
                            Ingreso
                          </SelectItem>
                          <SelectItem value="gasto" data-oid="hrskv:e">
                            Gasto
                          </SelectItem>
                          <SelectItem value="transferencia" data-oid="m6m8bws">
                            Transferencia
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2" data-oid="n6j3lfm">
                      <Label htmlFor="amount" data-oid="kq.0062">
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
                        data-oid="jvcs4n9"
                      />
                    </div>

                    <div className="space-y-2" data-oid="reyepn1">
                      <Label htmlFor="category" data-oid=".o69ysy">
                        Categoría
                      </Label>
                      <Select
                        value={category}
                        onValueChange={setCategory}
                        data-oid="r03o:y2"
                      >
                        <SelectTrigger data-oid="71enz9t">
                          <SelectValue
                            placeholder="Seleccione categoría"
                            data-oid="-_vwtt:"
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="8a93s:1">
                          <SelectItem value="ventas" data-oid="7e7twmt">
                            Ventas
                          </SelectItem>
                          <SelectItem value="servicios" data-oid="yp92zpw">
                            Servicios
                          </SelectItem>
                          <SelectItem value="comisiones" data-oid="z59basc">
                            Comisiones
                          </SelectItem>
                          <SelectItem value="compras" data-oid="._p64iq">
                            Compras
                          </SelectItem>
                          <SelectItem value="servicios" data-oid=".ob4hwf">
                            Servicios
                          </SelectItem>
                          <SelectItem value="nomina" data-oid="qadis22">
                            Nómina
                          </SelectItem>
                          <SelectItem value="impuestos" data-oid="sxbjylr">
                            Impuestos
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2" data-oid="v66a.15">
                      <Label htmlFor="description" data-oid="e5c7rso">
                        Descripción
                      </Label>
                      <Input
                        id="description"
                        placeholder="Descripción de la transacción"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        data-oid="au_:p8o"
                      />
                    </div>

                    <div className="space-y-2" data-oid="a_k1.uh">
                      <Label htmlFor="date" data-oid="qcuu7.s">
                        Fecha
                      </Label>
                      <div className="relative" data-oid="t99:5s9">
                        <Input
                          id="date"
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          data-oid="jtbx:1k"
                        />

                        <Calendar
                          className="absolute right-3 top-2.5 h-4 w-4 text-gray-500"
                          data-oid="pzfv-vt"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" data-oid="jznr9b6">
                      Registrar Transacción
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 glass-morphism" data-oid="5.ifv.5">
                <CardHeader data-oid="m3nu89r">
                  <CardTitle data-oid="abgtpbf">
                    Últimas Transacciones
                  </CardTitle>
                  <CardDescription data-oid="32zg3-8">
                    Movimientos financieros recientes
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid="8f-ia-5">
                  <div className="space-y-4" data-oid="e:2k9g9">
                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="wexxhly"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="g4w45nz"
                      >
                        <div
                          className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                          data-oid="wqqnhqj"
                        >
                          <ArrowUp
                            className="h-4 w-4 text-green-600"
                            data-oid="9hfkipf"
                          />
                        </div>
                        <div data-oid="g0r8g:k">
                          <p className="font-medium" data-oid="6bw2t8e">
                            Pago de Cliente XYZ
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="3.ub9-k"
                          >
                            Factura #2023-156
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="0om0lky">
                        <p
                          className="font-medium text-green-600"
                          data-oid="hyu7-jl"
                        >
                          +$5,200.00
                        </p>
                        <p className="text-sm text-gray-500" data-oid="5_ods:2">
                          Ayer
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="tk1w1sg"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="w0i3ym4"
                      >
                        <div
                          className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center"
                          data-oid="lvjjaz-"
                        >
                          <ArrowDown
                            className="h-4 w-4 text-red-600"
                            data-oid="78gh1_j"
                          />
                        </div>
                        <div data-oid="jm8m7jp">
                          <p className="font-medium" data-oid="_yjsg3_">
                            Pago a Proveedor ABC
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="1lln_0u"
                          >
                            Materiales
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="wu1xt78">
                        <p
                          className="font-medium text-red-600"
                          data-oid="tpychd5"
                        >
                          -$1,840.00
                        </p>
                        <p className="text-sm text-gray-500" data-oid="xzsrna:">
                          29/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="xkeihbj"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="82g2k5-"
                      >
                        <div
                          className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                          data-oid="uypseur"
                        >
                          <ArrowUp
                            className="h-4 w-4 text-green-600"
                            data-oid="usc4s4l"
                          />
                        </div>
                        <div data-oid="m0r6o80">
                          <p className="font-medium" data-oid="8v059xp">
                            Consultoría Cliente DEF
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="hc6nim5"
                          >
                            Proyecto anual
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="g0-g:0p">
                        <p
                          className="font-medium text-green-600"
                          data-oid="ib_ham."
                        >
                          +$12,000.00
                        </p>
                        <p className="text-sm text-gray-500" data-oid="m8:wud-">
                          27/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="jlkpjrx"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="c:b9j16"
                      >
                        <div
                          className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                          data-oid="eskafn7"
                        >
                          <CreditCard
                            className="h-4 w-4 text-blue-600"
                            data-oid="._r5_e:"
                          />
                        </div>
                        <div data-oid=":8w7ivu">
                          <p className="font-medium" data-oid=".tx-3pc">
                            Transferencia entre cuentas
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="ayf_uif"
                          >
                            Cuenta de Ahorro {"->"} Cuenta Corriente
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="6oaz_:e">
                        <p
                          className="font-medium text-blue-600"
                          data-oid="vao0mn3"
                        >
                          $8,500.00
                        </p>
                        <p className="text-sm text-gray-500" data-oid="z9jzsqs">
                          25/03/2025
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="cuentas" data-oid="b5mt25r">
            <Card data-oid="3_:.:_u">
              <CardHeader data-oid="1-mrko2">
                <CardTitle data-oid="b1wn3jn">Cuentas Bancarias</CardTitle>
                <CardDescription data-oid="aw_l0u-">
                  Administre sus cuentas bancarias y saldos
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="kfyooh9">
                <div className="grid md:grid-cols-3 gap-4" data-oid=".do47r2">
                  <div
                    className="p-4 rounded-lg glass-morphism hover-scale"
                    data-oid="m2..9s3"
                  >
                    <div
                      className="flex justify-between items-center mb-4"
                      data-oid="8j39av."
                    >
                      <div data-oid="zuddyhj">
                        <h3 className="font-semibold" data-oid="ubker8w">
                          Cuenta Corriente
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="pm2t96y">
                          Banco Nacional
                        </p>
                      </div>
                      <CreditCard
                        className="h-5 w-5 text-contable-primary"
                        data-oid="x:aurs0"
                      />
                    </div>
                    <p className="text-2xl font-bold mb-1" data-oid="_cw8m.0">
                      $64,320.45
                    </p>
                    <p className="text-xs text-gray-500" data-oid="7j9rbtc">
                      **** **** **** 3456
                    </p>
                  </div>

                  <div
                    className="p-4 rounded-lg glass-morphism hover-scale"
                    data-oid="0fracrv"
                  >
                    <div
                      className="flex justify-between items-center mb-4"
                      data-oid="jihhd.d"
                    >
                      <div data-oid="sh7e593">
                        <h3 className="font-semibold" data-oid="_2dtw38">
                          Cuenta de Ahorro
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="e6iemfx">
                          Banco del Sur
                        </p>
                      </div>
                      <PiggyBank
                        className="h-5 w-5 text-contable-primary"
                        data-oid="xfa21mr"
                      />
                    </div>
                    <p className="text-2xl font-bold mb-1" data-oid="f_v285p">
                      $38,750.22
                    </p>
                    <p className="text-xs text-gray-500" data-oid="64lvzg1">
                      **** **** **** 7890
                    </p>
                  </div>

                  <div
                    className="p-4 rounded-lg glass-morphism hover-scale"
                    data-oid="qjmlmk3"
                  >
                    <div
                      className="flex justify-between items-center mb-4"
                      data-oid=".vcy3-o"
                    >
                      <div data-oid="nn6_o52">
                        <h3 className="font-semibold" data-oid="o-oloie">
                          Cuenta de Inversión
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="_o:bth-">
                          Banco Mercantil
                        </p>
                      </div>
                      <FileText
                        className="h-5 w-5 text-contable-primary"
                        data-oid="y1x:g0n"
                      />
                    </div>
                    <p className="text-2xl font-bold mb-1" data-oid="_3ip826">
                      $21,430.00
                    </p>
                    <p className="text-xs text-gray-500" data-oid="sy2z1:5">
                      **** **** **** 5432
                    </p>
                  </div>
                </div>

                <div className="mt-6" data-oid="y.dk574">
                  <Button variant="outline" data-oid="h:9pr0-">
                    <Plus className="h-4 w-4 mr-2" data-oid="q587.h0" />
                    Agregar Cuenta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="conciliacion" data-oid="rxkx.5q">
            <Card data-oid="5inu03t">
              <CardHeader data-oid="d:xoczb">
                <CardTitle data-oid="l37:96h">Conciliación Bancaria</CardTitle>
                <CardDescription data-oid="v4praga">
                  Compare sus registros con los extractos bancarios
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="-60njyh">
                <div className="space-y-4" data-oid="gn1h3xn">
                  <div
                    className="flex items-center justify-between pb-4 border-b border-gray-200/20"
                    data-oid="fs433jt"
                  >
                    <div data-oid="8w89ww_">
                      <h3 className="font-medium" data-oid="lj3hgk6">
                        Saldo según Extracto Bancario
                      </h3>
                      <p className="text-sm text-gray-500" data-oid="7be6mgt">
                        Banco Nacional - Marzo 2025
                      </p>
                    </div>
                    <p className="font-semibold" data-oid="0wb9rnt">
                      $64,520.45
                    </p>
                  </div>

                  <div
                    className="flex items-center justify-between pb-4 border-b border-gray-200/20"
                    data-oid="vyv.vdq"
                  >
                    <div data-oid="202p1-n">
                      <h3 className="font-medium" data-oid="yceutj8">
                        Saldo según Registros Contables
                      </h3>
                      <p className="text-sm text-gray-500" data-oid="puof-oo">
                        Sistema Interno - Marzo 2025
                      </p>
                    </div>
                    <p className="font-semibold" data-oid="wn360dd">
                      $64,320.45
                    </p>
                  </div>

                  <div
                    className="bg-amber-50/10 p-4 rounded-lg border border-amber-200/20"
                    data-oid="qi.4_6r"
                  >
                    <h3
                      className="font-medium text-amber-900"
                      data-oid="g3mnhuj"
                    >
                      Diferencia Identificada
                    </h3>
                    <p className="text-sm text-amber-700" data-oid="6glg933">
                      $200.00
                    </p>
                    <div className="mt-2" data-oid="xj.wug3">
                      <p className="text-sm text-amber-700" data-oid="hpramve">
                        Posibles causas:
                      </p>
                      <ul
                        className="list-disc list-inside text-sm text-amber-700"
                        data-oid="m6rs090"
                      >
                        <li data-oid="0aj3zif">Cheques en tránsito</li>
                        <li data-oid="bbaqjaz">Depósitos no registrados</li>
                        <li data-oid="-p7:xsa">
                          Cargos bancarios no contabilizados
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Button data-oid="cq40k7h">Iniciar Conciliación</Button>
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
