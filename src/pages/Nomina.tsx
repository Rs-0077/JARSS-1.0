import { MainLayout } from "@/components/layout/MainLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, Calendar, FileText, Plus, CheckIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Nomina = () => {
  return (
    <MainLayout data-oid="_7alt.w">
      <div className="space-y-4" data-oid="8nmxi8v">
        <div className="flex items-center justify-between" data-oid="yad62dh">
          <h1 className="text-2xl font-bold" data-oid="cxospyt">
            Gestión de Nómina
          </h1>
          <Button className="gap-1" data-oid="tu.1ho-">
            <Plus className="h-4 w-4" data-oid="h32jgce" />
            <span data-oid="i-lwa.2">Nuevo Empleado</span>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3" data-oid="_mfgkdw">
          <StatCard
            title="Total Empleados"
            value="24"
            icon={Users}
            trend="up"
            trendValue="+2 este mes"
            data-oid=":r_6nxx"
          />

          <StatCard
            title="Próximo Pago"
            value="15/04/2025"
            icon={Calendar}
            trend="neutral"
            trendValue="$45,320.00"
            data-oid="8e-y2k0"
          />

          <StatCard
            title="Pagos Realizados (Año)"
            value="$135,960.00"
            icon={CheckIcon}
            trend="up"
            trendValue="+5.4% vs año anterior"
            data-oid="n6.xc69"
          />
        </div>

        <Tabs defaultValue="empleados" data-oid="qq:77hj">
          <TabsList
            className="grid w-full grid-cols-3 max-w-md"
            data-oid="o8f.fuk"
          >
            <TabsTrigger value="empleados" data-oid="dh5::cg">
              Empleados
            </TabsTrigger>
            <TabsTrigger value="pagos" data-oid="w7m90_e">
              Pagos de Nómina
            </TabsTrigger>
            <TabsTrigger value="configuracion" data-oid="b11w5fr">
              Configuración
            </TabsTrigger>
          </TabsList>

          <TabsContent value="empleados" data-oid="9axnmu.">
            <Card className="glass-morphism" data-oid="zvcv5.8">
              <CardHeader data-oid=".c2vcj3">
                <CardTitle data-oid="3v9rov0">Listado de Empleados</CardTitle>
                <CardDescription data-oid="kl-invp">
                  Gestione la información de sus empleados
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="0dmmz8y">
                <div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                  data-oid="dyjpsd0"
                >
                  {/* Empleado 1 */}
                  <div
                    className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                    data-oid="fcoih._"
                  >
                    <div
                      className="flex items-center space-x-4"
                      data-oid="p39c9x1"
                    >
                      <Avatar data-oid="d0xk7k_">
                        <AvatarFallback data-oid="dytrfs3">JD</AvatarFallback>
                      </Avatar>
                      <div data-oid=":s3c79f">
                        <h3 className="font-medium" data-oid="hn78owe">
                          Juan Diaz
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="j5umu58">
                          Desarrollador Senior
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2" data-oid="ou:2p.1">
                      <div className="flex justify-between" data-oid="jrkgl5c">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="609.t-f"
                        >
                          Departamento:
                        </span>
                        <span className="text-sm" data-oid="ke_no8g">
                          Tecnología
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="6_sycc.">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="0rpc5cq"
                        >
                          Fecha de Ingreso:
                        </span>
                        <span className="text-sm" data-oid="s6ue1eq">
                          15/03/2022
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="z3ci_hw">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="lq7nw46"
                        >
                          Salario Base:
                        </span>
                        <span className="text-sm" data-oid="-rygr4l">
                          $18,500.00
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2" data-oid="r2oxz08">
                      <Button size="sm" variant="outline" data-oid="_c7za-p">
                        Ver Detalles
                      </Button>
                      <Button size="sm" variant="outline" data-oid="._3agxl">
                        Editar
                      </Button>
                    </div>
                  </div>

                  {/* Empleado 2 */}
                  <div
                    className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                    data-oid=":i.wbkz"
                  >
                    <div
                      className="flex items-center space-x-4"
                      data-oid="vxuidf1"
                    >
                      <Avatar data-oid="0f_3nl.">
                        <AvatarFallback data-oid="36.-iz8">MR</AvatarFallback>
                      </Avatar>
                      <div data-oid="-30:9qg">
                        <h3 className="font-medium" data-oid="lyuv9io">
                          María Rodriguez
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="1npz:cf">
                          Gerente de Finanzas
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2" data-oid="gz:bfwg">
                      <div className="flex justify-between" data-oid="kelb2w6">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="hk1h6h2"
                        >
                          Departamento:
                        </span>
                        <span className="text-sm" data-oid="g18n4x_">
                          Finanzas
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="btyfmjg">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="fne43g:"
                        >
                          Fecha de Ingreso:
                        </span>
                        <span className="text-sm" data-oid="5gz_biw">
                          05/01/2020
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="n441toe">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="rn_.ve1"
                        >
                          Salario Base:
                        </span>
                        <span className="text-sm" data-oid="wn_:3_:">
                          $25,000.00
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2" data-oid="skjrhjq">
                      <Button size="sm" variant="outline" data-oid="toh3ot3">
                        Ver Detalles
                      </Button>
                      <Button size="sm" variant="outline" data-oid="9ptgn_:">
                        Editar
                      </Button>
                    </div>
                  </div>

                  {/* Empleado 3 */}
                  <div
                    className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                    data-oid="dfod3n5"
                  >
                    <div
                      className="flex items-center space-x-4"
                      data-oid="b5iaz9r"
                    >
                      <Avatar data-oid="ymlisxc">
                        <AvatarFallback data-oid="j3x2zl8">CP</AvatarFallback>
                      </Avatar>
                      <div data-oid="k..n.8b">
                        <h3 className="font-medium" data-oid=".9_ah7-">
                          Carlos Pérez
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="ngg3luh">
                          Ejecutivo de Ventas
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2" data-oid="kqfr3qb">
                      <div className="flex justify-between" data-oid="f6hg_n-">
                        <span
                          className="text-sm text-gray-500"
                          data-oid=":1xkzh8"
                        >
                          Departamento:
                        </span>
                        <span className="text-sm" data-oid="9:0mkea">
                          Ventas
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="d:gty36">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="9_y9bq1"
                        >
                          Fecha de Ingreso:
                        </span>
                        <span className="text-sm" data-oid="wbvgai7">
                          22/05/2023
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="12zbilr">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="g7k33-k"
                        >
                          Salario Base:
                        </span>
                        <span className="text-sm" data-oid="th--5hd">
                          $12,000.00
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2" data-oid="p-pbbd0">
                      <Button size="sm" variant="outline" data-oid="l5e8848">
                        Ver Detalles
                      </Button>
                      <Button size="sm" variant="outline" data-oid="cve3baa">
                        Editar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pagos" data-oid="aakoxta">
            <div className="grid md:grid-cols-3 gap-4" data-oid="jyj6ftz">
              <Card className="md:col-span-1 glass-morphism" data-oid="1swh8s.">
                <CardHeader data-oid="bmcbegy">
                  <CardTitle data-oid="00ha3i9">Nuevo Pago de Nómina</CardTitle>
                  <CardDescription data-oid="j9r:o9h">
                    Registre un nuevo pago de nómina
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid="p0duotc">
                  <form className="space-y-4" data-oid="3pb.o.c">
                    <div className="space-y-2" data-oid="zs1tard">
                      <Label htmlFor="empleado" data-oid="lo3a9u2">
                        Empleado
                      </Label>
                      <Select data-oid="s-08.xx">
                        <SelectTrigger data-oid="ft3hq9b">
                          <SelectValue
                            placeholder="Seleccione empleado"
                            data-oid=":1oodlr"
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="nc8mavd">
                          <SelectItem value="juan" data-oid=".cyvda2">
                            Juan Diaz
                          </SelectItem>
                          <SelectItem value="maria" data-oid="c7n:z1g">
                            María Rodriguez
                          </SelectItem>
                          <SelectItem value="carlos" data-oid="fyh-fxn">
                            Carlos Pérez
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2" data-oid="ruob0kw">
                      <Label htmlFor="periodo" data-oid="e0rutzu">
                        Periodo de Pago
                      </Label>
                      <Select data-oid="hc_5:qk">
                        <SelectTrigger data-oid="bx52una">
                          <SelectValue
                            placeholder="Seleccione periodo"
                            data-oid="r-a39s."
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="xvt1-b-">
                          <SelectItem value="abr1" data-oid="tyqcit.">
                            1-15 Abril 2025
                          </SelectItem>
                          <SelectItem value="abr2" data-oid="ixy1cp0">
                            16-30 Abril 2025
                          </SelectItem>
                          <SelectItem value="may1" data-oid="ela7u22">
                            1-15 Mayo 2025
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2" data-oid="r3esa.v">
                      <Label htmlFor="salarioBase" data-oid="cgb6x52">
                        Salario Base
                      </Label>
                      <Input
                        id="salarioBase"
                        placeholder="0.00"
                        type="number"
                        data-oid="qvxuyh6"
                      />
                    </div>

                    <div className="space-y-2" data-oid="aue:and">
                      <Label htmlFor="bonos" data-oid="bvr55ad">
                        Bonos y Comisiones
                      </Label>
                      <Input
                        id="bonos"
                        placeholder="0.00"
                        type="number"
                        data-oid=":yru4x:"
                      />
                    </div>

                    <div className="space-y-2" data-oid="i323mor">
                      <Label htmlFor="deducciones" data-oid="s3jypr4">
                        Deducciones
                      </Label>
                      <Input
                        id="deducciones"
                        placeholder="0.00"
                        type="number"
                        data-oid="jb8.g3p"
                      />
                    </div>

                    <div className="space-y-2" data-oid="7yznh4-">
                      <Label htmlFor="impuestos" data-oid="-vdks35">
                        Impuestos
                      </Label>
                      <Input
                        id="impuestos"
                        placeholder="0.00"
                        type="number"
                        data-oid="syp4vn7"
                      />
                    </div>

                    <Button type="submit" className="w-full" data-oid="jxpcses">
                      Procesar Pago
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 glass-morphism" data-oid="7cm-fgf">
                <CardHeader data-oid="bcqdo.e">
                  <CardTitle data-oid="siy7lyv">Historial de Pagos</CardTitle>
                  <CardDescription data-oid="fqh_5-9">
                    Últimos pagos de nómina realizados
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid="7lwat71">
                  <div className="space-y-4" data-oid="tvwcovs">
                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="0oi1-kl"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="_qxqa0k"
                      >
                        <Avatar data-oid="vh4neve">
                          <AvatarFallback data-oid="ebz-6ny">MR</AvatarFallback>
                        </Avatar>
                        <div data-oid="j98vdr1">
                          <p className="font-medium" data-oid="9-14l2e">
                            María Rodriguez
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="n55dh42"
                          >
                            Periodo: 16-31 Marzo 2025
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="ltui9ph">
                        <p className="font-medium" data-oid="y24yv::">
                          $25,000.00
                        </p>
                        <p
                          className="text-sm text-green-500"
                          data-oid="qqh_bd6"
                        >
                          Pagado el 31/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="cfrm9wv"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="7mlt8rg"
                      >
                        <Avatar data-oid="l0pd45c">
                          <AvatarFallback data-oid="zgpxh7n">JD</AvatarFallback>
                        </Avatar>
                        <div data-oid="1nml956">
                          <p className="font-medium" data-oid="pv9zkfm">
                            Juan Diaz
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid=".exqt9k"
                          >
                            Periodo: 16-31 Marzo 2025
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="p07ca2o">
                        <p className="font-medium" data-oid="hqm.p-x">
                          $18,500.00
                        </p>
                        <p
                          className="text-sm text-green-500"
                          data-oid="rhx-6nz"
                        >
                          Pagado el 31/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="tanu3gs"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="5shsuyj"
                      >
                        <Avatar data-oid="b4gi0kr">
                          <AvatarFallback data-oid="g4lolm-">CP</AvatarFallback>
                        </Avatar>
                        <div data-oid="w63-a_c">
                          <p className="font-medium" data-oid="9kjah0x">
                            Carlos Pérez
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid=".dkr9y."
                          >
                            Periodo: 16-31 Marzo 2025
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="nee.i02">
                        <p className="font-medium" data-oid="sdetprm">
                          $12,000.00
                        </p>
                        <p
                          className="text-sm text-green-500"
                          data-oid="14bk2d1"
                        >
                          Pagado el 31/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="wgucdf:"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="ojofg91"
                      >
                        <Avatar data-oid="uv_rcaf">
                          <AvatarFallback data-oid="df4tyfv">MR</AvatarFallback>
                        </Avatar>
                        <div data-oid="c.8cdw6">
                          <p className="font-medium" data-oid="k.jyslw">
                            María Rodriguez
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="djexlsq"
                          >
                            Periodo: 1-15 Marzo 2025
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="w:ki6p:">
                        <p className="font-medium" data-oid="ixmb1s1">
                          $25,000.00
                        </p>
                        <p
                          className="text-sm text-green-500"
                          data-oid="p1.-tuw"
                        >
                          Pagado el 15/03/2025
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="configuracion" data-oid="1-2z:22">
            <Card className="glass-morphism" data-oid="f-:i6kk">
              <CardHeader data-oid="42gf-3g">
                <CardTitle data-oid="s9m_l-7">
                  Configuración de Nómina
                </CardTitle>
                <CardDescription data-oid="z:wjizl">
                  Ajuste los parámetros de cálculo de nómina
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="aibf0vd">
                <div className="space-y-6" data-oid="g2ae.o9">
                  <div data-oid="en8siw6">
                    <h3 className="font-medium mb-3" data-oid="v20ctfz">
                      Parámetros de Impuestos
                    </h3>
                    <div
                      className="grid md:grid-cols-2 gap-4"
                      data-oid="lgh82a_"
                    >
                      <div className="space-y-2" data-oid="fij7ass">
                        <Label htmlFor="isrPorcentaje" data-oid="lmst98z">
                          ISR Tasa Base
                        </Label>
                        <Input
                          id="isrPorcentaje"
                          type="number"
                          defaultValue="9"
                          data-oid="lov3my3"
                        />

                        <p className="text-xs text-gray-500" data-oid="29a89we">
                          Porcentaje base para el cálculo de ISR
                        </p>
                      </div>
                      <div className="space-y-2" data-oid="9ys1siq">
                        <Label htmlFor="subsidioEmpleo" data-oid="a:lpoh1">
                          Subsidio al Empleo
                        </Label>
                        <Input
                          id="subsidioEmpleo"
                          type="number"
                          defaultValue="0"
                          data-oid="e4qy85d"
                        />

                        <p className="text-xs text-gray-500" data-oid="ffqxai-">
                          Monto del subsidio al empleo (si aplica)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div data-oid="e79ak7p">
                    <h3 className="font-medium mb-3" data-oid=".rwsqly">
                      Seguridad Social
                    </h3>
                    <div
                      className="grid md:grid-cols-2 gap-4"
                      data-oid="mxw4_mw"
                    >
                      <div className="space-y-2" data-oid="ifuhxc.">
                        <Label htmlFor="imss" data-oid="5zwn0gh">
                          IMSS (Porcentaje)
                        </Label>
                        <Input
                          id="imss"
                          type="number"
                          defaultValue="3.5"
                          data-oid="--1t2c8"
                        />

                        <p className="text-xs text-gray-500" data-oid="9kx1hx4">
                          Porcentaje para cálculo de IMSS
                        </p>
                      </div>
                      <div className="space-y-2" data-oid=":j58w7a">
                        <Label htmlFor="infonavit" data-oid="-iq-ebk">
                          INFONAVIT (Porcentaje)
                        </Label>
                        <Input
                          id="infonavit"
                          type="number"
                          defaultValue="5"
                          data-oid="lau:pt4"
                        />

                        <p className="text-xs text-gray-500" data-oid=":spfwq4">
                          Porcentaje para cálculo de INFONAVIT
                        </p>
                      </div>
                    </div>
                  </div>

                  <div data-oid="yfr39j2">
                    <h3 className="font-medium mb-3" data-oid="sxjz_tx">
                      Periodos de Pago
                    </h3>
                    <div className="space-y-2" data-oid="7twhw.a">
                      <Select defaultValue="quincenal" data-oid="73975ln">
                        <SelectTrigger data-oid="vwkd31:">
                          <SelectValue data-oid="5k5lgaa" />
                        </SelectTrigger>
                        <SelectContent data-oid="16tregr">
                          <SelectItem value="semanal" data-oid="r16w.o1">
                            Semanal
                          </SelectItem>
                          <SelectItem value="quincenal" data-oid="qncz6xx">
                            Quincenal
                          </SelectItem>
                          <SelectItem value="mensual" data-oid="i8u9hrt">
                            Mensual
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-gray-500" data-oid="j:see62">
                        Frecuencia de pago de nómina
                      </p>
                    </div>
                  </div>

                  <Button data-oid="l6ltnyz">Guardar Configuración</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Nomina;
