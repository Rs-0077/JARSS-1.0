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
    <MainLayout data-oid="vp8f7a:">
      <div className="space-y-4" data-oid="k8jmkfi">
        <div className="flex items-center justify-between" data-oid="606k0w.">
          <h1 className="text-2xl font-bold" data-oid="h..3qt.">
            Gestión de Nómina
          </h1>
          <Button className="gap-1" data-oid="y5cp1wf">
            <Plus className="h-4 w-4" data-oid="ti5d6gd" />
            <span data-oid=":4wwe4l">Nuevo Empleado</span>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3" data-oid=".h:8pdf">
          <StatCard
            title="Total Empleados"
            value="24"
            icon={Users}
            trend="up"
            trendValue="+2 este mes"
            data-oid="44ozb_q"
          />

          <StatCard
            title="Próximo Pago"
            value="15/04/2025"
            icon={Calendar}
            trend="neutral"
            trendValue="$45,320.00"
            data-oid="hf7jruz"
          />

          <StatCard
            title="Pagos Realizados (Año)"
            value="$135,960.00"
            icon={CheckIcon}
            trend="up"
            trendValue="+5.4% vs año anterior"
            data-oid=".lvy-5n"
          />
        </div>

        <Tabs defaultValue="empleados" data-oid="c_kje87">
          <TabsList
            className="grid w-full grid-cols-3 max-w-md"
            data-oid="3yo0_80"
          >
            <TabsTrigger value="empleados" data-oid="q_-2w8.">
              Empleados
            </TabsTrigger>
            <TabsTrigger value="pagos" data-oid="d2g8vqx">
              Pagos de Nómina
            </TabsTrigger>
            <TabsTrigger value="configuracion" data-oid="mm9cldv">
              Configuración
            </TabsTrigger>
          </TabsList>

          <TabsContent value="empleados" data-oid="7fdevd0">
            <Card className="glass-morphism" data-oid="b8hokq6">
              <CardHeader data-oid="xgij5t6">
                <CardTitle data-oid="1x82c5g">Listado de Empleados</CardTitle>
                <CardDescription data-oid="dt4mrw0">
                  Gestione la información de sus empleados
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="lf:42c3">
                <div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                  data-oid="cp.ckac"
                >
                  {/* Empleado 1 */}
                  <div
                    className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                    data-oid="1q:gtm7"
                  >
                    <div
                      className="flex items-center space-x-4"
                      data-oid="ccxqwlm"
                    >
                      <Avatar data-oid="0j97r5r">
                        <AvatarFallback data-oid="jd9q7he">JD</AvatarFallback>
                      </Avatar>
                      <div data-oid="vulgcey">
                        <h3 className="font-medium" data-oid="3a2o4bj">
                          Juan Diaz
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="ofe1c5m">
                          Desarrollador Senior
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2" data-oid="hajzmar">
                      <div className="flex justify-between" data-oid="7tj1bi2">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="6j9czhc"
                        >
                          Departamento:
                        </span>
                        <span className="text-sm" data-oid="uc89w77">
                          Tecnología
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="tp9yjn0">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="jfvspsk"
                        >
                          Fecha de Ingreso:
                        </span>
                        <span className="text-sm" data-oid="mntvtl8">
                          15/03/2022
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="x00l7mg">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="c2xkbm:"
                        >
                          Salario Base:
                        </span>
                        <span className="text-sm" data-oid="u88c90e">
                          $18,500.00
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2" data-oid="5y41sxl">
                      <Button size="sm" variant="outline" data-oid="mccomw:">
                        Ver Detalles
                      </Button>
                      <Button size="sm" variant="outline" data-oid="eio-w5a">
                        Editar
                      </Button>
                    </div>
                  </div>

                  {/* Empleado 2 */}
                  <div
                    className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                    data-oid="8_ukps:"
                  >
                    <div
                      className="flex items-center space-x-4"
                      data-oid="n-ou4y1"
                    >
                      <Avatar data-oid=".cp49ek">
                        <AvatarFallback data-oid="gvsstw4">MR</AvatarFallback>
                      </Avatar>
                      <div data-oid="97nvz_j">
                        <h3 className="font-medium" data-oid="5yo05eb">
                          María Rodriguez
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="68oi.kc">
                          Gerente de Finanzas
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2" data-oid="__bjjh4">
                      <div className="flex justify-between" data-oid="8thzua.">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="lacwe:2"
                        >
                          Departamento:
                        </span>
                        <span className="text-sm" data-oid="z5b8.s-">
                          Finanzas
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="ez1zq35">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="5w-hry7"
                        >
                          Fecha de Ingreso:
                        </span>
                        <span className="text-sm" data-oid="5o_.zez">
                          05/01/2020
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="_:8kmue">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="gxs0b5k"
                        >
                          Salario Base:
                        </span>
                        <span className="text-sm" data-oid="pkllu9.">
                          $25,000.00
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2" data-oid="o:wx_.i">
                      <Button size="sm" variant="outline" data-oid="r3f.u9w">
                        Ver Detalles
                      </Button>
                      <Button size="sm" variant="outline" data-oid="spurfzk">
                        Editar
                      </Button>
                    </div>
                  </div>

                  {/* Empleado 3 */}
                  <div
                    className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                    data-oid="qk_vr.e"
                  >
                    <div
                      className="flex items-center space-x-4"
                      data-oid="6e27cim"
                    >
                      <Avatar data-oid="zm0jqzl">
                        <AvatarFallback data-oid="ekeks:z">CP</AvatarFallback>
                      </Avatar>
                      <div data-oid="fynor9:">
                        <h3 className="font-medium" data-oid="02o:3b7">
                          Carlos Pérez
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="wbv4s0j">
                          Ejecutivo de Ventas
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2" data-oid="1l4qyoj">
                      <div className="flex justify-between" data-oid="dxez5r0">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="5ymxs:x"
                        >
                          Departamento:
                        </span>
                        <span className="text-sm" data-oid="k0k9305">
                          Ventas
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="0f8xjrt">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="4z9wz1w"
                        >
                          Fecha de Ingreso:
                        </span>
                        <span className="text-sm" data-oid="isfyeov">
                          22/05/2023
                        </span>
                      </div>
                      <div className="flex justify-between" data-oid="08yag52">
                        <span
                          className="text-sm text-gray-500"
                          data-oid="8qq-zok"
                        >
                          Salario Base:
                        </span>
                        <span className="text-sm" data-oid="1hi5i1v">
                          $12,000.00
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2" data-oid="57c4ty8">
                      <Button size="sm" variant="outline" data-oid="_nf8xo5">
                        Ver Detalles
                      </Button>
                      <Button size="sm" variant="outline" data-oid="2jn8nq8">
                        Editar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pagos" data-oid="9o:psth">
            <div className="grid md:grid-cols-3 gap-4" data-oid="1_pvzy7">
              <Card className="md:col-span-1 glass-morphism" data-oid="xpxww70">
                <CardHeader data-oid="i9amq_h">
                  <CardTitle data-oid="z-:a1k4">Nuevo Pago de Nómina</CardTitle>
                  <CardDescription data-oid="yroodni">
                    Registre un nuevo pago de nómina
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid="s64iwlm">
                  <form className="space-y-4" data-oid="n9m.teo">
                    <div className="space-y-2" data-oid="8w7xffv">
                      <Label htmlFor="empleado" data-oid="r6naf90">
                        Empleado
                      </Label>
                      <Select data-oid="fajxqoz">
                        <SelectTrigger data-oid="ubvrf6p">
                          <SelectValue
                            placeholder="Seleccione empleado"
                            data-oid="g51w-n6"
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="1exw-9r">
                          <SelectItem value="juan" data-oid="r07.okf">
                            Juan Diaz
                          </SelectItem>
                          <SelectItem value="maria" data-oid="tztbsh9">
                            María Rodriguez
                          </SelectItem>
                          <SelectItem value="carlos" data-oid="1mb0z48">
                            Carlos Pérez
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2" data-oid="b9n9byy">
                      <Label htmlFor="periodo" data-oid="1ripr14">
                        Periodo de Pago
                      </Label>
                      <Select data-oid="dnqudd8">
                        <SelectTrigger data-oid="x5friwd">
                          <SelectValue
                            placeholder="Seleccione periodo"
                            data-oid="60uv-i8"
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="b:tcmai">
                          <SelectItem value="abr1" data-oid="7_8fyle">
                            1-15 Abril 2025
                          </SelectItem>
                          <SelectItem value="abr2" data-oid="ow2un.m">
                            16-30 Abril 2025
                          </SelectItem>
                          <SelectItem value="may1" data-oid="lcvq2-:">
                            1-15 Mayo 2025
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2" data-oid="i7r46az">
                      <Label htmlFor="salarioBase" data-oid="sfc21.c">
                        Salario Base
                      </Label>
                      <Input
                        id="salarioBase"
                        placeholder="0.00"
                        type="number"
                        data-oid="cg-1d1k"
                      />
                    </div>

                    <div className="space-y-2" data-oid="xm73cfp">
                      <Label htmlFor="bonos" data-oid="kaf_f.p">
                        Bonos y Comisiones
                      </Label>
                      <Input
                        id="bonos"
                        placeholder="0.00"
                        type="number"
                        data-oid=":-mcc:n"
                      />
                    </div>

                    <div className="space-y-2" data-oid="5o-s812">
                      <Label htmlFor="deducciones" data-oid="tt3_4:v">
                        Deducciones
                      </Label>
                      <Input
                        id="deducciones"
                        placeholder="0.00"
                        type="number"
                        data-oid="4-t.qtr"
                      />
                    </div>

                    <div className="space-y-2" data-oid="foxp37n">
                      <Label htmlFor="impuestos" data-oid="irc:0t3">
                        Impuestos
                      </Label>
                      <Input
                        id="impuestos"
                        placeholder="0.00"
                        type="number"
                        data-oid="lnug8h0"
                      />
                    </div>

                    <Button type="submit" className="w-full" data-oid="a50.ip.">
                      Procesar Pago
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 glass-morphism" data-oid="75d0t-:">
                <CardHeader data-oid="83cf:lb">
                  <CardTitle data-oid="xk2s3qw">Historial de Pagos</CardTitle>
                  <CardDescription data-oid="0n4kzjl">
                    Últimos pagos de nómina realizados
                  </CardDescription>
                </CardHeader>
                <CardContent data-oid="9cn6xb.">
                  <div className="space-y-4" data-oid=":_b8.qd">
                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="vqic7mc"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="70tb:4:"
                      >
                        <Avatar data-oid="sk6vcsx">
                          <AvatarFallback data-oid="b0io54a">MR</AvatarFallback>
                        </Avatar>
                        <div data-oid="r99ja2a">
                          <p className="font-medium" data-oid="j_q67_l">
                            María Rodriguez
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="v2t0:x:"
                          >
                            Periodo: 16-31 Marzo 2025
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="ud5dby2">
                        <p className="font-medium" data-oid="g.fcv8c">
                          $25,000.00
                        </p>
                        <p
                          className="text-sm text-green-500"
                          data-oid="-vcye_d"
                        >
                          Pagado el 31/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="p72zf3h"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="pw71:16"
                      >
                        <Avatar data-oid="gljg8ze">
                          <AvatarFallback data-oid="-a7sq_g">JD</AvatarFallback>
                        </Avatar>
                        <div data-oid="vuzj_.q">
                          <p className="font-medium" data-oid="qy3gv28">
                            Juan Diaz
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="b:bqtnf"
                          >
                            Periodo: 16-31 Marzo 2025
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="lp0gb4a">
                        <p className="font-medium" data-oid="hqfc2.z">
                          $18,500.00
                        </p>
                        <p
                          className="text-sm text-green-500"
                          data-oid="smd1ew3"
                        >
                          Pagado el 31/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="bvo:shg"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="mm21sxs"
                      >
                        <Avatar data-oid="7ss:lvi">
                          <AvatarFallback data-oid="dia9r66">CP</AvatarFallback>
                        </Avatar>
                        <div data-oid="ek56w:z">
                          <p className="font-medium" data-oid="9lm.2sm">
                            Carlos Pérez
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="5i.g:0:"
                          >
                            Periodo: 16-31 Marzo 2025
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="w.66p7z">
                        <p className="font-medium" data-oid="fdnvn61">
                          $12,000.00
                        </p>
                        <p
                          className="text-sm text-green-500"
                          data-oid="gyw83nh"
                        >
                          Pagado el 31/03/2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10"
                      data-oid="t2m10kh"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="m5:dzyo"
                      >
                        <Avatar data-oid="mbzz:o3">
                          <AvatarFallback data-oid="bwx:t3d">MR</AvatarFallback>
                        </Avatar>
                        <div data-oid="1zvklt9">
                          <p className="font-medium" data-oid="vpmi_6q">
                            María Rodriguez
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="cz9zdps"
                          >
                            Periodo: 1-15 Marzo 2025
                          </p>
                        </div>
                      </div>
                      <div className="text-right" data-oid="jms6msc">
                        <p className="font-medium" data-oid="4wqoxkc">
                          $25,000.00
                        </p>
                        <p
                          className="text-sm text-green-500"
                          data-oid="acfp9is"
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

          <TabsContent value="configuracion" data-oid="hws5v3w">
            <Card className="glass-morphism" data-oid="y8pov6_">
              <CardHeader data-oid="6ig_t81">
                <CardTitle data-oid="7iggbov">
                  Configuración de Nómina
                </CardTitle>
                <CardDescription data-oid="4lv5hr-">
                  Ajuste los parámetros de cálculo de nómina
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="xjy4-b0">
                <div className="space-y-6" data-oid="hf9ulhh">
                  <div data-oid="p9rfslj">
                    <h3 className="font-medium mb-3" data-oid="xz5lwyl">
                      Parámetros de Impuestos
                    </h3>
                    <div
                      className="grid md:grid-cols-2 gap-4"
                      data-oid="6ii:9kt"
                    >
                      <div className="space-y-2" data-oid="6rsdxwj">
                        <Label htmlFor="isrPorcentaje" data-oid="xojix3-">
                          ISR Tasa Base
                        </Label>
                        <Input
                          id="isrPorcentaje"
                          type="number"
                          defaultValue="9"
                          data-oid="k516k7."
                        />

                        <p className="text-xs text-gray-500" data-oid="2rltotk">
                          Porcentaje base para el cálculo de ISR
                        </p>
                      </div>
                      <div className="space-y-2" data-oid="tdn.f.8">
                        <Label htmlFor="subsidioEmpleo" data-oid="1qa0765">
                          Subsidio al Empleo
                        </Label>
                        <Input
                          id="subsidioEmpleo"
                          type="number"
                          defaultValue="0"
                          data-oid="-gfad4f"
                        />

                        <p className="text-xs text-gray-500" data-oid="4a08eba">
                          Monto del subsidio al empleo (si aplica)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div data-oid="m66lbpw">
                    <h3 className="font-medium mb-3" data-oid="3azjwze">
                      Seguridad Social
                    </h3>
                    <div
                      className="grid md:grid-cols-2 gap-4"
                      data-oid="su_bk-g"
                    >
                      <div className="space-y-2" data-oid="wge64x.">
                        <Label htmlFor="imss" data-oid="nu-f4ug">
                          IMSS (Porcentaje)
                        </Label>
                        <Input
                          id="imss"
                          type="number"
                          defaultValue="3.5"
                          data-oid="kgbtqn."
                        />

                        <p className="text-xs text-gray-500" data-oid="ot183d6">
                          Porcentaje para cálculo de IMSS
                        </p>
                      </div>
                      <div className="space-y-2" data-oid="7:7y3xt">
                        <Label htmlFor="infonavit" data-oid="sw08v28">
                          INFONAVIT (Porcentaje)
                        </Label>
                        <Input
                          id="infonavit"
                          type="number"
                          defaultValue="5"
                          data-oid="q1_6shf"
                        />

                        <p className="text-xs text-gray-500" data-oid="qs7_hzw">
                          Porcentaje para cálculo de INFONAVIT
                        </p>
                      </div>
                    </div>
                  </div>

                  <div data-oid="01r--pi">
                    <h3 className="font-medium mb-3" data-oid="i2:syak">
                      Periodos de Pago
                    </h3>
                    <div className="space-y-2" data-oid="iopcxn3">
                      <Select defaultValue="quincenal" data-oid="6g-s_c:">
                        <SelectTrigger data-oid="a1.tpbo">
                          <SelectValue data-oid="3-zzhag" />
                        </SelectTrigger>
                        <SelectContent data-oid="ye9axdh">
                          <SelectItem value="semanal" data-oid="ru7d:c1">
                            Semanal
                          </SelectItem>
                          <SelectItem value="quincenal" data-oid="pn8ya_g">
                            Quincenal
                          </SelectItem>
                          <SelectItem value="mensual" data-oid="gt0_n.-">
                            Mensual
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-gray-500" data-oid="lywmn8:">
                        Frecuencia de pago de nómina
                      </p>
                    </div>
                  </div>

                  <Button data-oid="newutm1">Guardar Configuración</Button>
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
