import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Clock, Plus } from "lucide-react";

// Datos de ejemplo para los recordatorios
const reminders = [
  {
    id: "1",
    title: "Conciliar cuenta bancaria",
    dueDate: "2025-04-10",
    priority: "alta",
  },
  {
    id: "2",
    title: "Revisar facturas pendientes",
    dueDate: "2025-04-08",
    priority: "media",
  },
  {
    id: "3",
    title: "Preparar declaración IVA",
    dueDate: "2025-04-15",
    priority: "alta",
  },
];

export function Reminders() {
  return (
    <Card className="glass-morphism" data-oid="6irhlie">
      <CardHeader
        className="flex flex-row items-center justify-between pb-2"
        data-oid="o65089l"
      >
        <div data-oid="7cpkr91">
          <CardTitle className="text-xl" data-oid="b9w.g1-">
            Recordatorios
          </CardTitle>
          <CardDescription data-oid="andp4m:">
            Tareas pendientes
          </CardDescription>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-8 gap-1 rounded-full bg-white/50 hover:bg-white/70"
          data-oid="873jc63"
        >
          <Plus className="h-3.5 w-3.5" data-oid="d:raj_k" />
          <span data-oid="tdnah-:">Añadir</span>
        </Button>
      </CardHeader>
      <CardContent data-oid="ken7w81">
        <div className="space-y-2" data-oid="_nx:z-p">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="flex items-start gap-3 rounded-md border border-white/30 bg-white/30 backdrop-blur-sm p-3 hover:bg-white/50 transition-colors"
              data-oid="u-bt7fl"
            >
              <Button
                size="sm"
                variant="outline"
                className="mt-0.5 h-5 w-5 rounded-full p-0 text-contable-primary bg-white/50"
                data-oid="l68vz-8"
              >
                <Check className="h-3 w-3" data-oid="8npcv2w" />
                <span className="sr-only" data-oid="tz.imt_">
                  Marcar como completado
                </span>
              </Button>
              <div className="grid gap-1" data-oid="43s:ecl">
                <p
                  className="text-sm font-medium leading-none"
                  data-oid="pyidjk7"
                >
                  {reminder.title}
                </p>
                <div className="flex items-center gap-2" data-oid="y1lapis">
                  <div
                    className="flex items-center gap-1 text-xs text-gray-500"
                    data-oid="5rgdlh9"
                  >
                    <Clock className="h-3 w-3" data-oid="6hvp5fx" />
                    <span data-oid="84y020o">{reminder.dueDate}</span>
                  </div>
                  <div
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      reminder.priority === "alta"
                        ? "bg-red-100 text-red-800"
                        : reminder.priority === "media"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                    }`}
                    data-oid="1.abk:c"
                  >
                    {reminder.priority === "alta"
                      ? "Prioridad alta"
                      : reminder.priority === "media"
                        ? "Prioridad media"
                        : "Prioridad baja"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
