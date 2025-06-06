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
    <MainLayout data-oid="l_51qju">
      <div className="space-y-4" data-oid="4kd4ikr">
        <div className="flex items-center justify-between" data-oid="2j01w0q">
          <h1 className="text-2xl font-bold" data-oid="mewuhv7">
            Gestión Financiera
          </h1>
          <Button className="gap-1" data-oid="jya9cqr">
            <Plus className="h-4 w-4" data-oid="gtci.r1" />
            <span data-oid="ucqk94x">Nueva Transacción</span>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4" data-oid="hm7t:j0">
          <StatCard
            title="Balance Total"
            value="$124,500.00"
            icon={Wallet}
            trend="up"
            trendValue="+8.2% desde el mes pasado"
            data-oid="eco1xnx"
          />

          <StatCard
            title="Ingresos (Mes)"
            value="$28,750.00"
            icon={ArrowUp}
            trend="up"
            trendValue="+5.4% desde el mes pasado"
            data-oid="h9e7-pp"
          />

          <StatCard
            title="Gastos (Mes)"
            value="$12,340.00"
            icon={ArrowDown}
            trend="down"
            trendValue="-2.7% desde el mes pasado"
            data-oid="q0zcub_"
          />

          <StatCard
            title="Cuentas por Cobrar"
            value="$18,300.00"
            icon={Receipt}
            trend="neutral"
            trendValue="4 facturas pendientes"
            data-oid="w:ksm2w"
          />
        </div>

        <Tabs defaultValue="transacciones" data-oid="d1:8bvo">
          <TabsList
            className="grid w-full grid-cols-3 max-w-md"
            data-oid="ubqga6b"
          >
            <TabsTrigger value="transacciones" data-oid="te9tyv3">
              Transacciones
            </TabsTrigger>
            <TabsTrigger value="cuentas" data-oid="4c8m.w.">
              Cuentas
            </TabsTrigger>
            <TabsTrigger value="conciliacion" data-oid="ok2zoye">
              Conciliación
            </TabsTrigger>
          </TabsList>
          <TabsContent value="transacciones" data-oid="wni58ts">
            <div className="grid md:grid-cols-3 gap-4" data-oid="ug.d2ne">
              <Card className="md:col-span-1 glass-morphism" data-oid="37g.ui4">
                <CardHeader data-oid="en__lwf">
                  <CardTitle data-oid="w87zjpd">
                    Registrar Transacción
                  </CardTitle>
                  <CardDescription data-oid="-sk12fy">
                    Ingrese los detalles de la transacción
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid="vwy5y3h">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    data-oid="v4nvt_x"
                  >
                    <div className="space-y-2" data-oid="7028g11">
                      <Label htmlFor="tipo" data-oid=":51_g2i">
                        Tipo de Transacción
                      </Label>
                      <Select
                        value={transactionType}
                        onValueChange={setTransactionType}
                        data-oid="ok-6:tn"
                      >
                        <SelectTrigger data-oid="fcqteet">
                          <SelectValue
                            placeholder="Seleccione tipo"
                            data-oid="89dwhtv"
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="hw729u:">
                          <SelectItem value="ingreso" data-oid="ys68kj9">
                            Ingreso
                          </SelectItem>
                          <SelectItem value="gasto" data-oid="j2-_1jz">
                            Gasto
                          </SelectItem>
                          <SelectItem value="transferencia" data-oid="5acte20">
                            Transferencia
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2" data-oid="77.zics">
                      <Label htmlFor="amount" data-oid="-8i19z:">
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
                        data-oid="tg5byzn"
                      />
                    </div>

                    <div className="space-y-2" data-oid="o7wwqke">
                      <Label htmlFor="category" data-oid="mjxr5yk">
                        Categoría
                      </Label>
                      <Select
                        value={category}
                        onValueChange={setCategory}
                        data-oid="riq63uj"
                      >
                        <SelectTrigger data-oid="gcnzvm0">
                          <SelectValue
                            placeholder="Seleccione categoría"
                            data-oid="s89clcw"
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="cv9lm1f">
                          <SelectItem value="ventas" data-oid="fzoc09k">
                            Ventas
                          </SelectItem>
                          <SelectItem value="servicios" data-oid="a_13zt7">
                            Servicios
                          </SelectItem>
                          <SelectItem value="comisiones" data-oid="x:v4as-">
                            Comisiones
                          </SelectItem>
                          <SelectItem value="compras" data-oid="j4udjop">
                            Compras
                          </SelectItem>
                          <SelectItem value="servicios" data-oid="eupo4bh">
                            Servicios
                          </SelectItem>
                          <SelectItem value="nomina" data-oid="eym:xe9">
                            Nómina
                          </SelectItem>
                          <SelectItem value="impuestos" data-oid="f0qlbxj">
                            Impuestos
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2" data-oid="ypm998n">
                      <Label htmlFor="description" data-oid="l7z9nnr">
                        Descripción
                      </Label>
                      <Input
                        id="description"
                        placeholder="Descripción de la transacción"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        data-oid="c048rwm"
                      />
                    </div>

                    <div className="space-y-2" data-oid="61u_y4q">
                      <Label htmlFor="date" data-oid="mgirz9d">
                        Fecha
                      </Label>
                      <div className="relative" data-oid="8if76q8">
                        <Input
                          id="date"
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          data-oid="xzregxx"
                        />

                        <Calendar
                          className="absolute right-3 top-2.5 h-4 w-4 text-gray-500"
                          data-oid="wgf4pdj"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" data-oid="10z2hag">
                      Registrar Transacción
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 glass-morphism" data-oid="d1.mny6">
                <CardHeader data-oid="dq1bq79">
                  <CardTitle data-oid="m96:mzk">
                    Últimas Transacciones
                  </CardTitle>
                  <CardDescription data-oid="y8vitd6">
                    Movimientos financieros recientes
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid="-.aer3a">
                  <div className="space-y-4" data-oid="nzcexq7">
                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="or6m2h5"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="g:6le35"
                      >
                        <div
                          className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                          data-oid="rxs9a5j"
                        >
                          <ArrowUp
                            className="h-4 w-4 text-green-600"
                            data-oid="zs0ofo4"
                          />
                        </div>
                        <div data-oid="uib-fnt">
                          <p className="font-medium" data-oid="88zvg5r">
                            Pago de Cliente XYZ
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="7d7c83z"
                          >
                            Factura #2023-156
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="b_5a2ax">
                        <p
                          className="font-medium text-green-600"
                          data-oid="gazf3sp"
                        >
                          +$5,200.00
                        </p>
                        <p className="text-sm text-gray-500" data-oid="6sc3t29">
                          Ayer
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="kk0616m"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="ooit1hk"
                      >
                        <div
                          className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center"
                          data-oid="ez._svu"
                        >
                          <ArrowDown
                            className="h-4 w-4 text-red-600"
                            data-oid="exke967"
                          />
                        </div>
                        <div data-oid="c7kc08k">
                          <p className="font-medium" data-oid="w-gw3qd">
                            Pago a Proveedor ABC
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="aoqouuw"
                          >
                            Materiales
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="3frs3-3">
                        <p
                          className="font-medium text-red-600"
                          data-oid="9v4fdz."
                        >
                          -$1,840.00
                        </p>
                        <p className="text-sm text-gray-500" data-oid="sa0-5ay">
                          29/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="xyn-w::"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="lay7g-a"
                      >
                        <div
                          className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center"
                          data-oid="i945m1a"
                        >
                          <ArrowUp
                            className="h-4 w-4 text-green-600"
                            data-oid="jf_z.fy"
                          />
                        </div>
                        <div data-oid="4.1hmjx">
                          <p className="font-medium" data-oid="a:m0ht8">
                            Consultoría Cliente DEF
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="kf.adg9"
                          >
                            Proyecto anual
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="w3t76wf">
                        <p
                          className="font-medium text-green-600"
                          data-oid=":fm.bfn"
                        >
                          +$12,000.00
                        </p>
                        <p className="text-sm text-gray-500" data-oid="e7k9skf">
                          27/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="gc7sjt9"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="naub404"
                      >
                        <div
                          className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                          data-oid="fj2t.h8"
                        >
                          <CreditCard
                            className="h-4 w-4 text-blue-600"
                            data-oid="ao6h5zr"
                          />
                        </div>
                        <div data-oid="t4euitx">
                          <p className="font-medium" data-oid="6:ihw:5">
                            Transferencia entre cuentas
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="4kp0yka"
                          >
                            Cuenta de Ahorro {"->"} Cuenta Corriente
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="kl-kgvn">
                        <p
                          className="font-medium text-blue-600"
                          data-oid="pal2u09"
                        >
                          $8,500.00
                        </p>
                        <p className="text-sm text-gray-500" data-oid="_f2owlb">
                          25/03/2025
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="cuentas" data-oid="ep5fno4">
            <Card data-oid="dzhl2pe">
              <CardHeader data-oid="pgt2wto">
                <CardTitle data-oid="mc3yvks">Cuentas Bancarias</CardTitle>
                <CardDescription data-oid="ex0o7wo">
                  Administre sus cuentas bancarias y saldos
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="44.evd_">
                <div className="grid md:grid-cols-3 gap-4" data-oid="lb_q41f">
                  <div
                    className="p-4 rounded-lg glass-morphism hover-scale"
                    data-oid="90-ztan"
                  >
                    <div
                      className="flex justify-between items-center mb-4"
                      data-oid="-.uiq8u"
                    >
                      <div data-oid="e.x3wq9">
                        <h3 className="font-semibold" data-oid="k0kwye0">
                          Cuenta Corriente
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="phwmw_i">
                          Banco Nacional
                        </p>
                      </div>
                      <CreditCard
                        className="h-5 w-5 text-contable-primary"
                        data-oid="ewp:tvc"
                      />
                    </div>
                    <p className="text-2xl font-bold mb-1" data-oid="ygwj:og">
                      $64,320.45
                    </p>
                    <p className="text-xs text-gray-500" data-oid="-drdyoo">
                      **** **** **** 3456
                    </p>
                  </div>

                  <div
                    className="p-4 rounded-lg glass-morphism hover-scale"
                    data-oid="b6:_wet"
                  >
                    <div
                      className="flex justify-between items-center mb-4"
                      data-oid="drcbwo8"
                    >
                      <div data-oid="st550ch">
                        <h3 className="font-semibold" data-oid="7b9vbrv">
                          Cuenta de Ahorro
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="-l6vnjc">
                          Banco del Sur
                        </p>
                      </div>
                      <PiggyBank
                        className="h-5 w-5 text-contable-primary"
                        data-oid="2i4_ocb"
                      />
                    </div>
                    <p className="text-2xl font-bold mb-1" data-oid="urq03a5">
                      $38,750.22
                    </p>
                    <p className="text-xs text-gray-500" data-oid="c2t46bx">
                      **** **** **** 7890
                    </p>
                  </div>

                  <div
                    className="p-4 rounded-lg glass-morphism hover-scale"
                    data-oid="4f6.c8-"
                  >
                    <div
                      className="flex justify-between items-center mb-4"
                      data-oid="-fr9xct"
                    >
                      <div data-oid="0ngq.i-">
                        <h3 className="font-semibold" data-oid="pggtd:e">
                          Cuenta de Inversión
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="i5n31b8">
                          Banco Mercantil
                        </p>
                      </div>
                      <FileText
                        className="h-5 w-5 text-contable-primary"
                        data-oid="n5hfykg"
                      />
                    </div>
                    <p className="text-2xl font-bold mb-1" data-oid="w36m_iw">
                      $21,430.00
                    </p>
                    <p className="text-xs text-gray-500" data-oid="l0-2e5o">
                      **** **** **** 5432
                    </p>
                  </div>
                </div>

                <div className="mt-6" data-oid="m.am.k-">
                  <Button variant="outline" data-oid=":2.oe72">
                    <Plus className="h-4 w-4 mr-2" data-oid="aqtwa:n" />
                    Agregar Cuenta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="conciliacion" data-oid="unj45uu">
            <Card data-oid="w9d4h5x">
              <CardHeader data-oid="7zxv.fq">
                <CardTitle data-oid="bmq103:">Conciliación Bancaria</CardTitle>
                <CardDescription data-oid="5u0:ga.">
                  Compare sus registros con los extractos bancarios
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="gxncf5k">
                <div className="space-y-4" data-oid=".h67bo7">
                  <div
                    className="flex items-center justify-between pb-4 border-b border-gray-200/20"
                    data-oid="2u8.utf"
                  >
                    <div data-oid="sef2tys">
                      <h3 className="font-medium" data-oid="6.1mr1h">
                        Saldo según Extracto Bancario
                      </h3>
                      <p className="text-sm text-gray-500" data-oid="7nx600-">
                        Banco Nacional - Marzo 2025
                      </p>
                    </div>
                    <p className="font-semibold" data-oid="q65fia0">
                      $64,520.45
                    </p>
                  </div>

                  <div
                    className="flex items-center justify-between pb-4 border-b border-gray-200/20"
                    data-oid="9fh85ir"
                  >
                    <div data-oid="jvhl0m0">
                      <h3 className="font-medium" data-oid="5xv9t-p">
                        Saldo según Registros Contables
                      </h3>
                      <p className="text-sm text-gray-500" data-oid="y9yuajg">
                        Sistema Interno - Marzo 2025
                      </p>
                    </div>
                    <p className="font-semibold" data-oid="hq-4kkx">
                      $64,320.45
                    </p>
                  </div>

                  <div
                    className="bg-amber-50/10 p-4 rounded-lg border border-amber-200/20"
                    data-oid="8en17tw"
                  >
                    <h3
                      className="font-medium text-amber-900"
                      data-oid="-zw.e5a"
                    >
                      Diferencia Identificada
                    </h3>
                    <p className="text-sm text-amber-700" data-oid=":fvcnm0">
                      $200.00
                    </p>
                    <div className="mt-2" data-oid="1ezeo2d">
                      <p className="text-sm text-amber-700" data-oid="shy83jn">
                        Posibles causas:
                      </p>
                      <ul
                        className="list-disc list-inside text-sm text-amber-700"
                        data-oid="o-dd-b:"
                      >
                        <li data-oid="l0hjpwj">Cheques en tránsito</li>
                        <li data-oid="ziy00na">Depósitos no registrados</li>
                        <li data-oid="xeqnjr2">
                          Cargos bancarios no contabilizados
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Button data-oid="3a8d8gw">Iniciar Conciliación</Button>
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
