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
    <Card className="glass-morphism" data-oid="s69xyhe">
      <CardHeader data-oid="wqzxjh7">
        <CardTitle data-oid="w1koo5j">Crear Nuevo Presupuesto</CardTitle>
        <CardDescription data-oid="8v:__b4">
          Defina los parámetros para el nuevo presupuesto
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="i7c9i0a">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateBudget();
          }}
          data-oid=":8cn6um"
        >
          <div className="grid md:grid-cols-2 gap-4" data-oid="5q9q50m">
            <div className="space-y-2" data-oid="fdgmrlj">
              <Label htmlFor="budgetName" data-oid="la_y28e">
                Nombre del Presupuesto
              </Label>
              <Input
                id="budgetName"
                placeholder="Ej. Presupuesto Q3 2025"
                data-oid="v12:pq8"
              />
            </div>

            <div className="space-y-2" data-oid="4w:4bj3">
              <Label htmlFor="budgetType" data-oid="2dt7.8d">
                Tipo de Presupuesto
              </Label>
              <Select defaultValue="departamento" data-oid="mvxo0s1">
                <SelectTrigger id="budgetType" data-oid="b6p80g_">
                  <SelectValue
                    placeholder="Seleccione tipo"
                    data-oid="x:3girs"
                  />
                </SelectTrigger>
                <SelectContent data-oid="7:cxmb:">
                  <SelectItem value="departamento" data-oid=".ekc2-8">
                    Por Departamento
                  </SelectItem>
                  <SelectItem value="proyecto" data-oid="rbj4m-8">
                    Por Proyecto
                  </SelectItem>
                  <SelectItem value="trimestral" data-oid="hopmksm">
                    Trimestral
                  </SelectItem>
                  <SelectItem value="anual" data-oid="b_kpmmo">
                    Anual
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2" data-oid="g-g_jor">
              <Label htmlFor="startDate" data-oid="am.7fjk">
                Fecha de Inicio
              </Label>
              <Input id="startDate" type="date" data-oid="tikf3ex" />
            </div>

            <div className="space-y-2" data-oid="q5uei15">
              <Label htmlFor="endDate" data-oid="zfccpy1">
                Fecha de Finalización
              </Label>
              <Input id="endDate" type="date" data-oid="aqdj9xh" />
            </div>

            <div className="space-y-2" data-oid="ua0_5m6">
              <Label htmlFor="totalAmount" data-oid="6s97q5k">
                Monto Total
              </Label>
              <Input
                id="totalAmount"
                placeholder="0.00"
                type="number"
                data-oid="yc:lrak"
              />
            </div>

            <div className="space-y-2" data-oid="_-y7b6-">
              <Label htmlFor="currency" data-oid="6p5tzfe">
                Moneda
              </Label>
              <Select defaultValue="MXN" data-oid="rrxvy2h">
                <SelectTrigger id="currency" data-oid="e6-ad5z">
                  <SelectValue
                    placeholder="Seleccione moneda"
                    data-oid="0-rrgfz"
                  />
                </SelectTrigger>
                <SelectContent data-oid="wz97zjx">
                  <SelectItem value="MXN" data-oid="wjfdj5o">
                    Peso Mexicano (MXN)
                  </SelectItem>
                  <SelectItem value="USD" data-oid="8xbnoqw">
                    Dólar (USD)
                  </SelectItem>
                  <SelectItem value="EUR" data-oid="zp44gf:">
                    Euro (EUR)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2" data-oid="i5rj80z">
            <Label htmlFor="description" data-oid="29o0kmb">
              Descripción
            </Label>
            <Input
              id="description"
              placeholder="Describa el propósito de este presupuesto"
              data-oid="9pqo8ww"
            />
          </div>

          <h3 className="font-medium pt-4" data-oid="g1x:za4">
            Asignación por Departamento
          </h3>

          <div className="space-y-4" data-oid="kitfzg.">
            <div className="grid md:grid-cols-2 gap-4" data-oid="w0xl4zu">
              <div className="space-y-2" data-oid=":qrn-w0">
                <Label htmlFor="deptMarketing" data-oid="5f-lv2.">
                  Marketing
                </Label>
                <Input
                  id="deptMarketing"
                  placeholder="0.00"
                  type="number"
                  data-oid="qbd59ac"
                />
              </div>

              <div className="space-y-2" data-oid="j5k_:q8">
                <Label htmlFor="deptTech" data-oid="wfbxhho">
                  Tecnología
                </Label>
                <Input
                  id="deptTech"
                  placeholder="0.00"
                  type="number"
                  data-oid="95bf9ux"
                />
              </div>

              <div className="space-y-2" data-oid="qn:cgf0">
                <Label htmlFor="deptSales" data-oid="twqej-3">
                  Ventas
                </Label>
                <Input
                  id="deptSales"
                  placeholder="0.00"
                  type="number"
                  data-oid="8p4x8sf"
                />
              </div>

              <div className="space-y-2" data-oid="-zb6ry8">
                <Label htmlFor="deptAdmin" data-oid="7xp9lx.">
                  Administración
                </Label>
                <Input
                  id="deptAdmin"
                  placeholder="0.00"
                  type="number"
                  data-oid="sxx55qg"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4" data-oid="ho5tiih">
            <Button variant="outline" data-oid="ahm7l6u">
              Cancelar
            </Button>
            <Button type="submit" data-oid="-nwei57">
              Guardar Presupuesto
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
