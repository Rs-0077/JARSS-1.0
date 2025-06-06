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
import { StatCard } from "@/components/dashboard/StatCard";
import { Calendar, FileText, PieChart, CheckIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Impuestos = () => {
  return (
    <MainLayout data-oid="lwq1tyg">
      <div className="space-y-4" data-oid="pja0uip">
        <h1 className="text-2xl font-bold" data-oid="l46s0q0">
          Cumplimiento Fiscal
        </h1>

        <div className="grid gap-4 md:grid-cols-3" data-oid="bpov7i0">
          <StatCard
            title="Impuestos Pendientes"
            value="$12,450.00"
            icon={FileText}
            trend="neutral"
            trendValue="Vence el 15/04/2025"
            data-oid="4rv.tcg"
          />

          <StatCard
            title="Impuestos Pagados (Año)"
            value="$45,320.00"
            icon={CheckIcon}
            trend="up"
            trendValue="+8.2% vs año anterior"
            data-oid="03ppy53"
          />

          <StatCard
            title="Próxima Declaración"
            value="IVA Mensual"
            icon={Calendar}
            trend="neutral"
            trendValue="15/04/2025"
            data-oid="xhk_apz"
          />
        </div>

        <Card className="glass-morphism" data-oid="99t0bgs">
          <CardHeader data-oid="utvyuxu">
            <CardTitle data-oid="enr7h1e">Calendario Fiscal 2025</CardTitle>
            <CardDescription data-oid="wtjcs:h">
              Fechas importantes para cumplimiento fiscal
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="tpc7wn3">
            <div className="space-y-4" data-oid="82qx0i7">
              <div
                className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
                data-oid="pcg3hr."
              >
                <div
                  className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4"
                  data-oid="6b.db5z"
                >
                  <Calendar
                    className="h-6 w-6 text-red-600"
                    data-oid=".wma6kl"
                  />
                </div>
                <div className="flex-1" data-oid="o-8nfa8">
                  <div
                    className="flex justify-between items-center mb-1"
                    data-oid="2nr:b59"
                  >
                    <h3 className="font-semibold" data-oid="8gn2ver">
                      Declaración Mensual de IVA
                    </h3>
                    <span
                      className="text-sm font-medium text-red-600"
                      data-oid="xt7wx7a"
                    >
                      5 días restantes
                    </span>
                  </div>
                  <p className="text-sm text-gray-500" data-oid="-_wmef5">
                    Fecha límite: 15/04/2025
                  </p>
                  <Progress
                    value={65}
                    className="h-2 mt-2"
                    data-oid="4_.:-am"
                  />
                </div>
              </div>

              <div
                className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
                data-oid="hdb-cms"
              >
                <div
                  className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4"
                  data-oid=".w14bjk"
                >
                  <Calendar
                    className="h-6 w-6 text-amber-600"
                    data-oid="sjic.7x"
                  />
                </div>
                <div className="flex-1" data-oid="rxvj_en">
                  <div
                    className="flex justify-between items-center mb-1"
                    data-oid="f7xj69z"
                  >
                    <h3 className="font-semibold" data-oid="as9m5mi">
                      Retenciones de Impuesto sobre la Renta
                    </h3>
                    <span
                      className="text-sm font-medium text-amber-600"
                      data-oid="4.-7no-"
                    >
                      12 días restantes
                    </span>
                  </div>
                  <p className="text-sm text-gray-500" data-oid="r3zp9b:">
                    Fecha límite: 22/04/2025
                  </p>
                  <Progress
                    value={40}
                    className="h-2 mt-2"
                    data-oid="d._f-jg"
                  />
                </div>
              </div>

              <div
                className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
                data-oid="l.znxif"
              >
                <div
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4"
                  data-oid="g5vtyd5"
                >
                  <Calendar
                    className="h-6 w-6 text-blue-600"
                    data-oid=".flnzvt"
                  />
                </div>
                <div className="flex-1" data-oid="3n-dcd:">
                  <div
                    className="flex justify-between items-center mb-1"
                    data-oid="87q-xuy"
                  >
                    <h3 className="font-semibold" data-oid="z7u4zoe">
                      Declaración de Impuestos Especiales
                    </h3>
                    <span
                      className="text-sm font-medium text-blue-600"
                      data-oid="e4:zjri"
                    >
                      24 días restantes
                    </span>
                  </div>
                  <p className="text-sm text-gray-500" data-oid="_o87sja">
                    Fecha límite: 05/05/2025
                  </p>
                  <Progress
                    value={20}
                    className="h-2 mt-2"
                    data-oid="z6v3rye"
                  />
                </div>
              </div>

              <div
                className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
                data-oid="dur4rm5"
              >
                <div
                  className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4"
                  data-oid="0r6m679"
                >
                  <CheckIcon
                    className="h-6 w-6 text-green-600"
                    data-oid="h6:.mml"
                  />
                </div>
                <div className="flex-1" data-oid="10v:3fz">
                  <div
                    className="flex justify-between items-center mb-1"
                    data-oid="1lxw5v:"
                  >
                    <h3 className="font-semibold" data-oid="xowz1i1">
                      Declaración Trimestral de ISR
                    </h3>
                    <span
                      className="text-sm font-medium text-green-600"
                      data-oid="4b0url5"
                    >
                      Completado
                    </span>
                  </div>
                  <p className="text-sm text-gray-500" data-oid="4s-akuf">
                    Presentado: 15/03/2025
                  </p>
                  <Progress
                    value={100}
                    className="h-2 mt-2"
                    data-oid="ks-8spy"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="declaraciones" data-oid="68dan0:">
          <TabsList
            className="grid w-full grid-cols-3 max-w-md"
            data-oid="g-aw28_"
          >
            <TabsTrigger value="declaraciones" data-oid="hc4wl_0">
              Declaraciones
            </TabsTrigger>
            <TabsTrigger value="reportes" data-oid="8ijf9tt">
              Reportes Fiscales
            </TabsTrigger>
            <TabsTrigger value="analisis" data-oid="f4bnv80">
              Análisis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="declaraciones" data-oid="_79s9ht">
            <Card className="glass-morphism" data-oid="46pqnqe">
              <CardHeader data-oid=".la82xl">
                <CardTitle data-oid="fouius3">
                  Declaraciones Pendientes
                </CardTitle>
                <CardDescription data-oid="lnih34f">
                  Declaraciones fiscales por presentar
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="3lwva9u">
                <div className="space-y-4" data-oid="e89owx.">
                  <div
                    className="flex justify-between p-4 bg-white/10 rounded-lg border border-gray-200/10"
                    data-oid="5tpvp5y"
                  >
                    <div data-oid="oam8gnw">
                      <h3 className="font-medium" data-oid="evy-ku6">
                        IVA Mensual
                      </h3>
                      <p className="text-sm text-gray-500" data-oid="6mcm6wj">
                        Periodo: Marzo 2025
                      </p>
                    </div>
                    <div className="text-right" data-oid="fc3h2wx">
                      <p className="font-medium" data-oid="k2i7c46">
                        $8,450.00
                      </p>
                      <p className="text-xs text-red-500" data-oid="egka5to">
                        Vence: 15/04/2025
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex justify-between p-4 bg-white/10 rounded-lg border border-gray-200/10"
                    data-oid="d.6qvj9"
                  >
                    <div data-oid="i0-:yfv">
                      <h3 className="font-medium" data-oid="-3:k7sc">
                        Retenciones ISR
                      </h3>
                      <p className="text-sm text-gray-500" data-oid="65agt02">
                        Periodo: Marzo 2025
                      </p>
                    </div>
                    <div className="text-right" data-oid="wnzokfi">
                      <p className="font-medium" data-oid="q:nv-ek">
                        $4,000.00
                      </p>
                      <p className="text-xs text-amber-500" data-oid="7jko7kk">
                        Vence: 22/04/2025
                      </p>
                    </div>
                  </div>

                  <div className="mt-4" data-oid="po2lqm:">
                    <Button className="mr-2" data-oid="dv.ptzj">
                      Generar Declaración
                    </Button>
                    <Button variant="outline" data-oid="rsuqav_">
                      Ver Historial
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reportes" data-oid="fy4_0jr">
            <Card className="glass-morphism" data-oid="3dce4h:">
              <CardHeader data-oid="3ekqdx.">
                <CardTitle data-oid="w8h15yz">Reportes Fiscales</CardTitle>
                <CardDescription data-oid="l4wr53h">
                  Informes para análisis fiscal
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="o5yx416">
                <div className="space-y-4" data-oid="s4-_zrt">
                  <div className="grid md:grid-cols-2 gap-4" data-oid="56r0vmu">
                    <div
                      className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                      data-oid=":-bv.pn"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid="c-rbs00"
                      >
                        <FileText
                          className="h-5 w-5 mr-2 text-contable-primary"
                          data-oid="bw.dw-5"
                        />

                        <h3 className="font-medium" data-oid=".zdo9o2">
                          Reporte de IVA Acreditable
                        </h3>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-4"
                        data-oid="jztle1g"
                      >
                        Detalle de IVA acreditable por periodo
                      </p>
                      <Button variant="outline" size="sm" data-oid="3jlgocp">
                        Descargar
                      </Button>
                    </div>

                    <div
                      className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                      data-oid="cdptwix"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid="n2m-0t3"
                      >
                        <FileText
                          className="h-5 w-5 mr-2 text-contable-primary"
                          data-oid="1bnqywi"
                        />

                        <h3 className="font-medium" data-oid=".dpmaib">
                          Reporte de IVA Trasladado
                        </h3>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-4"
                        data-oid="7m9qc12"
                      >
                        Detalle de IVA trasladado por periodo
                      </p>
                      <Button variant="outline" size="sm" data-oid="uw5pdwk">
                        Descargar
                      </Button>
                    </div>

                    <div
                      className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                      data-oid=":2n_j28"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid="du.nht0"
                      >
                        <FileText
                          className="h-5 w-5 mr-2 text-contable-primary"
                          data-oid="fje890k"
                        />

                        <h3 className="font-medium" data-oid="1.k6_sl">
                          Reporte de Retenciones
                        </h3>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-4"
                        data-oid="zw63.uo"
                      >
                        Retenciones de ISR e IVA
                      </p>
                      <Button variant="outline" size="sm" data-oid="i.d0cf6">
                        Descargar
                      </Button>
                    </div>

                    <div
                      className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                      data-oid="mj-v.kz"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid="-ycbwjt"
                      >
                        <FileText
                          className="h-5 w-5 mr-2 text-contable-primary"
                          data-oid="8_sj_h7"
                        />

                        <h3 className="font-medium" data-oid="pkt1ebs">
                          Análisis Fiscal Anual
                        </h3>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-4"
                        data-oid="--ry5m-"
                      >
                        Resumen de impuestos anuales
                      </p>
                      <Button variant="outline" size="sm" data-oid="9eywjtj">
                        Descargar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analisis" data-oid="0vee5.8">
            <Card className="glass-morphism" data-oid="msjcr2:">
              <CardHeader data-oid="q_59erj">
                <CardTitle data-oid="ytn0cy4">Análisis Fiscal</CardTitle>
                <CardDescription data-oid="17be5du">
                  Estadísticas y tendencias fiscales
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="x2f40e4">
                <div className="space-y-6" data-oid="pn85_ca">
                  <div data-oid="h9bs4vp">
                    <h3 className="font-medium mb-3" data-oid="kg1ar-k">
                      Distribución de Impuestos (2025)
                    </h3>
                    <div
                      className="h-64 bg-white/10 p-4 rounded-lg border border-gray-200/10 flex items-center justify-center"
                      data-oid="e6.uf2e"
                    >
                      <div
                        className="text-center text-gray-500"
                        data-oid="75.:jl1"
                      >
                        <PieChart
                          className="h-12 w-12 mx-auto mb-3 opacity-50"
                          data-oid="lisqc67"
                        />

                        <p data-oid="7wyqn92">
                          Gráfico de distribución de impuestos
                        </p>
                        <p className="text-sm" data-oid="hu:6cdx">
                          (Datos simulados)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4" data-oid="fbm9vbx">
                    <div data-oid="rkh_u7p">
                      <h3 className="font-medium mb-3" data-oid="he8q83z">
                        Tasa Efectiva de Impuestos
                      </h3>
                      <div
                        className="p-4 rounded-lg bg-white/10 border border-gray-200/10"
                        data-oid="lrce9fy"
                      >
                        <div
                          className="flex justify-between items-center mb-2"
                          data-oid="zx.6tij"
                        >
                          <span
                            className="text-sm text-gray-500"
                            data-oid="4:ad.2d"
                          >
                            Tasa Efectiva Actual
                          </span>
                          <span className="font-medium" data-oid="u35858w">
                            24.5%
                          </span>
                        </div>
                        <div
                          className="flex justify-between items-center mb-2"
                          data-oid="kiz07b."
                        >
                          <span
                            className="text-sm text-gray-500"
                            data-oid="w04::q."
                          >
                            Tasa Efectiva Anterior
                          </span>
                          <span className="font-medium" data-oid="w-4:1yl">
                            26.8%
                          </span>
                        </div>
                        <div
                          className="flex justify-between items-center mb-2"
                          data-oid="3aead7n"
                        >
                          <span
                            className="text-sm text-gray-500"
                            data-oid="mptfnr."
                          >
                            Variación
                          </span>
                          <span
                            className="font-medium text-green-500"
                            data-oid="i19772q"
                          >
                            -2.3%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div data-oid="njn5m9b">
                      <h3 className="font-medium mb-3" data-oid="8o30wa5">
                        Próximas Obligaciones
                      </h3>
                      <div
                        className="p-4 rounded-lg bg-white/10 border border-gray-200/10"
                        data-oid="0.i0382"
                      >
                        <div className="space-y-3" data-oid="tcswu0c">
                          <div
                            className="flex justify-between items-center"
                            data-oid="h0w_a0m"
                          >
                            <span className="text-sm" data-oid=":g8cx7s">
                              DIOT
                            </span>
                            <span
                              className="text-xs text-amber-500"
                              data-oid="ncwrnbr"
                            >
                              17/04/2025
                            </span>
                          </div>
                          <div
                            className="flex justify-between items-center"
                            data-oid=":9r2.lh"
                          >
                            <span className="text-sm" data-oid="hnj_j48">
                              Nómina
                            </span>
                            <span
                              className="text-xs text-amber-500"
                              data-oid="tcv4w7:"
                            >
                              18/04/2025
                            </span>
                          </div>
                          <div
                            className="flex justify-between items-center"
                            data-oid="su.soyo"
                          >
                            <span className="text-sm" data-oid="ctodbe2">
                              ISR Definitivo
                            </span>
                            <span className="text-xs" data-oid="49jabwa">
                              30/04/2025
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Impuestos;
