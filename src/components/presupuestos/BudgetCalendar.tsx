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
    <Card className="glass-morphism" data-oid="c5ix83:">
      <CardHeader data-oid="qixhq6f">
        <CardTitle data-oid="wx.:z.l">Calendario Presupuestario</CardTitle>
        <CardDescription data-oid="ei_pagg">
          Fechas importantes para la gestión presupuestaria
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="k1hgqjr">
        <div className="space-y-4" data-oid="kqv1pao">
          <div
            className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
            data-oid="eohshod"
          >
            <div
              className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4"
              data-oid="5i:5dxc"
            >
              <Calendar className="h-6 w-6 text-blue-600" data-oid="1xlya4y" />
            </div>
            <div className="flex-1" data-oid="pt4zrln">
              <div
                className="flex justify-between items-center mb-1"
                data-oid="sr-gdq4"
              >
                <h3 className="font-semibold" data-oid="gtkpdxg">
                  Cierre del Periodo Actual
                </h3>
                <span
                  className="text-sm font-medium text-blue-600"
                  data-oid="d5ab.lb"
                >
                  15 días restantes
                </span>
              </div>
              <p className="text-sm text-gray-500" data-oid="k.tgkp-">
                Fecha límite: 30/06/2025
              </p>
              <Progress value={50} className="h-2 mt-2" data-oid="dfrgq0u" />
            </div>
          </div>

          <div
            className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
            data-oid="d9-b2gi"
          >
            <div
              className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4"
              data-oid=":21ztud"
            >
              <Calendar className="h-6 w-6 text-green-600" data-oid="8-j-q6a" />
            </div>
            <div className="flex-1" data-oid="k0l5hxe">
              <div
                className="flex justify-between items-center mb-1"
                data-oid="q22p8vf"
              >
                <h3 className="font-semibold" data-oid="j00m04c">
                  Planificación 3er Trimestre
                </h3>
                <span
                  className="text-sm font-medium text-green-600"
                  data-oid="jcsf_01"
                >
                  45 días restantes
                </span>
              </div>
              <p className="text-sm text-gray-500" data-oid="49vc:i8">
                Fecha límite: 31/07/2025
              </p>
              <Progress value={25} className="h-2 mt-2" data-oid="vl.yb76" />
            </div>
          </div>

          <div
            className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10"
            data-oid="ey6q0qh"
          >
            <div
              className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4"
              data-oid="f2hg_xs"
            >
              <Calendar className="h-6 w-6 text-amber-600" data-oid="j69njx3" />
            </div>
            <div className="flex-1" data-oid="n8neisu">
              <div
                className="flex justify-between items-center mb-1"
                data-oid="9kxgxjj"
              >
                <h3 className="font-semibold" data-oid="q-.j2..">
                  Revisión Semestral
                </h3>
                <span
                  className="text-sm font-medium text-amber-600"
                  data-oid="7jqxziu"
                >
                  20 días restantes
                </span>
              </div>
              <p className="text-sm text-gray-500" data-oid="9qrysra">
                Fecha límite: 05/07/2025
              </p>
              <Progress value={30} className="h-2 mt-2" data-oid="ccoh-25" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
