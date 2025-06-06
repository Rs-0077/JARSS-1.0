import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

export const BudgetForm = () => {
  const handleCreateBudget = () => {
    toast({
      title: "Presupuesto creado",
      description: "El nuevo presupuesto ha sido creado exitosamente",
    });
  };

  return (
    <Card className="glass-morphism" data-oid="erygo0a">
      <CardHeader data-oid="2-.gkcc">
        <CardTitle data-oid="vx49zk9">Crear Nuevo Presupuesto</CardTitle>
        <CardDescription data-oid="ihx6e_j">
          Defina los parámetros para el nuevo presupuesto
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="y7_xw4s">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateBudget();
          }}
          data-oid="m97by6f"
        >
          <div className="grid md:grid-cols-2 gap-4" data-oid="7k_c2gl">
            <div className="space-y-2" data-oid="v85xz4w">
              <Label htmlFor="budgetName" data-oid="bl_7y-w">
                Nombre del Presupuesto
              </Label>
              <Input
                id="budgetName"
                placeholder="Ej. Presupuesto Q3 2025"
                data-oid="i856qcn"
              />
            </div>

            <div className="space-y-2" data-oid="ta81n2:">
              <Label htmlFor="budgetType" data-oid=".ek5gwq">
                Tipo de Presupuesto
              </Label>
              <Select defaultValue="departamento" data-oid="f-t8zpk">
                <SelectTrigger id="budgetType" data-oid="ot-32go">
                  <SelectValue
                    placeholder="Seleccione tipo"
                    data-oid="uauzr_5"
                  />
                </SelectTrigger>
                <SelectContent data-oid="..v.ioy">
                  <SelectItem value="departamento" data-oid="4sr0:9l">
                    Por Departamento
                  </SelectItem>
                  <SelectItem value="proyecto" data-oid="r8:aop3">
                    Por Proyecto
                  </SelectItem>
                  <SelectItem value="trimestral" data-oid="gu7gtoc">
                    Trimestral
                  </SelectItem>
                  <SelectItem value="anual" data-oid="6nxk6o7">
                    Anual
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2" data-oid="1nidqgp">
              <Label htmlFor="startDate" data-oid="lu.8i31">
                Fecha de Inicio
              </Label>
              <Input id="startDate" type="date" data-oid="x3x:f0f" />
            </div>

            <div className="space-y-2" data-oid=":wczcl4">
              <Label htmlFor="endDate" data-oid="qcx-p0-">
                Fecha de Finalización
              </Label>
              <Input id="endDate" type="date" data-oid="zvfz-vx" />
            </div>

            <div className="space-y-2" data-oid="a-p.c4n">
              <Label htmlFor="totalAmount" data-oid="yxw-sv-">
                Monto Total
              </Label>
              <Input
                id="totalAmount"
                placeholder="0.00"
                type="number"
                data-oid="if_ey_q"
              />
            </div>

            <div className="space-y-2" data-oid="w_sbfx9">
              <Label htmlFor="currency" data-oid="5qay515">
                Moneda
              </Label>
              <Select defaultValue="MXN" data-oid="8xef_9s">
                <SelectTrigger id="currency" data-oid="v4r4y1t">
                  <SelectValue
                    placeholder="Seleccione moneda"
                    data-oid="32q0t3e"
                  />
                </SelectTrigger>
                <SelectContent data-oid=":hyqlnp">
                  <SelectItem value="MXN" data-oid="n6anrnw">
                    Peso Mexicano (MXN)
                  </SelectItem>
                  <SelectItem value="USD" data-oid="39du.5z">
                    Dólar (USD)
                  </SelectItem>
                  <SelectItem value="EUR" data-oid="0et8kkk">
                    Euro (EUR)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2" data-oid="lwm1ife">
            <Label htmlFor="description" data-oid="gej3l.r">
              Descripción
            </Label>
            <Input
              id="description"
              placeholder="Describa el propósito de este presupuesto"
              data-oid="gh2kqvc"
            />
          </div>

          <h3 className="font-medium pt-4" data-oid="leq1hbr">
            Asignación por Departamento
          </h3>

          <div className="space-y-4" data-oid="d:i_n00">
            <div className="grid md:grid-cols-2 gap-4" data-oid="c1o4nj2">
              <div className="space-y-2" data-oid="fotdy.-">
                <Label htmlFor="deptMarketing" data-oid="-eaf8gj">
                  Marketing
                </Label>
                <Input
                  id="deptMarketing"
                  placeholder="0.00"
                  type="number"
                  data-oid="2mfyk1_"
                />
              </div>

              <div className="space-y-2" data-oid="5ufgmbt">
                <Label htmlFor="deptTech" data-oid="dyckmre">
                  Tecnología
                </Label>
                <Input
                  id="deptTech"
                  placeholder="0.00"
                  type="number"
                  data-oid="q_owmr-"
                />
              </div>

              <div className="space-y-2" data-oid="hm3_4dw">
                <Label htmlFor="deptSales" data-oid="4wzy59-">
                  Ventas
                </Label>
                <Input
                  id="deptSales"
                  placeholder="0.00"
                  type="number"
                  data-oid="nixp.9q"
                />
              </div>

              <div className="space-y-2" data-oid="638u_xh">
                <Label htmlFor="deptAdmin" data-oid="8n8fjhl">
                  Administración
                </Label>
                <Input
                  id="deptAdmin"
                  placeholder="0.00"
                  type="number"
                  data-oid="8eyb7_n"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4" data-oid="34nom7m">
            <Button variant="outline" data-oid="9pi:kvd">
              Cancelar
            </Button>
            <Button type="submit" data-oid="4xfrpu:">
              Guardar Presupuesto
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
