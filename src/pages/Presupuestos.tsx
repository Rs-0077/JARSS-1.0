import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BudgetSummary } from "@/components/presupuestos/BudgetSummary";
import { ExecutionSummary } from "@/components/presupuestos/ExecutionSummary";
import { BudgetTabs } from "@/components/presupuestos/BudgetTabs";

const Presupuestos = () => {
  const handleNewBudget = () => {
    // This will be handled by the form component
  };
  return (
    <MainLayout data-oid="0.5jkik">
      <div className="space-y-4" data-oid="6pq9fhi">
        <div className="flex items-center justify-between" data-oid="othnvj:">
          <h1 className="text-2xl font-bold" data-oid=":82c.z9">
            Control Presupuestario
          </h1>
          <Button className="gap-1" data-oid="f1pvc4o">
            <Plus className="h-4 w-4" data-oid="vl45qic" />
            <span data-oid="ukg:0d0">Nuevo Presupuesto</span>
          </Button>
        </div>

        <BudgetSummary data-oid="_8rqqkm" />

        <ExecutionSummary data-oid=".5ynxoc" />

        <BudgetTabs data-oid="g2qjdip" />
      </div>
    </MainLayout>
  );
};

export default Presupuestos;
