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
    <Card className="glass-morphism" data-oid="box50zx">
      <CardHeader
        className="flex flex-row items-center justify-between pb-2"
        data-oid="k3zjvym"
      >
        <div data-oid="9rbm1m2">
          <CardTitle className="text-xl" data-oid="-t36h67">
            Recordatorios
          </CardTitle>
          <CardDescription data-oid="2bj2wjr">
            Tareas pendientes
          </CardDescription>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-8 gap-1 rounded-full bg-white/50 hover:bg-white/70"
          data-oid="847p128"
        >
          <Plus className="h-3.5 w-3.5" data-oid="ri954fn" />
          <span data-oid=":1v952:">Añadir</span>
        </Button>
      </CardHeader>
      <CardContent data-oid="oow6oz.">
        <div className="space-y-2" data-oid="yurkzgk">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="flex items-start gap-3 rounded-md border border-white/30 bg-white/30 backdrop-blur-sm p-3 hover:bg-white/50 transition-colors"
              data-oid="p7bq65w"
            >
              <Button
                size="sm"
                variant="outline"
                className="mt-0.5 h-5 w-5 rounded-full p-0 text-contable-primary bg-white/50"
                data-oid="9w7.-ak"
              >
                <Check className="h-3 w-3" data-oid="v5bth8i" />
                <span className="sr-only" data-oid=":iez3nj">
                  Marcar como completado
                </span>
              </Button>
              <div className="grid gap-1" data-oid="4ackwnd">
                <p
                  className="text-sm font-medium leading-none"
                  data-oid="e_dgfkv"
                >
                  {reminder.title}
                </p>
                <div className="flex items-center gap-2" data-oid="100ll88">
                  <div
                    className="flex items-center gap-1 text-xs text-gray-500"
                    data-oid="f3fl9r7"
                  >
                    <Clock className="h-3 w-3" data-oid="sxgts.-" />
                    <span data-oid="kovc2j3">{reminder.dueDate}</span>
                  </div>
                  <div
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      reminder.priority === "alta"
                        ? "bg-red-100 text-red-800"
                        : reminder.priority === "media"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                    }`}
                    data-oid="4prhrw0"
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
