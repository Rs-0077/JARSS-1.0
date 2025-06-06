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
    <MainLayout data-oid="f9d_001">
      <div className="space-y-4" data-oid="94ny3y5">
        <div className="flex items-center justify-between" data-oid="7lc9.pa">
          <h1 className="text-2xl font-bold" data-oid="f42qzv4">
            Control Presupuestario
          </h1>
          <Button className="gap-1" data-oid=":q:qczv">
            <Plus className="h-4 w-4" data-oid="6vmk9q_" />
            <span data-oid=":3w20xi">Nuevo Presupuesto</span>
          </Button>
        </div>

        <BudgetSummary data-oid="xwk9kpn" />

        <ExecutionSummary data-oid="8g-_ywg" />

        <BudgetTabs data-oid="woawe-t" />
      </div>
    </MainLayout>
  );
};

export default Presupuestos;
