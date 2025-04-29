
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Plus, ArrowUp, FileText, Calendar } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Ingresos = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [client, setClient] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase
        .from('transactions')
        .insert([
          { 
            type: "ingreso",
            amount: parseFloat(amount), 
            description,
            category,
            client, 
            date: date || new Date().toISOString(),
          }
        ]);
        
      if (error) throw error;
      
      toast({
        title: "Ingreso registrado",
        description: "El ingreso ha sido registrado exitosamente",
      });
      
      // Reset form
      setAmount("");
      setCategory("");
      setDescription("");
      setDate("");
      setClient("");
      
    } catch (error) {
      console.error("Error al registrar ingreso:", error);
      toast({
        title: "Error",
        description: "No se pudo registrar el ingreso",
        variant: "destructive",
      });
    }
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Gestión de Ingresos</h1>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Nuevo Ingreso</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle>Registrar Ingreso</CardTitle>
              <CardDescription>
                Ingrese los detalles del ingreso
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Monto</Label>
                  <Input 
                    id="amount" 
                    placeholder="0.00" 
                    type="number" 
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Categoría</Label>
                  <Select 
                    value={category} 
                    onValueChange={setCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ventas">Ventas</SelectItem>
                      <SelectItem value="servicios">Servicios</SelectItem>
                      <SelectItem value="comisiones">Comisiones</SelectItem>
                      <SelectItem value="inversiones">Rendimiento de Inversiones</SelectItem>
                      <SelectItem value="otros">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="client">Cliente</Label>
                  <Input 
                    id="client" 
                    placeholder="Nombre del cliente" 
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Descripción</Label>
                  <Input 
                    id="description" 
                    placeholder="Descripción del ingreso" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date">Fecha</Label>
                  <div className="relative">
                    <Input 
                      id="date" 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                  </div>
                </div>
                
                <Button type="submit" className="w-full">Registrar Ingreso</Button>
              </form>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle>Últimos Ingresos</CardTitle>
              <CardDescription>
                Movimientos de ingresos recientes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <ArrowUp className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Pago de Cliente XYZ</p>
                      <p className="text-sm text-gray-500">Factura #2023-156</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+$5,200.00</p>
                    <p className="text-sm text-gray-500">Ayer</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <ArrowUp className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Consultoría Cliente DEF</p>
                      <p className="text-sm text-gray-500">Proyecto anual</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+$12,000.00</p>
                    <p className="text-sm text-gray-500">27/03/2025</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Venta de Productos</p>
                      <p className="text-sm text-gray-500">Cliente ABC</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+$3,450.00</p>
                    <p className="text-sm text-gray-500">25/03/2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Ingresos;
