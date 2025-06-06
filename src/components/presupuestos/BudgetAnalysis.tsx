import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AlertTriangle, PieChart } from "lucide-react";

export const BudgetAnalysis = () => {
  return (
    <Card className="glass-morphism" data-oid="6map_j7">
      <CardHeader data-oid="e:kehqk">
        <CardTitle data-oid="qt2xwtf">Análisis de Variaciones</CardTitle>
        <CardDescription data-oid="_xd22qr">
          Identifique desviaciones y sus causas
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="d5nus2.">
        <div className="space-y-6" data-oid="_eh-yhy">
          <div
            className="bg-red-50/10 p-4 rounded-lg border border-red-200/20"
            data-oid="vtyo80e"
          >
            <div className="flex items-center" data-oid="aw10u6:">
              <AlertTriangle
                className="h-5 w-5 text-red-500 mr-2"
                data-oid="ia6t-7x"
              />

              <h3 className="font-medium text-red-700" data-oid="-he5ec8">
                Alerta de Desviación Crítica
              </h3>
            </div>
            <p className="text-sm text-red-600 mt-1" data-oid="qxhyoj6">
              El departamento de Marketing ha superado el 80% de su presupuesto
              trimestral a mitad del periodo.
            </p>

            <div className="mt-3" data-oid="nmtahiz">
              <h4
                className="text-sm font-medium text-red-700"
                data-oid="_7ew.0g"
              >
                Análisis de Causas:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-red-600 mt-1"
                data-oid="xb0.knz"
              >
                <li data-oid="1.nz28o">
                  Campaña publicitaria no planificada ($15,000)
                </li>
                <li data-oid="99zaa4h">
                  Aumento en costos de medios digitales ($5,200)
                </li>
                <li data-oid="-25qn6u">
                  Contratación de agencia externa no presupuestada ($8,500)
                </li>
              </ul>
            </div>

            <div className="mt-3" data-oid="oa8agg:">
              <h4
                className="text-sm font-medium text-red-700"
                data-oid="_1el6:o"
              >
                Recomendaciones:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-red-600 mt-1"
                data-oid="0s12s6k"
              >
                <li data-oid="50wgm94">Reducir gasto publicitario en Q3</li>
                <li data-oid="nn81efr">Reasignar fondos de otras partidas</li>
                <li data-oid="c0uixdh">Revisar contrato con agencia externa</li>
              </ul>
            </div>
          </div>

          <div
            className="bg-amber-50/10 p-4 rounded-lg border border-amber-200/20"
            data-oid="n7:hnvy"
          >
            <div className="flex items-center" data-oid="i7_vjsz">
              <AlertTriangle
                className="h-5 w-5 text-amber-500 mr-2"
                data-oid="e85tr-e"
              />

              <h3 className="font-medium text-amber-700" data-oid="2onxt:3">
                Alerta de Desviación Moderada
              </h3>
            </div>
            <p className="text-sm text-amber-600 mt-1" data-oid="647h3cv">
              El proyecto de desarrollo de software está ligeramente por encima
              del presupuesto proyectado.
            </p>

            <div className="mt-3" data-oid="pih0zaw">
              <h4
                className="text-sm font-medium text-amber-700"
                data-oid="8_6:fth"
              >
                Análisis de Causas:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-amber-600 mt-1"
                data-oid="_.1y6:q"
              >
                <li data-oid="op_g44k">
                  Retrasos en entregas (aumento de horas de desarrollo)
                </li>
                <li data-oid="xh8mqfh">
                  Cambios en requerimientos no contemplados
                </li>
              </ul>
            </div>

            <div className="mt-3" data-oid="lzo_onb">
              <h4
                className="text-sm font-medium text-amber-700"
                data-oid="w_:bwop"
              >
                Recomendaciones:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-amber-600 mt-1"
                data-oid="q513kk6"
              >
                <li data-oid="zh5vo14">Revisar cronograma y ajustar plazos</li>
                <li data-oid="figjn6e">
                  Implementar control de cambios más estricto
                </li>
              </ul>
            </div>
          </div>

          <div
            className="bg-green-50/10 p-4 rounded-lg border border-green-200/20"
            data-oid="hm5i05w"
          >
            <div className="flex items-center" data-oid="3ou_q4.">
              <PieChart
                className="h-5 w-5 text-green-500 mr-2"
                data-oid="h0gsm4f"
              />

              <h3 className="font-medium text-green-700" data-oid="05xaigh">
                Optimización Identificada
              </h3>
            </div>
            <p className="text-sm text-green-600 mt-1" data-oid="ib_eytt">
              El departamento de Administración está significativamente por
              debajo del presupuesto proyectado.
            </p>

            <div className="mt-3" data-oid="_8rt3_7">
              <h4
                className="text-sm font-medium text-green-700"
                data-oid="mo0s-in"
              >
                Análisis de Causas:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-green-600 mt-1"
                data-oid="n-yzh53"
              >
                <li data-oid="ppy6vij">
                  Digitalización de procesos ha reducido costos operativos
                </li>
                <li data-oid="dcq0c5k">
                  Renegociación de contratos con proveedores
                </li>
              </ul>
            </div>

            <div className="mt-3" data-oid="g.4bb9j">
              <h4
                className="text-sm font-medium text-green-700"
                data-oid="jx72qn4"
              >
                Recomendaciones:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-green-600 mt-1"
                data-oid="m-9jzit"
              >
                <li data-oid="z4._069">
                  Reasignar fondos a departamentos con necesidades
                </li>
                <li data-oid="n:yhbhx">
                  Documentar prácticas eficientes para replicar en otros
                  departamentos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
