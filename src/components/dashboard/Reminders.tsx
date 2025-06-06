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
    <Card className="glass-morphism" data-oid="z7obiwj">
      <CardHeader
        className="flex flex-row items-center justify-between pb-2"
        data-oid="rj0486y"
      >
        <div data-oid="6fgzmm2">
          <CardTitle className="text-xl" data-oid="i_xse15">
            Recordatorios
          </CardTitle>
          <CardDescription data-oid="-9piw:g">
            Tareas pendientes
          </CardDescription>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-8 gap-1 rounded-full bg-white/50 hover:bg-white/70"
          data-oid="a9ad3ng"
        >
          <Plus className="h-3.5 w-3.5" data-oid="cr9eu7r" />
          <span data-oid="rma4.z5">Añadir</span>
        </Button>
      </CardHeader>
      <CardContent data-oid="v8tdhsn">
        <div className="space-y-2" data-oid="-eisb4f">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="flex items-start gap-3 rounded-md border border-white/30 bg-white/30 backdrop-blur-sm p-3 hover:bg-white/50 transition-colors"
              data-oid="g-kmaf6"
            >
              <Button
                size="sm"
                variant="outline"
                className="mt-0.5 h-5 w-5 rounded-full p-0 text-contable-primary bg-white/50"
                data-oid="yn0lo1j"
              >
                <Check className="h-3 w-3" data-oid="5qg_rf1" />
                <span className="sr-only" data-oid="nbc2qe-">
                  Marcar como completado
                </span>
              </Button>
              <div className="grid gap-1" data-oid="3jct771">
                <p
                  className="text-sm font-medium leading-none"
                  data-oid="unu.jc."
                >
                  {reminder.title}
                </p>
                <div className="flex items-center gap-2" data-oid="tno1_ed">
                  <div
                    className="flex items-center gap-1 text-xs text-gray-500"
                    data-oid="1kqjurc"
                  >
                    <Clock className="h-3 w-3" data-oid="xtmqj0u" />
                    <span data-oid="yfhtv8-">{reminder.dueDate}</span>
                  </div>
                  <div
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      reminder.priority === "alta"
                        ? "bg-red-100 text-red-800"
                        : reminder.priority === "media"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                    }`}
                    data-oid="ad0qy8m"
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
