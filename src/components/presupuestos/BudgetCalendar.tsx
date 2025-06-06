import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "lucide-react";

export const BudgetCalendar = () => {
  return (
    <Card className="glass-morphism" data-oid="_ro9wji">
      <CardHeader data-oid="60clrmq">
        <CardTitle data-oid=".e8hw-l">Calendario Presupuestario</CardTitle>
        <CardDescription data-oid=".tjp59g">
          Fechas importantes para la gestión presupuestaria
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="5at::.-">
        <div className="space-y-4" data-oid="kvmpfnd">
          <div
            className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
            data-oid="6q7ayzb"
          >
            <div
              className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4"
              data-oid="o9fiz6:"
            >
              <Calendar className="h-6 w-6 text-blue-600" data-oid="r067puo" />
            </div>
            <div className="flex-1" data-oid="8pygpqo">
              <div
                className="flex justify-between items-center mb-1"
                data-oid="acg9mrf"
              >
                <h3 className="font-semibold" data-oid="f_qkn-e">
                  Cierre del Periodo Actual
                </h3>
                <span
                  className="text-sm font-medium text-blue-600"
                  data-oid="099fqn7"
                >
                  15 días restantes
                </span>
              </div>
              <p className="text-sm text-gray-500" data-oid="7xau_lj">
                Fecha límite: 30/06/2025
              </p>
              <Progress value={50} className="h-2 mt-2" data-oid="tr8w114" />
            </div>
          </div>

          <div
            className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
            data-oid="j02jhf2"
          >
            <div
              className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4"
              data-oid=".79c6b8"
            >
              <Calendar className="h-6 w-6 text-green-600" data-oid="r.be5ss" />
            </div>
            <div className="flex-1" data-oid=".2wehqv">
              <div
                className="flex justify-between items-center mb-1"
                data-oid="hjgyuyh"
              >
                <h3 className="font-semibold" data-oid="b_u4tkf">
                  Planificación 3er Trimestre
                </h3>
                <span
                  className="text-sm font-medium text-green-600"
                  data-oid=":w53b_2"
                >
                  45 días restantes
                </span>
              </div>
              <p className="text-sm text-gray-500" data-oid="3y.fszn">
                Fecha límite: 31/07/2025
              </p>
              <Progress value={25} className="h-2 mt-2" data-oid="qcp3l9v" />
            </div>
          </div>

          <div
            className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
            data-oid="3m7pnkm"
          >
            <div
              className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4"
              data-oid="mwzzfhj"
            >
              <Calendar className="h-6 w-6 text-amber-600" data-oid="978z256" />
            </div>
            <div className="flex-1" data-oid="ung6-ui">
              <div
                className="flex justify-between items-center mb-1"
                data-oid="ps40rev"
              >
                <h3 className="font-semibold" data-oid=":n0x.._">
                  Revisión Semestral
                </h3>
                <span
                  className="text-sm font-medium text-amber-600"
                  data-oid="lgq2t:9"
                >
                  20 días restantes
                </span>
              </div>
              <p className="text-sm text-gray-500" data-oid="-ma4vdn">
                Fecha límite: 05/07/2025
              </p>
              <Progress value={30} className="h-2 mt-2" data-oid="8s0_kzp" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
