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
    <Card className="glass-morphism" data-oid="pje3tq_">
      <CardHeader data-oid="o:cmfra">
        <CardTitle data-oid="di31zb0">Crear Nuevo Presupuesto</CardTitle>
        <CardDescription data-oid="o1709mz">
          Defina los parámetros para el nuevo presupuesto
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="zgql3mt">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateBudget();
          }}
          data-oid="iz7k0_t"
        >
          <div className="grid md:grid-cols-2 gap-4" data-oid="x5i:bs8">
            <div className="space-y-2" data-oid="go_pwlc">
              <Label htmlFor="budgetName" data-oid="w38icxu">
                Nombre del Presupuesto
              </Label>
              <Input
                id="budgetName"
                placeholder="Ej. Presupuesto Q3 2025"
                data-oid="ei.vv5n"
              />
            </div>

            <div className="space-y-2" data-oid="39p_gm1">
              <Label htmlFor="budgetType" data-oid="7vby5yu">
                Tipo de Presupuesto
              </Label>
              <Select defaultValue="departamento" data-oid="d6rw-hp">
                <SelectTrigger id="budgetType" data-oid="xyh5:ma">
                  <SelectValue
                    placeholder="Seleccione tipo"
                    data-oid="o-9-zss"
                  />
                </SelectTrigger>
                <SelectContent data-oid="rkae4sr">
                  <SelectItem value="departamento" data-oid="ug29_x3">
                    Por Departamento
                  </SelectItem>
                  <SelectItem value="proyecto" data-oid="ke7:tzg">
                    Por Proyecto
                  </SelectItem>
                  <SelectItem value="trimestral" data-oid="ignkb84">
                    Trimestral
                  </SelectItem>
                  <SelectItem value="anual" data-oid="s6ddyv2">
                    Anual
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2" data-oid="8oxe7xz">
              <Label htmlFor="startDate" data-oid="jjmaq3t">
                Fecha de Inicio
              </Label>
              <Input id="startDate" type="date" data-oid="l-lt915" />
            </div>

            <div className="space-y-2" data-oid="1mush_2">
              <Label htmlFor="endDate" data-oid="hmrabza">
                Fecha de Finalización
              </Label>
              <Input id="endDate" type="date" data-oid="mtt87ht" />
            </div>

            <div className="space-y-2" data-oid="sj9g9wu">
              <Label htmlFor="totalAmount" data-oid="-4bqr6h">
                Monto Total
              </Label>
              <Input
                id="totalAmount"
                placeholder="0.00"
                type="number"
                data-oid="li6lqho"
              />
            </div>

            <div className="space-y-2" data-oid=":hmsze4">
              <Label htmlFor="currency" data-oid="tudjy2d">
                Moneda
              </Label>
              <Select defaultValue="MXN" data-oid="6wti1n5">
                <SelectTrigger id="currency" data-oid="7987yxs">
                  <SelectValue
                    placeholder="Seleccione moneda"
                    data-oid="c08xh6m"
                  />
                </SelectTrigger>
                <SelectContent data-oid="doyc4-4">
                  <SelectItem value="MXN" data-oid="iujj_io">
                    Peso Mexicano (MXN)
                  </SelectItem>
                  <SelectItem value="USD" data-oid="taoygkj">
                    Dólar (USD)
                  </SelectItem>
                  <SelectItem value="EUR" data-oid="t3.2hh5">
                    Euro (EUR)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2" data-oid="0q-0zdo">
            <Label htmlFor="description" data-oid=":jf439o">
              Descripción
            </Label>
            <Input
              id="description"
              placeholder="Describa el propósito de este presupuesto"
              data-oid="rbsmyv0"
            />
          </div>

          <h3 className="font-medium pt-4" data-oid="ajaiw01">
            Asignación por Departamento
          </h3>

          <div className="space-y-4" data-oid="2xviu0a">
            <div className="grid md:grid-cols-2 gap-4" data-oid="13.l-ld">
              <div className="space-y-2" data-oid=":jg_354">
                <Label htmlFor="deptMarketing" data-oid="8.c_tww">
                  Marketing
                </Label>
                <Input
                  id="deptMarketing"
                  placeholder="0.00"
                  type="number"
                  data-oid="_bxuu16"
                />
              </div>

              <div className="space-y-2" data-oid="p1k2uqv">
                <Label htmlFor="deptTech" data-oid="va92537">
                  Tecnología
                </Label>
                <Input
                  id="deptTech"
                  placeholder="0.00"
                  type="number"
                  data-oid="5b-r8:c"
                />
              </div>

              <div className="space-y-2" data-oid="uu1vnof">
                <Label htmlFor="deptSales" data-oid=":4vz95t">
                  Ventas
                </Label>
                <Input
                  id="deptSales"
                  placeholder="0.00"
                  type="number"
                  data-oid=".jhlms9"
                />
              </div>

              <div className="space-y-2" data-oid="0zb.a-h">
                <Label htmlFor="deptAdmin" data-oid="wk1q9_i">
                  Administración
                </Label>
                <Input
                  id="deptAdmin"
                  placeholder="0.00"
                  type="number"
                  data-oid="bn663.t"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4" data-oid="s-a1_ur">
            <Button variant="outline" data-oid="8aiii6.">
              Cancelar
            </Button>
            <Button type="submit" data-oid=".hqpzv5">
              Guardar Presupuesto
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
