
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/dashboard/StatCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { PiggyBank, Receipt, Wallet, CreditCard, Plus, FileText, ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

const Finanzas = () => {
  const [transactionType, setTransactionType] = useState("ingreso");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [account, setAccount] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase
        .from('transactions')
        .insert([
          { 
            type: transactionType,
            amount: parseFloat(amount), 
            description, 
            date: date || new Date().toISOString(),
            account_id: account || null,
          }
        ]);
        
      if (error) throw error;
      
      toast({
        title: "Transacción registrada",
        description: "La transacción ha sido registrada exitosamente",
      });
      
      // Reset form
      setAmount("");
      setCategory("");
      setDescription("");
      setDate("");
      
    } catch (error) {
      console.error("Error al registrar transacción:", error);
      toast({
        title: "Error",
        description: "No se pudo registrar la transacción",
        variant: "destructive",
      });
    }
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Gestión Financiera</h1>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Nueva Transacción</span>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <StatCard
            title="Balance Total"
            value="$124,500.00"
            icon={Wallet}
            trend="up"
            trendValue="+8.2% desde el mes pasado"
          />
          <StatCard
            title="Ingresos (Mes)"
            value="$28,750.00"
            icon={ArrowUp}
            trend="up"
            trendValue="+5.4% desde el mes pasado"
          />
          <StatCard
            title="Gastos (Mes)"
            value="$12,340.00"
            icon={ArrowDown}
            trend="down"
            trendValue="-2.7% desde el mes pasado"
          />
          <StatCard
            title="Cuentas por Cobrar"
            value="$18,300.00"
            icon={Receipt}
            trend="neutral"
            trendValue="4 facturas pendientes"
          />
        </div>

        <Tabs defaultValue="transacciones">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="transacciones">Transacciones</TabsTrigger>
            <TabsTrigger value="cuentas">Cuentas</TabsTrigger>
            <TabsTrigger value="conciliacion">Conciliación</TabsTrigger>
          </TabsList>
          <TabsContent value="transacciones">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="md:col-span-1 glass-morphism">
                <CardHeader>
                  <CardTitle>Registrar Transacción</CardTitle>
                  <CardDescription>
                    Ingrese los detalles de la transacción
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de Transacción</Label>
                      <Select 
                        value={transactionType} 
                        onValueChange={setTransactionType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ingreso">Ingreso</SelectItem>
                          <SelectItem value="gasto">Gasto</SelectItem>
                          <SelectItem value="transferencia">Transferencia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
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
                          <SelectItem value="compras">Compras</SelectItem>
                          <SelectItem value="servicios">Servicios</SelectItem>
                          <SelectItem value="nomina">Nómina</SelectItem>
                          <SelectItem value="impuestos">Impuestos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Descripción</Label>
                      <Input 
                        id="description" 
                        placeholder="Descripción de la transacción" 
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
                    
                    <Button type="submit" className="w-full">Registrar Transacción</Button>
                  </form>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2 glass-morphism">
                <CardHeader>
                  <CardTitle>Últimas Transacciones</CardTitle>
                  <CardDescription>
                    Movimientos financieros recientes
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
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <CreditCard className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Transferencia entre cuentas</p>
                          <p className="text-sm text-gray-500">Cuenta de Ahorro {"->"} Cuenta Corriente</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-blue-600">$8,500.00</p>
                        <p className="text-sm text-gray-500">25/03/2025</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="cuentas">
            <Card>
              <CardHeader>
                <CardTitle>Cuentas Bancarias</CardTitle>
                <CardDescription>
                  Administre sus cuentas bancarias y saldos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg glass-morphism hover-scale">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-semibold">Cuenta Corriente</h3>
                        <p className="text-sm text-gray-500">Banco Nacional</p>
                      </div>
                      <CreditCard className="h-5 w-5 text-contable-primary" />
                    </div>
                    <p className="text-2xl font-bold mb-1">$64,320.45</p>
                    <p className="text-xs text-gray-500">**** **** **** 3456</p>
                  </div>
                  
                  <div className="p-4 rounded-lg glass-morphism hover-scale">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-semibold">Cuenta de Ahorro</h3>
                        <p className="text-sm text-gray-500">Banco del Sur</p>
                      </div>
                      <PiggyBank className="h-5 w-5 text-contable-primary" />
                    </div>
                    <p className="text-2xl font-bold mb-1">$38,750.22</p>
                    <p className="text-xs text-gray-500">**** **** **** 7890</p>
                  </div>
                  
                  <div className="p-4 rounded-lg glass-morphism hover-scale">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-semibold">Cuenta de Inversión</h3>
                        <p className="text-sm text-gray-500">Banco Mercantil</p>
                      </div>
                      <FileText className="h-5 w-5 text-contable-primary" />
                    </div>
                    <p className="text-2xl font-bold mb-1">$21,430.00</p>
                    <p className="text-xs text-gray-500">**** **** **** 5432</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar Cuenta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="conciliacion">
            <Card>
              <CardHeader>
                <CardTitle>Conciliación Bancaria</CardTitle>
                <CardDescription>
                  Compare sus registros con los extractos bancarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200/20">
                    <div>
                      <h3 className="font-medium">Saldo según Extracto Bancario</h3>
                      <p className="text-sm text-gray-500">Banco Nacional - Marzo 2025</p>
                    </div>
                    <p className="font-semibold">$64,520.45</p>
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200/20">
                    <div>
                      <h3 className="font-medium">Saldo según Registros Contables</h3>
                      <p className="text-sm text-gray-500">Sistema Interno - Marzo 2025</p>
                    </div>
                    <p className="font-semibold">$64,320.45</p>
                  </div>
                  
                  <div className="bg-amber-50/10 p-4 rounded-lg border border-amber-200/20">
                    <h3 className="font-medium text-amber-900">Diferencia Identificada</h3>
                    <p className="text-sm text-amber-700">$200.00</p>
                    <div className="mt-2">
                      <p className="text-sm text-amber-700">Posibles causas:</p>
                      <ul className="list-disc list-inside text-sm text-amber-700">
                        <li>Cheques en tránsito</li>
                        <li>Depósitos no registrados</li>
                        <li>Cargos bancarios no contabilizados</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Button>Iniciar Conciliación</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Finanzas;
