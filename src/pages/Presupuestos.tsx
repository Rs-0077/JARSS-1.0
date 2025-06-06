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
    <MainLayout data-oid=".t7_3x0">
      <div className="space-y-4" data-oid="rwq_8xy">
        <div className="flex items-center justify-between" data-oid="n8xp4xb">
          <h1 className="text-2xl font-bold" data-oid="opc8h7k">
            Control Presupuestario
          </h1>
          <Button className="gap-1" data-oid="_-u3x66">
            <Plus className="h-4 w-4" data-oid="mkpyq7q" />
            <span data-oid="3u_qu2r">Nuevo Presupuesto</span>
          </Button>
        </div>

        <BudgetSummary data-oid="de:tm_x" />

        <ExecutionSummary data-oid=":-v01-9" />

        <BudgetTabs data-oid="jjsd27m" />
      </div>
    </MainLayout>
  );
};

export default Presupuestos;
