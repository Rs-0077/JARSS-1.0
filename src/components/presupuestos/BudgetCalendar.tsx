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
    <Card className="glass-morphism" data-oid="3d.d8nh">
      <CardHeader data-oid="shy-g15">
        <CardTitle data-oid="cvap-ja">Calendario Presupuestario</CardTitle>
        <CardDescription data-oid="zcjvqks">
          Fechas importantes para la gestión presupuestaria
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="_mq5l5v">
        <div className="space-y-4" data-oid="cxe-bmy">
          <div
            className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
            data-oid="f5g2lyh"
          >
            <div
              className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4"
              data-oid="jvcxut6"
            >
              <Calendar className="h-6 w-6 text-blue-600" data-oid="vtxru1y" />
            </div>
            <div className="flex-1" data-oid="4tyt-q7">
              <div
                className="flex justify-between items-center mb-1"
                data-oid="gk_qgnc"
              >
                <h3 className="font-semibold" data-oid="gj.46d6">
                  Cierre del Periodo Actual
                </h3>
                <span
                  className="text-sm font-medium text-blue-600"
                  data-oid="0m-7x1u"
                >
                  15 días restantes
                </span>
              </div>
              <p className="text-sm text-gray-500" data-oid="qwqyon9">
                Fecha límite: 30/06/2025
              </p>
              <Progress value={50} className="h-2 mt-2" data-oid="v9ub0nx" />
            </div>
          </div>

          <div
            className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
            data-oid="vkgbrmt"
          >
            <div
              className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4"
              data-oid="__vexvf"
            >
              <Calendar className="h-6 w-6 text-green-600" data-oid="xk8atao" />
            </div>
            <div className="flex-1" data-oid="dcfk_g_">
              <div
                className="flex justify-between items-center mb-1"
                data-oid="4eqmarj"
              >
                <h3 className="font-semibold" data-oid="4dk:i9_">
                  Planificación 3er Trimestre
                </h3>
                <span
                  className="text-sm font-medium text-green-600"
                  data-oid="141-_uu"
                >
                  45 días restantes
                </span>
              </div>
              <p className="text-sm text-gray-500" data-oid="mhm_85j">
                Fecha límite: 31/07/2025
              </p>
              <Progress value={25} className="h-2 mt-2" data-oid="swt774c" />
            </div>
          </div>

          <div
            className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
            data-oid="f8pqd:5"
          >
            <div
              className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4"
              data-oid="y8:cm49"
            >
              <Calendar className="h-6 w-6 text-amber-600" data-oid="9l4i0ty" />
            </div>
            <div className="flex-1" data-oid="5edpt4l">
              <div
                className="flex justify-between items-center mb-1"
                data-oid="kufu0qt"
              >
                <h3 className="font-semibold" data-oid="yk_7v9v">
                  Revisión Semestral
                </h3>
                <span
                  className="text-sm font-medium text-amber-600"
                  data-oid="0vi0nkd"
                >
                  20 días restantes
                </span>
              </div>
              <p className="text-sm text-gray-500" data-oid="rck7ub4">
                Fecha límite: 05/07/2025
              </p>
              <Progress value={30} className="h-2 mt-2" data-oid="ii0tuol" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
