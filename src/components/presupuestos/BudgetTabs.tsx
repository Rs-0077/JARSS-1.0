import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BudgetCalendar } from "./BudgetCalendar";
import { BudgetForm } from "./BudgetForm";
import { BudgetAnalysis } from "./BudgetAnalysis";

export const BudgetTabs = () => {
  return (
    <Tabs defaultValue="seguimiento" data-oid="1x87fbj">
      <TabsList className="grid w-full grid-cols-3 max-w-md" data-oid="6e686h-">
        <TabsTrigger value="seguimiento" data-oid="dx0x0pb">
          Seguimiento
        </TabsTrigger>
        <TabsTrigger value="creacion" data-oid="_aa9iq:">
          Creación
        </TabsTrigger>
        <TabsTrigger value="analisis" data-oid="s9q2h.o">
          Análisis
        </TabsTrigger>
      </TabsList>

      <TabsContent value="seguimiento" data-oid="vtvb68f">
        <BudgetCalendar data-oid="x-dcc.p" />
      </TabsContent>

      <TabsContent value="creacion" data-oid="zau-kxo">
        <BudgetForm data-oid="4c7emeo" />
      </TabsContent>

      <TabsContent value="analisis" data-oid="ij:hqss">
        <BudgetAnalysis data-oid="z254lre" />
      </TabsContent>
    </Tabs>
  );
};
