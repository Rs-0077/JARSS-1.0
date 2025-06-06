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
    <Card className="glass-morphism" data-oid="305-x_u">
      <CardHeader
        className="flex flex-row items-center justify-between space-y-0 pb-2"
        data-oid="qg5.5bt"
      >
        <div data-oid=".az5nb_">
          <CardTitle data-oid="eykkex_">
            Resumen de Ejecución Presupuestaria
          </CardTitle>
          <CardDescription data-oid="02xc4v.">
            Seguimiento en tiempo real del gasto actual vs. presupuesto
          </CardDescription>
        </div>
        <Select
          value={selectedPeriod}
          onValueChange={setSelectedPeriod}
          data-oid="qk:ir6o"
        >
          <SelectTrigger className="w-[180px]" data-oid="nzipajz">
            <SelectValue placeholder="Seleccionar período" data-oid="7mwa0gl" />
          </SelectTrigger>
          <SelectContent data-oid="24f_yi9">
            <SelectItem value="2025-Q1" data-oid="374j1_n">
              1er Trimestre 2025
            </SelectItem>
            <SelectItem value="2025-Q2" data-oid="8mu-vbx">
              2do Trimestre 2025
            </SelectItem>
            <SelectItem value="2025-Q3" data-oid="qcu0zge">
              3er Trimestre 2025
            </SelectItem>
            <SelectItem value="2025-Q4" data-oid="9re4b:8">
              4to Trimestre 2025
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent data-oid="mkw4a-y">
        <div className="space-y-6" data-oid="r:.vw_a">
          <div className="space-y-3" data-oid="-ygpn9q">
            <div
              className="flex justify-between items-center"
              data-oid="7cgmq7z"
            >
              <div data-oid="-0360co">
                <h3 className="font-medium" data-oid="szec8nc">
                  Departamento de Marketing
                </h3>
                <p className="text-sm text-gray-500" data-oid="fac4k0k">
                  Presupuesto: $65,000.00
                </p>
              </div>
              <div className="text-right" data-oid=":yu-p9q">
                <p className="font-medium" data-oid="fzl7mv8">
                  $52,780.00
                </p>
                <p className="text-sm text-amber-500" data-oid="1cmw_-f">
                  81.2% utilizado
                </p>
              </div>
            </div>
            <Progress value={81.2} className="h-2" data-oid="-slf8cr" />
          </div>

          <div className="space-y-3" data-oid=":99_fsk">
            <div
              className="flex justify-between items-center"
              data-oid="8t5kbgv"
            >
              <div data-oid="9armvov">
                <h3 className="font-medium" data-oid=":rhevyi">
                  Departamento de Tecnología
                </h3>
                <p className="text-sm text-gray-500" data-oid="v88dovc">
                  Presupuesto: $85,000.00
                </p>
              </div>
              <div className="text-right" data-oid="1on6pqr">
                <p className="font-medium" data-oid="1_h4bqx">
                  $48,450.00
                </p>
                <p className="text-sm text-green-500" data-oid=".3-39a2">
                  57.0% utilizado
                </p>
              </div>
            </div>
            <Progress value={57} className="h-2" data-oid="g5:6wwp" />
          </div>

          <div className="space-y-3" data-oid="8553qzu">
            <div
              className="flex justify-between items-center"
              data-oid="btchm_o"
            >
              <div data-oid="9ihu9.h">
                <h3 className="font-medium" data-oid="xmp-62r">
                  Departamento de Ventas
                </h3>
                <p className="text-sm text-gray-500" data-oid="in3zqfp">
                  Presupuesto: $55,000.00
                </p>
              </div>
              <div className="text-right" data-oid="je2uajb">
                <p className="font-medium" data-oid="c87z3ku">
                  $25,450.00
                </p>
                <p className="text-sm text-green-500" data-oid="tbv3izs">
                  46.3% utilizado
                </p>
              </div>
            </div>
            <Progress value={46.3} className="h-2" data-oid="qtuzs:6" />
          </div>

          <div className="space-y-3" data-oid="84sup1:">
            <div
              className="flex justify-between items-center"
              data-oid="ch6bwfs"
            >
              <div data-oid="u:l59s:">
                <h3 className="font-medium" data-oid="9efy9h1">
                  Administración y Finanzas
                </h3>
                <p className="text-sm text-gray-500" data-oid="-l1nlbj">
                  Presupuesto: $43,500.00
                </p>
              </div>
              <div className="text-right" data-oid="hb4a_7w">
                <p className="font-medium" data-oid="tu0o1kv">
                  $15,695.00
                </p>
                <p className="text-sm text-green-500" data-oid="uxh:8uz">
                  36.1% utilizado
                </p>
              </div>
            </div>
            <Progress value={36.1} className="h-2" data-oid="ta-37ou" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
