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
    <MainLayout data-oid="gy3r5:o">
      <div className="space-y-4" data-oid="qxb8b:t">
        <h1 className="text-2xl font-bold" data-oid=".f29gqe">
          Cumplimiento Fiscal
        </h1>

        <div className="grid gap-4 md:grid-cols-3" data-oid="n68bb16">
          <StatCard
            title="Impuestos Pendientes"
            value="$12,450.00"
            icon={FileText}
            trend="neutral"
            trendValue="Vence el 15/04/2025"
            data-oid=":q8ssyz"
          />

          <StatCard
            title="Impuestos Pagados (Año)"
            value="$45,320.00"
            icon={CheckIcon}
            trend="up"
            trendValue="+8.2% vs año anterior"
            data-oid="a4.mucu"
          />

          <StatCard
            title="Próxima Declaración"
            value="IVA Mensual"
            icon={Calendar}
            trend="neutral"
            trendValue="15/04/2025"
            data-oid="fmfe4m."
          />
        </div>

        <Card className="glass-morphism" data-oid="w.vurx:">
          <CardHeader data-oid="07k6o7c">
            <CardTitle data-oid="d3k7qcu">Calendario Fiscal 2025</CardTitle>
            <CardDescription data-oid="hdj___b">
              Fechas importantes para cumplimiento fiscal
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="h-yv7_d">
            <div className="space-y-4" data-oid="s5ra9lf">
              <div
                className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
                data-oid=".7yli3v"
              >
                <div
                  className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4"
                  data-oid="ow-1s1k"
                >
                  <Calendar
                    className="h-6 w-6 text-red-600"
                    data-oid="19cm1jy"
                  />
                </div>
                <div className="flex-1" data-oid="2izfx99">
                  <div
                    className="flex justify-between items-center mb-1"
                    data-oid="4jo9mo5"
                  >
                    <h3 className="font-semibold" data-oid="os3cvoc">
                      Declaración Mensual de IVA
                    </h3>
                    <span
                      className="text-sm font-medium text-red-600"
                      data-oid="2jxnwbj"
                    >
                      5 días restantes
                    </span>
                  </div>
                  <p className="text-sm text-gray-500" data-oid="gg95xv-">
                    Fecha límite: 15/04/2025
                  </p>
                  <Progress
                    value={65}
                    className="h-2 mt-2"
                    data-oid="6bcpl:w"
                  />
                </div>
              </div>

              <div
                className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
                data-oid="s2bl:uv"
              >
                <div
                  className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4"
                  data-oid="-1o_vrz"
                >
                  <Calendar
                    className="h-6 w-6 text-amber-600"
                    data-oid="e4cuql4"
                  />
                </div>
                <div className="flex-1" data-oid="croh2._">
                  <div
                    className="flex justify-between items-center mb-1"
                    data-oid="0:am_kk"
                  >
                    <h3 className="font-semibold" data-oid="c-5r85x">
                      Retenciones de Impuesto sobre la Renta
                    </h3>
                    <span
                      className="text-sm font-medium text-amber-600"
                      data-oid="kd4pvs6"
                    >
                      12 días restantes
                    </span>
                  </div>
                  <p className="text-sm text-gray-500" data-oid="fqlggv9">
                    Fecha límite: 22/04/2025
                  </p>
                  <Progress
                    value={40}
                    className="h-2 mt-2"
                    data-oid="a46yui5"
                  />
                </div>
              </div>

              <div
                className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
                data-oid="ov2_pi:"
              >
                <div
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4"
                  data-oid="1iw68wo"
                >
                  <Calendar
                    className="h-6 w-6 text-blue-600"
                    data-oid="-0-s4ck"
                  />
                </div>
                <div className="flex-1" data-oid="kxp31x-">
                  <div
                    className="flex justify-between items-center mb-1"
                    data-oid="ibq97-5"
                  >
                    <h3 className="font-semibold" data-oid="ytlee1k">
                      Declaración de Impuestos Especiales
                    </h3>
                    <span
                      className="text-sm font-medium text-blue-600"
                      data-oid="z3v8sa2"
                    >
                      24 días restantes
                    </span>
                  </div>
                  <p className="text-sm text-gray-500" data-oid="sngdwc1">
                    Fecha límite: 05/05/2025
                  </p>
                  <Progress
                    value={20}
                    className="h-2 mt-2"
                    data-oid="xtwu9nk"
                  />
                </div>
              </div>

              <div
                className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
                data-oid="gznm8ur"
              >
                <div
                  className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4"
                  data-oid="m_rn5xx"
                >
                  <CheckIcon
                    className="h-6 w-6 text-green-600"
                    data-oid="-hqet4j"
                  />
                </div>
                <div className="flex-1" data-oid="v:_73ok">
                  <div
                    className="flex justify-between items-center mb-1"
                    data-oid="kccvoj0"
                  >
                    <h3 className="font-semibold" data-oid="a8fk2gr">
                      Declaración Trimestral de ISR
                    </h3>
                    <span
                      className="text-sm font-medium text-green-600"
                      data-oid="etfwt8r"
                    >
                      Completado
                    </span>
                  </div>
                  <p className="text-sm text-gray-500" data-oid="bwf6ph:">
                    Presentado: 15/03/2025
                  </p>
                  <Progress
                    value={100}
                    className="h-2 mt-2"
                    data-oid="7vgixpf"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="declaraciones" data-oid="zhsqpa7">
          <TabsList
            className="grid w-full grid-cols-3 max-w-md"
            data-oid="_pr3cmp"
          >
            <TabsTrigger value="declaraciones" data-oid="jplj0ce">
              Declaraciones
            </TabsTrigger>
            <TabsTrigger value="reportes" data-oid="v1ypr.n">
              Reportes Fiscales
            </TabsTrigger>
            <TabsTrigger value="analisis" data-oid=":lqkn09">
              Análisis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="declaraciones" data-oid="1gulnj.">
            <Card className="glass-morphism" data-oid="0cavdye">
              <CardHeader data-oid="cih:b-.">
                <CardTitle data-oid=":u.lxql">
                  Declaraciones Pendientes
                </CardTitle>
                <CardDescription data-oid="0s64p6c">
                  Declaraciones fiscales por presentar
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="uieiz2h">
                <div className="space-y-4" data-oid="p51_hgh">
                  <div
                    className="flex justify-between p-4 bg-white/10 rounded-lg border border-gray-200/10"
                    data-oid="hkjhjz7"
                  >
                    <div data-oid="lrxhh03">
                      <h3 className="font-medium" data-oid="g7vxyu4">
                        IVA Mensual
                      </h3>
                      <p className="text-sm text-gray-500" data-oid="ynzaq0g">
                        Periodo: Marzo 2025
                      </p>
                    </div>
                    <div className="text-right" data-oid="k5k9rl8">
                      <p className="font-medium" data-oid="63r5wnz">
                        $8,450.00
                      </p>
                      <p className="text-xs text-red-500" data-oid="8zmg6ob">
                        Vence: 15/04/2025
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex justify-between p-4 bg-white/10 rounded-lg border border-gray-200/10"
                    data-oid="tfoywjr"
                  >
                    <div data-oid="-.0okj9">
                      <h3 className="font-medium" data-oid="4k-2z_v">
                        Retenciones ISR
                      </h3>
                      <p className="text-sm text-gray-500" data-oid="-ddydng">
                        Periodo: Marzo 2025
                      </p>
                    </div>
                    <div className="text-right" data-oid="a_7pgce">
                      <p className="font-medium" data-oid="5srhfwl">
                        $4,000.00
                      </p>
                      <p className="text-xs text-amber-500" data-oid="ogeoopz">
                        Vence: 22/04/2025
                      </p>
                    </div>
                  </div>

                  <div className="mt-4" data-oid=":c4b2ue">
                    <Button className="mr-2" data-oid="88opv8j">
                      Generar Declaración
                    </Button>
                    <Button variant="outline" data-oid="r-xo__d">
                      Ver Historial
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reportes" data-oid="s.dwxva">
            <Card className="glass-morphism" data-oid="hyyxpr9">
              <CardHeader data-oid="fd..68b">
                <CardTitle data-oid="b:p8.3-">Reportes Fiscales</CardTitle>
                <CardDescription data-oid="olckhwp">
                  Informes para análisis fiscal
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="-2yjzu-">
                <div className="space-y-4" data-oid="kjxhrcf">
                  <div className="grid md:grid-cols-2 gap-4" data-oid="d:kaol_">
                    <div
                      className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                      data-oid="k8mlz69"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid="sdgrpxj"
                      >
                        <FileText
                          className="h-5 w-5 mr-2 text-contable-primary"
                          data-oid="fz2gxxu"
                        />

                        <h3 className="font-medium" data-oid="_fz.:lo">
                          Reporte de IVA Acreditable
                        </h3>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-4"
                        data-oid="_55yx-v"
                      >
                        Detalle de IVA acreditable por periodo
                      </p>
                      <Button variant="outline" size="sm" data-oid="a0:17vo">
                        Descargar
                      </Button>
                    </div>

                    <div
                      className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                      data-oid="j5z.oai"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid="ie2v3c9"
                      >
                        <FileText
                          className="h-5 w-5 mr-2 text-contable-primary"
                          data-oid="g7qkhs-"
                        />

                        <h3 className="font-medium" data-oid="8l3dsoz">
                          Reporte de IVA Trasladado
                        </h3>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-4"
                        data-oid="a2v7jby"
                      >
                        Detalle de IVA trasladado por periodo
                      </p>
                      <Button variant="outline" size="sm" data-oid="usylg6l">
                        Descargar
                      </Button>
                    </div>

                    <div
                      className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                      data-oid="4c9tw4m"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid=".:ad98i"
                      >
                        <FileText
                          className="h-5 w-5 mr-2 text-contable-primary"
                          data-oid="a.eeuas"
                        />

                        <h3 className="font-medium" data-oid="o2e3600">
                          Reporte de Retenciones
                        </h3>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-4"
                        data-oid="qme8j81"
                      >
                        Retenciones de ISR e IVA
                      </p>
                      <Button variant="outline" size="sm" data-oid="0ld54yz">
                        Descargar
                      </Button>
                    </div>

                    <div
                      className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                      data-oid="54cui6:"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid="zu.0yjz"
                      >
                        <FileText
                          className="h-5 w-5 mr-2 text-contable-primary"
                          data-oid="i6-u.sp"
                        />

                        <h3 className="font-medium" data-oid="xn:ibl:">
                          Análisis Fiscal Anual
                        </h3>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-4"
                        data-oid="-fr10cm"
                      >
                        Resumen de impuestos anuales
                      </p>
                      <Button variant="outline" size="sm" data-oid=".4en-v9">
                        Descargar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analisis" data-oid="s1r5_7j">
            <Card className="glass-morphism" data-oid="jvhfev9">
              <CardHeader data-oid="hzr6g1l">
                <CardTitle data-oid="sxpy4ky">Análisis Fiscal</CardTitle>
                <CardDescription data-oid="g:.g5xz">
                  Estadísticas y tendencias fiscales
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="tzz9m_s">
                <div className="space-y-6" data-oid="bm2nifg">
                  <div data-oid="x3t1c2t">
                    <h3 className="font-medium mb-3" data-oid="ikntguq">
                      Distribución de Impuestos (2025)
                    </h3>
                    <div
                      className="h-64 bg-white/10 p-4 rounded-lg border border-gray-200/10 flex items-center justify-center"
                      data-oid="j53juvg"
                    >
                      <div
                        className="text-center text-gray-500"
                        data-oid=":wro00f"
                      >
                        <PieChart
                          className="h-12 w-12 mx-auto mb-3 opacity-50"
                          data-oid="akuesle"
                        />

                        <p data-oid="8n_g.f8">
                          Gráfico de distribución de impuestos
                        </p>
                        <p className="text-sm" data-oid="dd_i300">
                          (Datos simulados)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4" data-oid="p0ificb">
                    <div data-oid="l6dlwqk">
                      <h3 className="font-medium mb-3" data-oid="n.i3uj.">
                        Tasa Efectiva de Impuestos
                      </h3>
                      <div
                        className="p-4 rounded-lg bg-white/10 border border-gray-200/10"
                        data-oid="xo79_w1"
                      >
                        <div
                          className="flex justify-between items-center mb-2"
                          data-oid="blpfpdo"
                        >
                          <span
                            className="text-sm text-gray-500"
                            data-oid="ytv-3bl"
                          >
                            Tasa Efectiva Actual
                          </span>
                          <span className="font-medium" data-oid="pxwwscu">
                            24.5%
                          </span>
                        </div>
                        <div
                          className="flex justify-between items-center mb-2"
                          data-oid="e6uucn7"
                        >
                          <span
                            className="text-sm text-gray-500"
                            data-oid="86uqvok"
                          >
                            Tasa Efectiva Anterior
                          </span>
                          <span className="font-medium" data-oid="g.84d9o">
                            26.8%
                          </span>
                        </div>
                        <div
                          className="flex justify-between items-center mb-2"
                          data-oid="bcuibcf"
                        >
                          <span
                            className="text-sm text-gray-500"
                            data-oid="d8gw.s9"
                          >
                            Variación
                          </span>
                          <span
                            className="font-medium text-green-500"
                            data-oid="3ib8sia"
                          >
                            -2.3%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div data-oid="874677k">
                      <h3 className="font-medium mb-3" data-oid="akcw6ql">
                        Próximas Obligaciones
                      </h3>
                      <div
                        className="p-4 rounded-lg bg-white/10 border border-gray-200/10"
                        data-oid="6hj2hcw"
                      >
                        <div className="space-y-3" data-oid="9cz2t5w">
                          <div
                            className="flex justify-between items-center"
                            data-oid="-xz6sna"
                          >
                            <span className="text-sm" data-oid="d3nn816">
                              DIOT
                            </span>
                            <span
                              className="text-xs text-amber-500"
                              data-oid="x2oz92o"
                            >
                              17/04/2025
                            </span>
                          </div>
                          <div
                            className="flex justify-between items-center"
                            data-oid="6xm9js:"
                          >
                            <span className="text-sm" data-oid="lmk:svp">
                              Nómina
                            </span>
                            <span
                              className="text-xs text-amber-500"
                              data-oid="h.5vq3q"
                            >
                              18/04/2025
                            </span>
                          </div>
                          <div
                            className="flex justify-between items-center"
                            data-oid="75ngfwr"
                          >
                            <span className="text-sm" data-oid="zco.vp9">
                              ISR Definitivo
                            </span>
                            <span className="text-xs" data-oid="apda6sx">
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
