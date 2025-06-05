import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BudgetCalendar } from "./BudgetCalendar";
import { BudgetForm } from "./BudgetForm";
import { BudgetAnalysis } from "./BudgetAnalysis";

export const BudgetTabs = () => {
  return (
    <Tabs defaultValue="seguimiento" data-oid="-ve-vw_">
      <TabsList className="grid w-full grid-cols-3 max-w-md" data-oid="vls-bd5">
        <TabsTrigger value="seguimiento" data-oid="q5fjxzs">
          Seguimiento
        </TabsTrigger>
        <TabsTrigger value="creacion" data-oid="luuzbti">
          Creación
        </TabsTrigger>
        <TabsTrigger value="analisis" data-oid="3hgjv1h">
          Análisis
        </TabsTrigger>
      </TabsList>

      <TabsContent value="seguimiento" data-oid="l6gcex:">
        <BudgetCalendar data-oid="eg6v_k3" />
      </TabsContent>

      <TabsContent value="creacion" data-oid="hxyq5:.">
        <BudgetForm data-oid="ujnh2z4" />
      </TabsContent>

      <TabsContent value="analisis" data-oid="g-10cun">
        <BudgetAnalysis data-oid="r8a0hlp" />
      </TabsContent>
    </Tabs>
  );
};
