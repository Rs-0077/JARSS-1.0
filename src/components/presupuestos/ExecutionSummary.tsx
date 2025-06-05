import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ExecutionSummary = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("2025-Q2");

  return (
    <Card className="glass-morphism" data-oid="5ese7b5">
      <CardHeader
        className="flex flex-row items-center justify-between space-y-0 pb-2"
        data-oid="9.oiw_t"
      >
        <div data-oid="sifbb6r">
          <CardTitle data-oid="x9kjl:v">
            Resumen de Ejecución Presupuestaria
          </CardTitle>
          <CardDescription data-oid="skri8ls">
            Seguimiento en tiempo real del gasto actual vs. presupuesto
          </CardDescription>
        </div>
        <Select
          value={selectedPeriod}
          onValueChange={setSelectedPeriod}
          data-oid="fbi_qiw"
        >
          <SelectTrigger className="w-[180px]" data-oid="mqu40e4">
            <SelectValue placeholder="Seleccionar período" data-oid="o.anphm" />
          </SelectTrigger>
          <SelectContent data-oid="q8une5t">
            <SelectItem value="2025-Q1" data-oid="2vnpqa5">
              1er Trimestre 2025
            </SelectItem>
            <SelectItem value="2025-Q2" data-oid="qrffdgk">
              2do Trimestre 2025
            </SelectItem>
            <SelectItem value="2025-Q3" data-oid="an30v.b">
              3er Trimestre 2025
            </SelectItem>
            <SelectItem value="2025-Q4" data-oid="n7bi8m1">
              4to Trimestre 2025
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent data-oid="dkriu47">
        <div className="space-y-6" data-oid="pmxocjy">
          <div className="space-y-3" data-oid="u44q8e3">
            <div
              className="flex justify-between items-center"
              data-oid="39f-5mc"
            >
              <div data-oid="46fe3rh">
                <h3 className="font-medium" data-oid="0nl570z">
                  Departamento de Marketing
                </h3>
                <p className="text-sm text-gray-500" data-oid="zj93ceg">
                  Presupuesto: $65,000.00
                </p>
              </div>
              <div className="text-right" data-oid="6wgmm7c">
                <p className="font-medium" data-oid="dv:49bn">
                  $52,780.00
                </p>
                <p className="text-sm text-amber-500" data-oid=":cdv9zj">
                  81.2% utilizado
                </p>
              </div>
            </div>
            <Progress value={81.2} className="h-2" data-oid="2:2x:.p" />
          </div>

          <div className="space-y-3" data-oid="mwvds9.">
            <div
              className="flex justify-between items-center"
              data-oid="ruh6-tx"
            >
              <div data-oid="k4h07o9">
                <h3 className="font-medium" data-oid="qxe2hz4">
                  Departamento de Tecnología
                </h3>
                <p className="text-sm text-gray-500" data-oid="e2g5:8l">
                  Presupuesto: $85,000.00
                </p>
              </div>
              <div className="text-right" data-oid="._cgda5">
                <p className="font-medium" data-oid="abkx31k">
                  $48,450.00
                </p>
                <p className="text-sm text-green-500" data-oid="w:caw:w">
                  57.0% utilizado
                </p>
              </div>
            </div>
            <Progress value={57} className="h-2" data-oid="l2w5xgd" />
          </div>

          <div className="space-y-3" data-oid="q1e419w">
            <div
              className="flex justify-between items-center"
              data-oid="7hukvf5"
            >
              <div data-oid="p6_2:lv">
                <h3 className="font-medium" data-oid="0s09i_8">
                  Departamento de Ventas
                </h3>
                <p className="text-sm text-gray-500" data-oid="s9_ja8j">
                  Presupuesto: $55,000.00
                </p>
              </div>
              <div className="text-right" data-oid="0pbdtq:">
                <p className="font-medium" data-oid="3xh0ny9">
                  $25,450.00
                </p>
                <p className="text-sm text-green-500" data-oid="8b27z19">
                  46.3% utilizado
                </p>
              </div>
            </div>
            <Progress value={46.3} className="h-2" data-oid="v2pxjmq" />
          </div>

          <div className="space-y-3" data-oid="1frd1mn">
            <div
              className="flex justify-between items-center"
              data-oid="af-to1w"
            >
              <div data-oid="383ape9">
                <h3 className="font-medium" data-oid="26dwa9f">
                  Administración y Finanzas
                </h3>
                <p className="text-sm text-gray-500" data-oid="5asem3f">
                  Presupuesto: $43,500.00
                </p>
              </div>
              <div className="text-right" data-oid="r2daey:">
                <p className="font-medium" data-oid="-i.w50y">
                  $15,695.00
                </p>
                <p className="text-sm text-green-500" data-oid="6b8..bp">
                  36.1% utilizado
                </p>
              </div>
            </div>
            <Progress value={36.1} className="h-2" data-oid="yngv94n" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
