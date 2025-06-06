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
    <MainLayout data-oid="dpa8ilx">
      <div className="space-y-4" data-oid="f_p8bft">
        <div className="flex items-center justify-between" data-oid=".cy1zun">
          <h1 className="text-2xl font-bold" data-oid="t_lxkwi">
            Gestión de Nómina
          </h1>
          <Button className="gap-1" data-oid="fbsn4yh">
            <Plus className="h-4 w-4" data-oid="b6nzq1h" />
            <span data-oid="kxf7fx.">Nuevo Empleado</span>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3" data-oid="j4b3.0c">
          <StatCard
            title="Total Empleados"
            value="24"
            icon={Users}
            trend="up"
            trendValue="+2 este mes"
            data-oid="gnoq0mf"
          />

          <StatCard
            title="Próximo Pago"
            value="15/04/2025"
            icon={Calendar}
            trend="neutral"
            trendValue="$45,320.00"
            data-oid="t0njfcf"
          />

          <StatCard
            title="Pagos Realizados (Año)"
            value="$135,960.00"
            icon={CheckIcon}
            trend="up"
            trendValue="+5.4% vs año anterior"
            data-oid="bbc1:7n"
          />
        </div>

        <Tabs defaultValue="empleados" data-oid="vd8v_.u">
          <TabsList
            className="grid w-full grid-cols-3 max-w-md"
            data-oid="rig-knb"
          >
            <TabsTrigger value="empleados" data-oid="2ad--7v">
              Empleados
            </TabsTrigger>
            <TabsTrigger value="pagos" data-oid="kvgoho:">
              Pagos de Nómina
            </TabsTrigger>
            <TabsTrigger value="configuracion" data-oid="oi7ljz1">
              Configuración
            </TabsTrigger>
          </TabsList>

          <TabsContent value="empleados" data-oid="oppljj-">
            <Card className="glass-morphism" data-oid="73ej:no">
              <CardHeader data-oid="q31fbag">
                <CardTitle data-oid="7z17k.g">Listado de Empleados</CardTitle>
                <CardDescription data-oid="jmzg186">
                  Gestione la información de sus empleados
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="yzrw8as">
                <div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                  data-oid="m:l:xt7"
                >
                  {/* Empleado 1 */}
                  <div
                    className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                    data-oid=":w1356r"
                  >
                    <div
                      className="flex items-center space-x-4"
                      data-oid="tj8ylz8"
                    >
                      <Avatar data-oid="0642:pg">
                        <AvatarFallback data-oid="yt8.z99">JD</AvatarFallback>
                      </Avatar>
                      <div data-oid="b_e7o_8">
                        <h3 className="font-medium" data-oid="ph9k-hx">
                          Juan Diaz
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="yhdjn7b">
                          Desarrollador Senior
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2" data-oid="gini2sa">
                      <div className="flex justify-between" data-oid="fsjy0l8">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="fo6gi2e"
                        >
                          Departamento:
                        </span>
                        <span className="text-sm" data-oid="9raw8kc">
                          Tecnología
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid=".vao6sh">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="luftw6s"
                        >
                          Fecha de Ingreso:
                        </span>
                        <span className="text-sm" data-oid="m5u.a3f">
                          15/03/2022
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="5ux0-l:">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="dha-88e"
                        >
                          Salario Base:
                        </span>
                        <span className="text-sm" data-oid="nv2m86j">
                          $18,500.00
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2" data-oid="ris5:kz">
                      <Button size="sm" variant="outline" data-oid="q56d3bu">
                        Ver Detalles
                      </Button>
                      <Button size="sm" variant="outline" data-oid=":2zpatd">
                        Editar
                      </Button>
                    </div>
                  </div>

                  {/* Empleado 2 */}
                  <div
                    className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                    data-oid="m1nw742"
                  >
                    <div
                      className="flex items-center space-x-4"
                      data-oid="r0ynb.-"
                    >
                      <Avatar data-oid="x9z02hw">
                        <AvatarFallback data-oid="1v19mn_">MR</AvatarFallback>
                      </Avatar>
                      <div data-oid="8pnpdy5">
                        <h3 className="font-medium" data-oid="s.n20w3">
                          María Rodriguez
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="cg0:4f4">
                          Gerente de Finanzas
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2" data-oid="un-887s">
                      <div className="flex justify-between" data-oid="x0c7hlb">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="tbgnj_8"
                        >
                          Departamento:
                        </span>
                        <span className="text-sm" data-oid="k49:x:z">
                          Finanzas
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="sgsxhkd">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="sk_d5hr"
                        >
                          Fecha de Ingreso:
                        </span>
                        <span className="text-sm" data-oid="wlgxtzg">
                          05/01/2020
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="-ha::q1">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="vsdxw.y"
                        >
                          Salario Base:
                        </span>
                        <span className="text-sm" data-oid="787xkfx">
                          $25,000.00
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2" data-oid="k9ya:v-">
                      <Button size="sm" variant="outline" data-oid=".kpmbdq">
                        Ver Detalles
                      </Button>
                      <Button size="sm" variant="outline" data-oid="unw6.a5">
                        Editar
                      </Button>
                    </div>
                  </div>

                  {/* Empleado 3 */}
                  <div
                    className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                    data-oid="arfkl5h"
                  >
                    <div
                      className="flex items-center space-x-4"
                      data-oid="nc5-u9:"
                    >
                      <Avatar data-oid="da14be9">
                        <AvatarFallback data-oid=".uw3844">CP</AvatarFallback>
                      </Avatar>
                      <div data-oid="33g0j1.">
                        <h3 className="font-medium" data-oid="vhmiwf7">
                          Carlos Pérez
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="ki0inuq">
                          Ejecutivo de Ventas
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2" data-oid="7kxtg37">
                      <div className="flex justify-between" data-oid="tu7dm0n">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="vaeuzdv"
                        >
                          Departamento:
                        </span>
                        <span className="text-sm" data-oid="rph_duv">
                          Ventas
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="m8fl9p7">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="swell73"
                        >
                          Fecha de Ingreso:
                        </span>
                        <span className="text-sm" data-oid="kvzip61">
                          22/05/2023
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="oq_izu1">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="4srt7.8"
                        >
                          Salario Base:
                        </span>
                        <span className="text-sm" data-oid="2w6ts:c">
                          $12,000.00
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2" data-oid="kornxda">
                      <Button size="sm" variant="outline" data-oid="bjgebp2">
                        Ver Detalles
                      </Button>
                      <Button size="sm" variant="outline" data-oid="2_af1a0">
                        Editar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pagos" data-oid="r7skuj3">
            <div className="grid md:grid-cols-3 gap-4" data-oid="x._69we">
              <Card className="md:col-span-1 glass-morphism" data-oid="x3a3gq3">
                <CardHeader data-oid="72pi_n6">
                  <CardTitle data-oid="ygnxcdn">Nuevo Pago de Nómina</CardTitle>
                  <CardDescription data-oid="y-6zvpc">
                    Registre un nuevo pago de nómina
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid="mgjjvr-">
                  <form className="space-y-4" data-oid="xryvx8-">
                    <div className="space-y-2" data-oid="v413dic">
                      <Label htmlFor="empleado" data-oid="qhzq3_2">
                        Empleado
                      </Label>
                      <Select data-oid="r6n.cm1">
                        <SelectTrigger data-oid="0c-rwnb">
                          <SelectValue
                            placeholder="Seleccione empleado"
                            data-oid="mpwofdq"
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="-fjoui2">
                          <SelectItem value="juan" data-oid="d-kkewf">
                            Juan Diaz
                          </SelectItem>
                          <SelectItem value="maria" data-oid="k.v44mk">
                            María Rodriguez
                          </SelectItem>
                          <SelectItem value="carlos" data-oid="0ll.8ks">
                            Carlos Pérez
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2" data-oid="nr_pqsy">
                      <Label htmlFor="periodo" data-oid="ijd86yl">
                        Periodo de Pago
                      </Label>
                      <Select data-oid="v4omcdz">
                        <SelectTrigger data-oid="2_:b2b-">
                          <SelectValue
                            placeholder="Seleccione periodo"
                            data-oid="vyyw8dp"
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="bqmkhg_">
                          <SelectItem value="abr1" data-oid="-:3xrw.">
                            1-15 Abril 2025
                          </SelectItem>
                          <SelectItem value="abr2" data-oid="fbm2zaj">
                            16-30 Abril 2025
                          </SelectItem>
                          <SelectItem value="may1" data-oid="gkal.1c">
                            1-15 Mayo 2025
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2" data-oid="s1dlx12">
                      <Label htmlFor="salarioBase" data-oid="qd4x3wx">
                        Salario Base
                      </Label>
                      <Input
                        id="salarioBase"
                        placeholder="0.00"
                        type="number"
                        data-oid="x57dd05"
                      />
                    </div>

                    <div className="space-y-2" data-oid="o19o59t">
                      <Label htmlFor="bonos" data-oid="l-nh1ht">
                        Bonos y Comisiones
                      </Label>
                      <Input
                        id="bonos"
                        placeholder="0.00"
                        type="number"
                        data-oid="4z5t8k1"
                      />
                    </div>

                    <div className="space-y-2" data-oid="jd9h824">
                      <Label htmlFor="deducciones" data-oid="m3scijh">
                        Deducciones
                      </Label>
                      <Input
                        id="deducciones"
                        placeholder="0.00"
                        type="number"
                        data-oid="gr:8tao"
                      />
                    </div>

                    <div className="space-y-2" data-oid="qudx9g-">
                      <Label htmlFor="impuestos" data-oid="vwwmk_x">
                        Impuestos
                      </Label>
                      <Input
                        id="impuestos"
                        placeholder="0.00"
                        type="number"
                        data-oid="0:-.py6"
                      />
                    </div>

                    <Button type="submit" className="w-full" data-oid="9thbfcl">
                      Procesar Pago
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 glass-morphism" data-oid="szjjh9z">
                <CardHeader data-oid="ye5qx:0">
                  <CardTitle data-oid="z9b58yf">Historial de Pagos</CardTitle>
                  <CardDescription data-oid="218:fcz">
                    Últimos pagos de nómina realizados
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid="911yrge">
                  <div className="space-y-4" data-oid="3j0sj:_">
                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="gf2e2ui"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="lzc51py"
                      >
                        <Avatar data-oid="4yk8i28">
                          <AvatarFallback data-oid="vzi7v-c">MR</AvatarFallback>
                        </Avatar>
                        <div data-oid="6puok88">
                          <p className="font-medium" data-oid="__zu_cz">
                            María Rodriguez
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="i3fr2k2"
                          >
                            Periodo: 16-31 Marzo 2025
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="kd17hqs">
                        <p className="font-medium" data-oid="gdt637f">
                          $25,000.00
                        </p>
                        <p
                          className="text-sm text-green-500"
                          data-oid="pem2wh1"
                        >
                          Pagado el 31/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="yv0d.08"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="6kbk4mj"
                      >
                        <Avatar data-oid="4xroyy9">
                          <AvatarFallback data-oid="vshslkf">JD</AvatarFallback>
                        </Avatar>
                        <div data-oid="kyafcns">
                          <p className="font-medium" data-oid="sk_uy5e">
                            Juan Diaz
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="h708bgq"
                          >
                            Periodo: 16-31 Marzo 2025
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="q0p.-5l">
                        <p className="font-medium" data-oid="3w7vp70">
                          $18,500.00
                        </p>
                        <p
                          className="text-sm text-green-500"
                          data-oid="7pmx:h6"
                        >
                          Pagado el 31/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="g_lllp4"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="rir82fz"
                      >
                        <Avatar data-oid="lpy8_xd">
                          <AvatarFallback data-oid="y03qy.l">CP</AvatarFallback>
                        </Avatar>
                        <div data-oid="gy_zm2f">
                          <p className="font-medium" data-oid="x:0xnbp">
                            Carlos Pérez
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="-92wm2v"
                          >
                            Periodo: 16-31 Marzo 2025
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="0qa9bb1">
                        <p className="font-medium" data-oid="o:w7m9k">
                          $12,000.00
                        </p>
                        <p
                          className="text-sm text-green-500"
                          data-oid="g_uzf7q"
                        >
                          Pagado el 31/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="d6tsz-6"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="nqkue88"
                      >
                        <Avatar data-oid="7e24pjs">
                          <AvatarFallback data-oid="6_hgly1">MR</AvatarFallback>
                        </Avatar>
                        <div data-oid="o-c.le_">
                          <p className="font-medium" data-oid="gcjvcxx">
                            María Rodriguez
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="zmmhrz5"
                          >
                            Periodo: 1-15 Marzo 2025
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="_ue.gkx">
                        <p className="font-medium" data-oid="c4jhpp_">
                          $25,000.00
                        </p>
                        <p
                          className="text-sm text-green-500"
                          data-oid="dlbijxk"
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

          <TabsContent value="configuracion" data-oid="bwytwt4">
            <Card className="glass-morphism" data-oid="yp.m7i:">
              <CardHeader data-oid="hret76l">
                <CardTitle data-oid="0xj0f1s">
                  Configuración de Nómina
                </CardTitle>
                <CardDescription data-oid="px5y:eg">
                  Ajuste los parámetros de cálculo de nómina
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="s7q:-wo">
                <div className="space-y-6" data-oid="9rjfvzi">
                  <div data-oid="ce9s-oy">
                    <h3 className="font-medium mb-3" data-oid="-_bhd9m">
                      Parámetros de Impuestos
                    </h3>
                    <div
                      className="grid md:grid-cols-2 gap-4"
                      data-oid="-xsz4yl"
                    >
                      <div className="space-y-2" data-oid="p8plnj7">
                        <Label htmlFor="isrPorcentaje" data-oid="n_y6obj">
                          ISR Tasa Base
                        </Label>
                        <Input
                          id="isrPorcentaje"
                          type="number"
                          defaultValue="9"
                          data-oid="te:sxzw"
                        />

                        <p className="text-xs text-gray-500" data-oid="sny9tb2">
                          Porcentaje base para el cálculo de ISR
                        </p>
                      </div>
                      <div className="space-y-2" data-oid="y-cu3x-">
                        <Label htmlFor="subsidioEmpleo" data-oid="wax4e2a">
                          Subsidio al Empleo
                        </Label>
                        <Input
                          id="subsidioEmpleo"
                          type="number"
                          defaultValue="0"
                          data-oid="wzvy5uf"
                        />

                        <p className="text-xs text-gray-500" data-oid="uqyzofa">
                          Monto del subsidio al empleo (si aplica)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div data-oid="y0uhk1u">
                    <h3 className="font-medium mb-3" data-oid="3z_u.i0">
                      Seguridad Social
                    </h3>
                    <div
                      className="grid md:grid-cols-2 gap-4"
                      data-oid="xcfan_s"
                    >
                      <div className="space-y-2" data-oid="5huzrl7">
                        <Label htmlFor="imss" data-oid="vy08e8_">
                          IMSS (Porcentaje)
                        </Label>
                        <Input
                          id="imss"
                          type="number"
                          defaultValue="3.5"
                          data-oid="nbr9fda"
                        />

                        <p className="text-xs text-gray-500" data-oid="4exhdug">
                          Porcentaje para cálculo de IMSS
                        </p>
                      </div>
                      <div className="space-y-2" data-oid="vx3sw0v">
                        <Label htmlFor="infonavit" data-oid="uj7so:6">
                          INFONAVIT (Porcentaje)
                        </Label>
                        <Input
                          id="infonavit"
                          type="number"
                          defaultValue="5"
                          data-oid="ff3b4cn"
                        />

                        <p className="text-xs text-gray-500" data-oid="dx_je-t">
                          Porcentaje para cálculo de INFONAVIT
                        </p>
                      </div>
                    </div>
                  </div>

                  <div data-oid="f61q1yp">
                    <h3 className="font-medium mb-3" data-oid="jtc3mmu">
                      Periodos de Pago
                    </h3>
                    <div className="space-y-2" data-oid="31cj::w">
                      <Select defaultValue="quincenal" data-oid="apdqfng">
                        <SelectTrigger data-oid="-8mm:fp">
                          <SelectValue data-oid="1paz__d" />
                        </SelectTrigger>
                        <SelectContent data-oid="6humvzk">
                          <SelectItem value="semanal" data-oid="4vyh903">
                            Semanal
                          </SelectItem>
                          <SelectItem value="quincenal" data-oid="zsqtvlc">
                            Quincenal
                          </SelectItem>
                          <SelectItem value="mensual" data-oid="9ymn_0f">
                            Mensual
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-gray-500" data-oid="tiakfeg">
                        Frecuencia de pago de nómina
                      </p>
                    </div>
                  </div>

                  <Button data-oid="qgnax45">Guardar Configuración</Button>
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
