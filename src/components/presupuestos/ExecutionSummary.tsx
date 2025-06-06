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
    <Card className="glass-morphism" data-oid="2.3g8-e">
      <CardHeader
        className="flex flex-row items-center justify-between space-y-0 pb-2"
        data-oid="q.lj..q"
      >
        <div data-oid="lzkm-s5">
          <CardTitle data-oid="-t-v-sr">
            Resumen de Ejecución Presupuestaria
          </CardTitle>
          <CardDescription data-oid="wpdvtg0">
            Seguimiento en tiempo real del gasto actual vs. presupuesto
          </CardDescription>
        </div>
        <Select
          value={selectedPeriod}
          onValueChange={setSelectedPeriod}
          data-oid="_k7jwxx"
        >
          <SelectTrigger className="w-[180px]" data-oid=".p2uea3">
            <SelectValue placeholder="Seleccionar período" data-oid="kljq1ls" />
          </SelectTrigger>
          <SelectContent data-oid="8x-ol:7">
            <SelectItem value="2025-Q1" data-oid="ou7rg29">
              1er Trimestre 2025
            </SelectItem>
            <SelectItem value="2025-Q2" data-oid="bm56oj8">
              2do Trimestre 2025
            </SelectItem>
            <SelectItem value="2025-Q3" data-oid="wnvsjbf">
              3er Trimestre 2025
            </SelectItem>
            <SelectItem value="2025-Q4" data-oid="i:yvrwt">
              4to Trimestre 2025
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent data-oid="6q8g.zs">
        <div className="space-y-6" data-oid="o0q_8n1">
          <div className="space-y-3" data-oid="nzt4nww">
            <div
              className="flex justify-between items-center"
              data-oid="gd5zapk"
            >
              <div data-oid="siqhetc">
                <h3 className="font-medium" data-oid="c-6ff4z">
                  Departamento de Marketing
                </h3>
                <p className="text-sm text-gray-500" data-oid="7omzfn2">
                  Presupuesto: $65,000.00
                </p>
              </div>
              <div className="text-right" data-oid="89y5qi5">
                <p className="font-medium" data-oid=".mkl39s">
                  $52,780.00
                </p>
                <p className="text-sm text-amber-500" data-oid="ejlj6:6">
                  81.2% utilizado
                </p>
              </div>
            </div>
            <Progress value={81.2} className="h-2" data-oid="rb99c0h" />
          </div>

          <div className="space-y-3" data-oid="c1m:iiu">
            <div
              className="flex justify-between items-center"
              data-oid="ra4idua"
            >
              <div data-oid="onu2sc0">
                <h3 className="font-medium" data-oid="vwoa.8z">
                  Departamento de Tecnología
                </h3>
                <p className="text-sm text-gray-500" data-oid="jboy0vw">
                  Presupuesto: $85,000.00
                </p>
              </div>
              <div className="text-right" data-oid=".bq_9y2">
                <p className="font-medium" data-oid="o0zjzkr">
                  $48,450.00
                </p>
                <p className="text-sm text-green-500" data-oid="2i5n.w4">
                  57.0% utilizado
                </p>
              </div>
            </div>
            <Progress value={57} className="h-2" data-oid="olej8mh" />
          </div>

          <div className="space-y-3" data-oid="epq8bvo">
            <div
              className="flex justify-between items-center"
              data-oid="iwah0vb"
            >
              <div data-oid="qzf.s3_">
                <h3 className="font-medium" data-oid=":6ds3ze">
                  Departamento de Ventas
                </h3>
                <p className="text-sm text-gray-500" data-oid="v4lslt2">
                  Presupuesto: $55,000.00
                </p>
              </div>
              <div className="text-right" data-oid="mkykzmk">
                <p className="font-medium" data-oid="e8-7bic">
                  $25,450.00
                </p>
                <p className="text-sm text-green-500" data-oid="sabfl_w">
                  46.3% utilizado
                </p>
              </div>
            </div>
            <Progress value={46.3} className="h-2" data-oid="-ah7gch" />
          </div>

          <div className="space-y-3" data-oid="-pj1neg">
            <div
              className="flex justify-between items-center"
              data-oid="-6i7l8j"
            >
              <div data-oid=".h0dj59">
                <h3 className="font-medium" data-oid="5uwi:55">
                  Administración y Finanzas
                </h3>
                <p className="text-sm text-gray-500" data-oid="e-lor2g">
                  Presupuesto: $43,500.00
                </p>
              </div>
              <div className="text-right" data-oid="46c:gg_">
                <p className="font-medium" data-oid="s4jtnrd">
                  $15,695.00
                </p>
                <p className="text-sm text-green-500" data-oid="o2bl5-x">
                  36.1% utilizado
                </p>
              </div>
            </div>
            <Progress value={36.1} className="h-2" data-oid="xb-_.r:" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
