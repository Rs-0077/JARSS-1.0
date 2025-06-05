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
    <Card className="glass-morphism" data-oid=".q6b5-u">
      <CardHeader data-oid="w2waxyf">
        <CardTitle data-oid="onxx2gx">Análisis de Variaciones</CardTitle>
        <CardDescription data-oid="f09472w">
          Identifique desviaciones y sus causas
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="ufd3t1m">
        <div className="space-y-6" data-oid=":5npvp-">
          <div
            className="bg-red-50/10 p-4 rounded-lg border border-red-200/20"
            data-oid="i.ut2gr"
          >
            <div className="flex items-center" data-oid="h0.so4:">
              <AlertTriangle
                className="h-5 w-5 text-red-500 mr-2"
                data-oid=".myalyt"
              />

              <h3 className="font-medium text-red-700" data-oid="rhpmi9z">
                Alerta de Desviación Crítica
              </h3>
            </div>
            <p className="text-sm text-red-600 mt-1" data-oid="lh:ga.j">
              El departamento de Marketing ha superado el 80% de su presupuesto
              trimestral a mitad del periodo.
            </p>

            <div className="mt-3" data-oid="z5hppp-">
              <h4
                className="text-sm font-medium text-red-700"
                data-oid="i0_:5i0"
              >
                Análisis de Causas:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-red-600 mt-1"
                data-oid="rq.c2i2"
              >
                <li data-oid="ag9plj_">
                  Campaña publicitaria no planificada ($15,000)
                </li>
                <li data-oid="0oi9_q0">
                  Aumento en costos de medios digitales ($5,200)
                </li>
                <li data-oid="dw97x83">
                  Contratación de agencia externa no presupuestada ($8,500)
                </li>
              </ul>
            </div>

            <div className="mt-3" data-oid="hlkkalb">
              <h4
                className="text-sm font-medium text-red-700"
                data-oid="hmbu:ag"
              >
                Recomendaciones:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-red-600 mt-1"
                data-oid="o621xdn"
              >
                <li data-oid="5zlxdbq">Reducir gasto publicitario en Q3</li>
                <li data-oid="_ly:ul5">Reasignar fondos de otras partidas</li>
                <li data-oid="_tbq53d">Revisar contrato con agencia externa</li>
              </ul>
            </div>
          </div>

          <div
            className="bg-amber-50/10 p-4 rounded-lg border border-amber-200/20"
            data-oid="r1h0:l4"
          >
            <div className="flex items-center" data-oid="ozcpa_q">
              <AlertTriangle
                className="h-5 w-5 text-amber-500 mr-2"
                data-oid="djkk2kv"
              />

              <h3 className="font-medium text-amber-700" data-oid="xnd..b2">
                Alerta de Desviación Moderada
              </h3>
            </div>
            <p className="text-sm text-amber-600 mt-1" data-oid="lhfdlyz">
              El proyecto de desarrollo de software está ligeramente por encima
              del presupuesto proyectado.
            </p>

            <div className="mt-3" data-oid="z4t-c3z">
              <h4
                className="text-sm font-medium text-amber-700"
                data-oid="k0xo_19"
              >
                Análisis de Causas:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-amber-600 mt-1"
                data-oid="2cqdubf"
              >
                <li data-oid="hzihdh8">
                  Retrasos en entregas (aumento de horas de desarrollo)
                </li>
                <li data-oid="u0i0x32">
                  Cambios en requerimientos no contemplados
                </li>
              </ul>
            </div>

            <div className="mt-3" data-oid="l2o2bb.">
              <h4
                className="text-sm font-medium text-amber-700"
                data-oid="sfrl7uc"
              >
                Recomendaciones:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-amber-600 mt-1"
                data-oid="_9s9l43"
              >
                <li data-oid="pf7fzpm">Revisar cronograma y ajustar plazos</li>
                <li data-oid="we::w7l">
                  Implementar control de cambios más estricto
                </li>
              </ul>
            </div>
          </div>

          <div
            className="bg-green-50/10 p-4 rounded-lg border border-green-200/20"
            data-oid="96-l1z6"
          >
            <div className="flex items-center" data-oid="fio24ps">
              <PieChart
                className="h-5 w-5 text-green-500 mr-2"
                data-oid="irnb37f"
              />

              <h3 className="font-medium text-green-700" data-oid="jt9haqm">
                Optimización Identificada
              </h3>
            </div>
            <p className="text-sm text-green-600 mt-1" data-oid="yv81om7">
              El departamento de Administración está significativamente por
              debajo del presupuesto proyectado.
            </p>

            <div className="mt-3" data-oid="zmucd7y">
              <h4
                className="text-sm font-medium text-green-700"
                data-oid="n5:ucai"
              >
                Análisis de Causas:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-green-600 mt-1"
                data-oid="t:t6ca-"
              >
                <li data-oid="s3uvv0f">
                  Digitalización de procesos ha reducido costos operativos
                </li>
                <li data-oid="u8h5lm2">
                  Renegociación de contratos con proveedores
                </li>
              </ul>
            </div>

            <div className="mt-3" data-oid="5-o8esn">
              <h4
                className="text-sm font-medium text-green-700"
                data-oid="sz5rzu3"
              >
                Recomendaciones:
              </h4>
              <ul
                className="list-disc list-inside text-sm text-green-600 mt-1"
                data-oid="287w-1p"
              >
                <li data-oid="dp37v:l">
                  Reasignar fondos a departamentos con necesidades
                </li>
                <li data-oid="p8p6t08">
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
