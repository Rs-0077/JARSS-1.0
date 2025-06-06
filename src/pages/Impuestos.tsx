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
    <MainLayout data-oid="ersrane">
      <div className="space-y-4" data-oid="_m8:-1_">
        <h1 className="text-2xl font-bold" data-oid="b_p23o8">
          Cumplimiento Fiscal
        </h1>

        <div className="grid gap-4 md:grid-cols-3" data-oid=":hx:cbx">
          <StatCard
            title="Impuestos Pendientes"
            value="$12,450.00"
            icon={FileText}
            trend="neutral"
            trendValue="Vence el 15/04/2025"
            data-oid="gn89ekk"
          />

          <StatCard
            title="Impuestos Pagados (Año)"
            value="$45,320.00"
            icon={CheckIcon}
            trend="up"
            trendValue="+8.2% vs año anterior"
            data-oid="js1myfz"
          />

          <StatCard
            title="Próxima Declaración"
            value="IVA Mensual"
            icon={Calendar}
            trend="neutral"
            trendValue="15/04/2025"
            data-oid="_4hn83w"
          />
        </div>

        <Card className="glass-morphism" data-oid="xg.0n8c">
          <CardHeader data-oid="2-u2shv">
            <CardTitle data-oid="rpecv5q">Calendario Fiscal 2025</CardTitle>
            <CardDescription data-oid="z7eng8-">
              Fechas importantes para cumplimiento fiscal
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="xo21r_q">
            <div className="space-y-4" data-oid="i74inud">
              <div
                className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
                data-oid="b3jpvxz"
              >
                <div
                  className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4"
                  data-oid=":hj:h::"
                >
                  <Calendar
                    className="h-6 w-6 text-red-600"
                    data-oid="r__l3fb"
                  />
                </div>
                <div className="flex-1" data-oid="a_lwct8">
                  <div
                    className="flex justify-between items-center mb-1"
                    data-oid="bx_2pjg"
                  >
                    <h3 className="font-semibold" data-oid="k2er:7t">
                      Declaración Mensual de IVA
                    </h3>
                    <span
                      className="text-sm font-medium text-red-600"
                      data-oid="xhqfce8"
                    >
                      5 días restantes
                    </span>
                  </div>
                  <p className="text-sm text-gray-500" data-oid="14o7rod">
                    Fecha límite: 15/04/2025
                  </p>
                  <Progress
                    value={65}
                    className="h-2 mt-2"
                    data-oid="65sozpk"
                  />
                </div>
              </div>

              <div
                className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
                data-oid="4yooy-_"
              >
                <div
                  className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4"
                  data-oid="-2n11o_"
                >
                  <Calendar
                    className="h-6 w-6 text-amber-600"
                    data-oid="6knk3r."
                  />
                </div>
                <div className="flex-1" data-oid="xpkh2qp">
                  <div
                    className="flex justify-between items-center mb-1"
                    data-oid="9lz9dbi"
                  >
                    <h3 className="font-semibold" data-oid="a-w9_rl">
                      Retenciones de Impuesto sobre la Renta
                    </h3>
                    <span
                      className="text-sm font-medium text-amber-600"
                      data-oid="s8rtkx3"
                    >
                      12 días restantes
                    </span>
                  </div>
                  <p className="text-sm text-gray-500" data-oid="av51me3">
                    Fecha límite: 22/04/2025
                  </p>
                  <Progress
                    value={40}
                    className="h-2 mt-2"
                    data-oid="m.h9-m4"
                  />
                </div>
              </div>

              <div
                className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
                data-oid=".oouphn"
              >
                <div
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4"
                  data-oid="q:f87_n"
                >
                  <Calendar
                    className="h-6 w-6 text-blue-600"
                    data-oid="8a7mn3i"
                  />
                </div>
                <div className="flex-1" data-oid="v9l6xwm">
                  <div
                    className="flex justify-between items-center mb-1"
                    data-oid="6kzelyh"
                  >
                    <h3 className="font-semibold" data-oid="yl4rfb3">
                      Declaración de Impuestos Especiales
                    </h3>
                    <span
                      className="text-sm font-medium text-blue-600"
                      data-oid="z-20omd"
                    >
                      24 días restantes
                    </span>
                  </div>
                  <p className="text-sm text-gray-500" data-oid="r90.xwh">
                    Fecha límite: 05/05/2025
                  </p>
                  <Progress
                    value={20}
                    className="h-2 mt-2"
                    data-oid="n.z1iid"
                  />
                </div>
              </div>

              <div
                className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
                data-oid="r01bng8"
              >
                <div
                  className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4"
                  data-oid="pk_9jw5"
                >
                  <CheckIcon
                    className="h-6 w-6 text-green-600"
                    data-oid=":wsl8w-"
                  />
                </div>
                <div className="flex-1" data-oid="55diyxm">
                  <div
                    className="flex justify-between items-center mb-1"
                    data-oid="tw9t2vo"
                  >
                    <h3 className="font-semibold" data-oid="-:ljfmt">
                      Declaración Trimestral de ISR
                    </h3>
                    <span
                      className="text-sm font-medium text-green-600"
                      data-oid=".hkmsw8"
                    >
                      Completado
                    </span>
                  </div>
                  <p className="text-sm text-gray-500" data-oid="30qzum3">
                    Presentado: 15/03/2025
                  </p>
                  <Progress
                    value={100}
                    className="h-2 mt-2"
                    data-oid="v0pyxkq"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="declaraciones" data-oid="pwb6-fv">
          <TabsList
            className="grid w-full grid-cols-3 max-w-md"
            data-oid=".6wroa1"
          >
            <TabsTrigger value="declaraciones" data-oid="xsby:z1">
              Declaraciones
            </TabsTrigger>
            <TabsTrigger value="reportes" data-oid="8_xstc7">
              Reportes Fiscales
            </TabsTrigger>
            <TabsTrigger value="analisis" data-oid="w5oo91m">
              Análisis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="declaraciones" data-oid="bc_blt.">
            <Card className="glass-morphism" data-oid="ms22c7w">
              <CardHeader data-oid="ikk.qp.">
                <CardTitle data-oid="_yqpf0o">
                  Declaraciones Pendientes
                </CardTitle>
                <CardDescription data-oid="qnd2-a2">
                  Declaraciones fiscales por presentar
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="c.71v1y">
                <div className="space-y-4" data-oid="4p.l1ej">
                  <div
                    className="flex justify-between p-4 bg-white/10 rounded-lg border border-gray-200/10"
                    data-oid="6v31cqi"
                  >
                    <div data-oid="m3c3.e9">
                      <h3 className="font-medium" data-oid="t.i-x_x">
                        IVA Mensual
                      </h3>
                      <p className="text-sm text-gray-500" data-oid="ky3f15a">
                        Periodo: Marzo 2025
                      </p>
                    </div>
                    <div className="text-right" data-oid=".-_h4k9">
                      <p className="font-medium" data-oid="r2v7z8u">
                        $8,450.00
                      </p>
                      <p className="text-xs text-red-500" data-oid="mw:v276">
                        Vence: 15/04/2025
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex justify-between p-4 bg-white/10 rounded-lg border border-gray-200/10"
                    data-oid="jsh__4a"
                  >
                    <div data-oid="h.zgda.">
                      <h3 className="font-medium" data-oid="bt3c_dg">
                        Retenciones ISR
                      </h3>
                      <p className="text-sm text-gray-500" data-oid="f28wi99">
                        Periodo: Marzo 2025
                      </p>
                    </div>
                    <div className="text-right" data-oid=".p-4ia8">
                      <p className="font-medium" data-oid="3wvqa_1">
                        $4,000.00
                      </p>
                      <p className="text-xs text-amber-500" data-oid="_9ov2rk">
                        Vence: 22/04/2025
                      </p>
                    </div>
                  </div>

                  <div className="mt-4" data-oid="f-3w_li">
                    <Button className="mr-2" data-oid="dl-ppza">
                      Generar Declaración
                    </Button>
                    <Button variant="outline" data-oid="fer15_c">
                      Ver Historial
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reportes" data-oid="14a7u16">
            <Card className="glass-morphism" data-oid="t32jd5y">
              <CardHeader data-oid="7qr3u:_">
                <CardTitle data-oid="9iq1_ku">Reportes Fiscales</CardTitle>
                <CardDescription data-oid="o9synl5">
                  Informes para análisis fiscal
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="rn4j5au">
                <div className="space-y-4" data-oid="j8m4fny">
                  <div className="grid md:grid-cols-2 gap-4" data-oid="-:-_7as">
                    <div
                      className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                      data-oid="fagpnmx"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid="iij7:g7"
                      >
                        <FileText
                          className="h-5 w-5 mr-2 text-contable-primary"
                          data-oid="5tbqbwo"
                        />

                        <h3 className="font-medium" data-oid="e6gt:nz">
                          Reporte de IVA Acreditable
                        </h3>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-4"
                        data-oid="kak1hip"
                      >
                        Detalle de IVA acreditable por periodo
                      </p>
                      <Button variant="outline" size="sm" data-oid="wtp37jg">
                        Descargar
                      </Button>
                    </div>

                    <div
                      className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                      data-oid="5puak.z"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid=":51pcqu"
                      >
                        <FileText
                          className="h-5 w-5 mr-2 text-contable-primary"
                          data-oid="nw9htmb"
                        />

                        <h3 className="font-medium" data-oid="3rlihe-">
                          Reporte de IVA Trasladado
                        </h3>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-4"
                        data-oid="whn_3kv"
                      >
                        Detalle de IVA trasladado por periodo
                      </p>
                      <Button variant="outline" size="sm" data-oid="dehp_gc">
                        Descargar
                      </Button>
                    </div>

                    <div
                      className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                      data-oid=":p4uh0q"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid="qa2esaa"
                      >
                        <FileText
                          className="h-5 w-5 mr-2 text-contable-primary"
                          data-oid="ie38et2"
                        />

                        <h3 className="font-medium" data-oid="3c5z:y3">
                          Reporte de Retenciones
                        </h3>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-4"
                        data-oid="tsndvsk"
                      >
                        Retenciones de ISR e IVA
                      </p>
                      <Button variant="outline" size="sm" data-oid="pliy04g">
                        Descargar
                      </Button>
                    </div>

                    <div
                      className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale"
                      data-oid="tsppr6y"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid="ziz23mp"
                      >
                        <FileText
                          className="h-5 w-5 mr-2 text-contable-primary"
                          data-oid="006flyp"
                        />

                        <h3 className="font-medium" data-oid="62xuiow">
                          Análisis Fiscal Anual
                        </h3>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-4"
                        data-oid="2o28hlm"
                      >
                        Resumen de impuestos anuales
                      </p>
                      <Button variant="outline" size="sm" data-oid="0x.fo77">
                        Descargar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analisis" data-oid="w:oaikc">
            <Card className="glass-morphism" data-oid="hs4dg4:">
              <CardHeader data-oid="-hk4a35">
                <CardTitle data-oid="au1po39">Análisis Fiscal</CardTitle>
                <CardDescription data-oid="u0_0wao">
                  Estadísticas y tendencias fiscales
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="4181kgu">
                <div className="space-y-6" data-oid="vw9mxza">
                  <div data-oid="v7l3-mr">
                    <h3 className="font-medium mb-3" data-oid="lova663">
                      Distribución de Impuestos (2025)
                    </h3>
                    <div
                      className="h-64 bg-white/10 p-4 rounded-lg border border-gray-200/10 flex items-center justify-center"
                      data-oid="xdud5h_"
                    >
                      <div
                        className="text-center text-gray-500"
                        data-oid="9k-_w19"
                      >
                        <PieChart
                          className="h-12 w-12 mx-auto mb-3 opacity-50"
                          data-oid="8ornfg0"
                        />

                        <p data-oid="eqdm1j4">
                          Gráfico de distribución de impuestos
                        </p>
                        <p className="text-sm" data-oid="-k9god_">
                          (Datos simulados)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4" data-oid="gxnhpxd">
                    <div data-oid="32qqmu6">
                      <h3 className="font-medium mb-3" data-oid="vp8cax-">
                        Tasa Efectiva de Impuestos
                      </h3>
                      <div
                        className="p-4 rounded-lg bg-white/10 border border-gray-200/10"
                        data-oid="q43o.ur"
                      >
                        <div
                          className="flex justify-between items-center mb-2"
                          data-oid="1f2a7n9"
                        >
                          <span
                            className="text-sm text-gray-500"
                            data-oid="2q15w1p"
                          >
                            Tasa Efectiva Actual
                          </span>
                          <span className="font-medium" data-oid="c01n0s.">
                            24.5%
                          </span>
                        </div>
                        <div
                          className="flex justify-between items-center mb-2"
                          data-oid="sg-pb1z"
                        >
                          <span
                            className="text-sm text-gray-500"
                            data-oid="t.m1i_-"
                          >
                            Tasa Efectiva Anterior
                          </span>
                          <span className="font-medium" data-oid="sfoshk1">
                            26.8%
                          </span>
                        </div>
                        <div
                          className="flex justify-between items-center mb-2"
                          data-oid="r:__-vh"
                        >
                          <span
                            className="text-sm text-gray-500"
                            data-oid="wz2dw.t"
                          >
                            Variación
                          </span>
                          <span
                            className="font-medium text-green-500"
                            data-oid="xcrah6g"
                          >
                            -2.3%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div data-oid="rg13n.2">
                      <h3 className="font-medium mb-3" data-oid="23pmwn.">
                        Próximas Obligaciones
                      </h3>
                      <div
                        className="p-4 rounded-lg bg-white/10 border border-gray-200/10"
                        data-oid="g462gsw"
                      >
                        <div className="space-y-3" data-oid="w_5z.kf">
                          <div
                            className="flex justify-between items-center"
                            data-oid="_1u8:m-"
                          >
                            <span className="text-sm" data-oid="ke:4g3e">
                              DIOT
                            </span>
                            <span
                              className="text-xs text-amber-500"
                              data-oid="gidadr1"
                            >
                              17/04/2025
                            </span>
                          </div>
                          <div
                            className="flex justify-between items-center"
                            data-oid="956ni3f"
                          >
                            <span className="text-sm" data-oid="e5o:6-d">
                              Nómina
                            </span>
                            <span
                              className="text-xs text-amber-500"
                              data-oid="zodde26"
                            >
                              18/04/2025
                            </span>
                          </div>
                          <div
                            className="flex justify-between items-center"
                            data-oid="q5fokvb"
                          >
                            <span className="text-sm" data-oid="2hig2i2">
                              ISR Definitivo
                            </span>
                            <span className="text-xs" data-oid="oxh5g00">
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
