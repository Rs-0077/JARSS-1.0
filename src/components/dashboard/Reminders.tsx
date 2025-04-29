
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="glass-morphism">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl">Recordatorios</CardTitle>
          <CardDescription>Tareas pendientes</CardDescription>
        </div>
        <Button size="sm" variant="outline" className="h-8 gap-1 rounded-full bg-white/50 hover:bg-white/70">
          <Plus className="h-3.5 w-3.5" />
          <span>Añadir</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="flex items-start gap-3 rounded-md border border-white/30 bg-white/30 backdrop-blur-sm p-3 hover:bg-white/50 transition-colors"
            >
              <Button
                size="sm"
                variant="outline"
                className="mt-0.5 h-5 w-5 rounded-full p-0 text-contable-primary bg-white/50"
              >
                <Check className="h-3 w-3" />
                <span className="sr-only">Marcar como completado</span>
              </Button>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  {reminder.title}
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{reminder.dueDate}</span>
                  </div>
                  <div
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      reminder.priority === "alta"
                        ? "bg-red-100 text-red-800"
                        : reminder.priority === "media"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
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
