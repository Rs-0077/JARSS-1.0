
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

export const BudgetForm = () => {
  const handleCreateBudget = () => {
    toast({
      title: "Presupuesto creado",
      description: "El nuevo presupuesto ha sido creado exitosamente",
    });
  };

  return (
    <Card className="glass-morphism">
      <CardHeader>
        <CardTitle>Crear Nuevo Presupuesto</CardTitle>
        <CardDescription>
          Defina los parámetros para el nuevo presupuesto
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          handleCreateBudget();
        }}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budgetName">Nombre del Presupuesto</Label>
              <Input id="budgetName" placeholder="Ej. Presupuesto Q3 2025" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="budgetType">Tipo de Presupuesto</Label>
              <Select defaultValue="departamento">
                <SelectTrigger id="budgetType">
                  <SelectValue placeholder="Seleccione tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="departamento">Por Departamento</SelectItem>
                  <SelectItem value="proyecto">Por Proyecto</SelectItem>
                  <SelectItem value="trimestral">Trimestral</SelectItem>
                  <SelectItem value="anual">Anual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="startDate">Fecha de Inicio</Label>
              <Input id="startDate" type="date" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="endDate">Fecha de Finalización</Label>
              <Input id="endDate" type="date" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="totalAmount">Monto Total</Label>
              <Input id="totalAmount" placeholder="0.00" type="number" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="currency">Moneda</Label>
              <Select defaultValue="MXN">
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Seleccione moneda" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MXN">Peso Mexicano (MXN)</SelectItem>
                  <SelectItem value="USD">Dólar (USD)</SelectItem>
                  <SelectItem value="EUR">Euro (EUR)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Input id="description" placeholder="Describa el propósito de este presupuesto" />
          </div>
          
          <h3 className="font-medium pt-4">Asignación por Departamento</h3>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deptMarketing">Marketing</Label>
                <Input id="deptMarketing" placeholder="0.00" type="number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="deptTech">Tecnología</Label>
                <Input id="deptTech" placeholder="0.00" type="number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="deptSales">Ventas</Label>
                <Input id="deptSales" placeholder="0.00" type="number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="deptAdmin">Administración</Label>
                <Input id="deptAdmin" placeholder="0.00" type="number" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline">Cancelar</Button>
            <Button type="submit">Guardar Presupuesto</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
