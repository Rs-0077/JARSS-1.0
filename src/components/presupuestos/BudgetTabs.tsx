
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BudgetCalendar } from "./BudgetCalendar";
import { BudgetForm } from "./BudgetForm";
import { BudgetAnalysis } from "./BudgetAnalysis";

export const BudgetTabs = () => {
  return (
    <Tabs defaultValue="seguimiento">
      <TabsList className="grid w-full grid-cols-3 max-w-md">
        <TabsTrigger value="seguimiento">Seguimiento</TabsTrigger>
        <TabsTrigger value="creacion">Creación</TabsTrigger>
        <TabsTrigger value="analisis">Análisis</TabsTrigger>
      </TabsList>
      
      <TabsContent value="seguimiento">
        <BudgetCalendar />
      </TabsContent>
      
      <TabsContent value="creacion">
        <BudgetForm />
      </TabsContent>
      
      <TabsContent value="analisis">
        <BudgetAnalysis />
      </TabsContent>
    </Tabs>
  );
};
