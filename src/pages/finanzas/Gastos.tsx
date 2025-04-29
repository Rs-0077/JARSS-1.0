
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Plus, ArrowDown, FileText, Calendar } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Gastos = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [supplier, setSupplier] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase
        .from('transactions')
        .insert([
          { 
            type: "gasto",
            amount: parseFloat(amount), 
            description,
            category,
            supplier, 
            date: date || new Date().toISOString(),
          }
        ]);
        
      if (error) throw error;
      
      toast({
        title: "Gasto registrado",
        description: "El gasto ha sido registrado exitosamente",
      });
      
      // Reset form
      setAmount("");
      setCategory("");
      setDescription("");
      setDate("");
      setSupplier("");
      
    } catch (error) {
      console.error("Error al registrar gasto:", error);
      toast({
        title: "Error",
        description: "No se pudo registrar el gasto",
        variant: "destructive",
      });
    }
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Gestión de Gastos</h1>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Nuevo Gasto</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle>Registrar Gasto</CardTitle>
              <CardDescription>
                Ingrese los detalles del gasto
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
                      <SelectItem value="compras">Compras</SelectItem>
                      <SelectItem value="servicios">Servicios</SelectItem>
                      <SelectItem value="nomina">Nómina</SelectItem>
                      <SelectItem value="impuestos">Impuestos</SelectItem>
                      <SelectItem value="alquiler">Alquiler</SelectItem>
                      <SelectItem value="servicios_publicos">Servicios Públicos</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="otros">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="supplier">Proveedor</Label>
                  <Input 
                    id="supplier" 
                    placeholder="Nombre del proveedor" 
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Descripción</Label>
                  <Input 
                    id="description" 
                    placeholder="Descripción del gasto" 
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
                
                <Button type="submit" className="w-full">Registrar Gasto</Button>
              </form>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle>Últimos Gastos</CardTitle>
              <CardDescription>
                Movimientos de gastos recientes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <ArrowDown className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Pago a Proveedor ABC</p>
                      <p className="text-sm text-gray-500">Materiales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">-$1,840.00</p>
                    <p className="text-sm text-gray-500">29/03/2025</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <ArrowDown className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Pago de Servicios</p>
                      <p className="text-sm text-gray-500">Electricidad y agua</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">-$450.00</p>
                    <p className="text-sm text-gray-500">28/03/2025</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Alquiler Oficina</p>
                      <p className="text-sm text-gray-500">Mes de abril</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">-$2,500.00</p>
                    <p className="text-sm text-gray-500">26/03/2025</p>
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

export default Gastos;
