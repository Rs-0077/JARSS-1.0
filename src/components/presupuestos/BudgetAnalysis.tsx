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
    <Card className="glass-morphism" data-oid="8xr6-ui">
      <CardHeader data-oid="x_gmmd_">
        <CardTitle data-oid="c3cn:28">Análisis de Variaciones</CardTitle>
        <CardDescription data-oid="b:4q-am">
          Identifique desviaciones y sus causas
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="6vnn4.g">
        <div className="space-y-6" data-oid="v13k_50">
          <div
            className="bg-red-50/10 p-4 rounded-lg border border-red-200/20"
            data-oid="i-.s3is"
          >
            <div className="flex items-center" data-oid="4eqtl4i">
              <AlertTriangle
                className="h-5 w-5 text-red-500 mr-2"
                data-oid="21j-zc:"
              />

              <h3 className="font-medium text-red-700" data-oid="jr6es:y">
                Alerta de Desviación Crítica
              </h3>
            </div>
            <p className="text-sm text-red-600 mt-1" data-oid="xrgexh2">
              El departamento de Marketing ha superado el 80% de su presupuesto
              trimestral a mitad del periodo.
            </p>

            <div className="mt-3" data-oid="6uptcr2">
              <h4
                className="text-sm font-medium text-red-700"
                data-oid="z74f:jm"
              >
                Análisis de Causas:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-red-600 mt-1"
                data-oid="7r:-av_"
              >
                <li data-oid="crk:s7-">
                  Campaña publicitaria no planificada ($15,000)
                </li>
                <li data-oid="zf37xvm">
                  Aumento en costos de medios digitales ($5,200)
                </li>
                <li data-oid="sj6dvf3">
                  Contratación de agencia externa no presupuestada ($8,500)
                </li>
              </ul>
            </div>

            <div className="mt-3" data-oid="qf_oc05">
              <h4
                className="text-sm font-medium text-red-700"
                data-oid="k86o6a:"
              >
                Recomendaciones:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-red-600 mt-1"
                data-oid="teqd1c4"
              >
                <li data-oid="55fpv7b">Reducir gasto publicitario en Q3</li>
                <li data-oid="ovwd70t">Reasignar fondos de otras partidas</li>
                <li data-oid="shh7qsz">Revisar contrato con agencia externa</li>
              </ul>
            </div>
          </div>

          <div
            className="bg-amber-50/10 p-4 rounded-lg border border-amber-200/20"
            data-oid="1s5t28_"
          >
            <div className="flex items-center" data-oid="3tm68px">
              <AlertTriangle
                className="h-5 w-5 text-amber-500 mr-2"
                data-oid="d3s32ym"
              />

              <h3 className="font-medium text-amber-700" data-oid="a26mex.">
                Alerta de Desviación Moderada
              </h3>
            </div>
            <p className="text-sm text-amber-600 mt-1" data-oid="83g1v20">
              El proyecto de desarrollo de software está ligeramente por encima
              del presupuesto proyectado.
            </p>

            <div className="mt-3" data-oid="i3ofc9m">
              <h4
                className="text-sm font-medium text-amber-700"
                data-oid=":xx_a8p"
              >
                Análisis de Causas:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-amber-600 mt-1"
                data-oid="q8482pz"
              >
                <li data-oid="01ba09:">
                  Retrasos en entregas (aumento de horas de desarrollo)
                </li>
                <li data-oid="9.09a6g">
                  Cambios en requerimientos no contemplados
                </li>
              </ul>
            </div>

            <div className="mt-3" data-oid="ug-sxda">
              <h4
                className="text-sm font-medium text-amber-700"
                data-oid="h569u6b"
              >
                Recomendaciones:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-amber-600 mt-1"
                data-oid="4254t.0"
              >
                <li data-oid="dpxb2:d">Revisar cronograma y ajustar plazos</li>
                <li data-oid="d566i30">
                  Implementar control de cambios más estricto
                </li>
              </ul>
            </div>
          </div>

          <div
            className="bg-green-50/10 p-4 rounded-lg border border-green-200/20"
            data-oid="dgv9w.u"
          >
            <div className="flex items-center" data-oid="twz4kn8">
              <PieChart
                className="h-5 w-5 text-green-500 mr-2"
                data-oid="7j3q_z_"
              />

              <h3 className="font-medium text-green-700" data-oid="67b7kxu">
                Optimización Identificada
              </h3>
            </div>
            <p className="text-sm text-green-600 mt-1" data-oid="vxedqo7">
              El departamento de Administración está significativamente por
              debajo del presupuesto proyectado.
            </p>

            <div className="mt-3" data-oid="wjzhq:c">
              <h4
                className="text-sm font-medium text-green-700"
                data-oid="5:1m5g."
              >
                Análisis de Causas:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-green-600 mt-1"
                data-oid="ot0c4.l"
              >
                <li data-oid="aj2p6i3">
                  Digitalización de procesos ha reducido costos operativos
                </li>
                <li data-oid="u1:7_g1">
                  Renegociación de contratos con proveedores
                </li>
              </ul>
            </div>

            <div className="mt-3" data-oid="nj6fket">
              <h4
                className="text-sm font-medium text-green-700"
                data-oid="2qo1xn5"
              >
                Recomendaciones:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-green-600 mt-1"
                data-oid=".kfjbgi"
              >
                <li data-oid="e.f:r95">
                  Reasignar fondos a departamentos con necesidades
                </li>
                <li data-oid=":yhdiov">
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
