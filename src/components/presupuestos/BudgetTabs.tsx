import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BudgetCalendar } from "./BudgetCalendar";
import { BudgetForm } from "./BudgetForm";
import { BudgetAnalysis } from "./BudgetAnalysis";

export const BudgetTabs = () => {
  return (
    <Tabs defaultValue="seguimiento" data-oid="r0y-22z">
      <TabsList className="grid w-full grid-cols-3 max-w-md" data-oid="z24b6..">
        <TabsTrigger value="seguimiento" data-oid="84rrxtj">
          Seguimiento
        </TabsTrigger>
        <TabsTrigger value="creacion" data-oid="2jedz0t">
          Creación
        </TabsTrigger>
        <TabsTrigger value="analisis" data-oid="yqt5i.p">
          Análisis
        </TabsTrigger>
      </TabsList>

      <TabsContent value="seguimiento" data-oid="2-.ylf:">
        <BudgetCalendar data-oid="fnlmqp3" />
      </TabsContent>

      <TabsContent value="creacion" data-oid="1tdi0eq">
        <BudgetForm data-oid="-.k49os" />
      </TabsContent>

      <TabsContent value="analisis" data-oid="0frje80">
        <BudgetAnalysis data-oid="qutpj-6" />
      </TabsContent>
    </Tabs>
  );
};
