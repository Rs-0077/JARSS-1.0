
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, Calendar, FileText, Plus, CheckIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Nomina = () => {
  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Gestión de Nómina</h1>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Nuevo Empleado</span>
          </Button>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Total Empleados"
            value="24"
            icon={Users}
            trend="up"
            trendValue="+2 este mes"
          />
          <StatCard
            title="Próximo Pago"
            value="15/04/2025"
            icon={Calendar}
            trend="neutral"
            trendValue="$45,320.00"
          />
          <StatCard
            title="Pagos Realizados (Año)"
            value="$135,960.00"
            icon={CheckIcon}
            trend="up"
            trendValue="+5.4% vs año anterior"
          />
        </div>
        
        <Tabs defaultValue="empleados">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="empleados">Empleados</TabsTrigger>
            <TabsTrigger value="pagos">Pagos de Nómina</TabsTrigger>
            <TabsTrigger value="configuracion">Configuración</TabsTrigger>
          </TabsList>
          
          <TabsContent value="empleados">
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle>Listado de Empleados</CardTitle>
                <CardDescription>
                  Gestione la información de sus empleados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Empleado 1 */}
                  <div className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Juan Diaz</h3>
                        <p className="text-sm text-gray-500">Desarrollador Senior</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Departamento:</span>
                        <span className="text-sm">Tecnología</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Fecha de Ingreso:</span>
                        <span className="text-sm">15/03/2022</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Salario Base:</span>
                        <span className="text-sm">$18,500.00</span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline">Ver Detalles</Button>
                      <Button size="sm" variant="outline">Editar</Button>
                    </div>
                  </div>
                  
                  {/* Empleado 2 */}
                  <div className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>MR</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">María Rodriguez</h3>
                        <p className="text-sm text-gray-500">Gerente de Finanzas</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Departamento:</span>
                        <span className="text-sm">Finanzas</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Fecha de Ingreso:</span>
                        <span className="text-sm">05/01/2020</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Salario Base:</span>
                        <span className="text-sm">$25,000.00</span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline">Ver Detalles</Button>
                      <Button size="sm" variant="outline">Editar</Button>
                    </div>
                  </div>
                  
                  {/* Empleado 3 */}
                  <div className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>CP</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Carlos Pérez</h3>
                        <p className="text-sm text-gray-500">Ejecutivo de Ventas</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Departamento:</span>
                        <span className="text-sm">Ventas</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Fecha de Ingreso:</span>
                        <span className="text-sm">22/05/2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Salario Base:</span>
                        <span className="text-sm">$12,000.00</span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline">Ver Detalles</Button>
                      <Button size="sm" variant="outline">Editar</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pagos">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="md:col-span-1 glass-morphism">
                <CardHeader>
                  <CardTitle>Nuevo Pago de Nómina</CardTitle>
                  <CardDescription>
                    Registre un nuevo pago de nómina
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="empleado">Empleado</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione empleado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="juan">Juan Diaz</SelectItem>
                          <SelectItem value="maria">María Rodriguez</SelectItem>
                          <SelectItem value="carlos">Carlos Pérez</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="periodo">Periodo de Pago</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione periodo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="abr1">1-15 Abril 2025</SelectItem>
                          <SelectItem value="abr2">16-30 Abril 2025</SelectItem>
                          <SelectItem value="may1">1-15 Mayo 2025</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="salarioBase">Salario Base</Label>
                      <Input id="salarioBase" placeholder="0.00" type="number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bonos">Bonos y Comisiones</Label>
                      <Input id="bonos" placeholder="0.00" type="number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="deducciones">Deducciones</Label>
                      <Input id="deducciones" placeholder="0.00" type="number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="impuestos">Impuestos</Label>
                      <Input id="impuestos" placeholder="0.00" type="number" />
                    </div>
                    
                    <Button type="submit" className="w-full">Procesar Pago</Button>
                  </form>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2 glass-morphism">
                <CardHeader>
                  <CardTitle>Historial de Pagos</CardTitle>
                  <CardDescription>
                    Últimos pagos de nómina realizados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">María Rodriguez</p>
                          <p className="text-sm text-gray-500">Periodo: 16-31 Marzo 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$25,000.00</p>
                        <p className="text-sm text-green-500">Pagado el 31/03/2025</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Juan Diaz</p>
                          <p className="text-sm text-gray-500">Periodo: 16-31 Marzo 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$18,500.00</p>
                        <p className="text-sm text-green-500">Pagado el 31/03/2025</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>CP</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Carlos Pérez</p>
                          <p className="text-sm text-gray-500">Periodo: 16-31 Marzo 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$12,000.00</p>
                        <p className="text-sm text-green-500">Pagado el 31/03/2025</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-gray-200/10">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">María Rodriguez</p>
                          <p className="text-sm text-gray-500">Periodo: 1-15 Marzo 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$25,000.00</p>
                        <p className="text-sm text-green-500">Pagado el 15/03/2025</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="configuracion">
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle>Configuración de Nómina</CardTitle>
                <CardDescription>
                  Ajuste los parámetros de cálculo de nómina
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Parámetros de Impuestos</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="isrPorcentaje">ISR Tasa Base</Label>
                        <Input id="isrPorcentaje" type="number" defaultValue="9" />
                        <p className="text-xs text-gray-500">Porcentaje base para el cálculo de ISR</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subsidioEmpleo">Subsidio al Empleo</Label>
                        <Input id="subsidioEmpleo" type="number" defaultValue="0" />
                        <p className="text-xs text-gray-500">Monto del subsidio al empleo (si aplica)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Seguridad Social</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="imss">IMSS (Porcentaje)</Label>
                        <Input id="imss" type="number" defaultValue="3.5" />
                        <p className="text-xs text-gray-500">Porcentaje para cálculo de IMSS</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="infonavit">INFONAVIT (Porcentaje)</Label>
                        <Input id="infonavit" type="number" defaultValue="5" />
                        <p className="text-xs text-gray-500">Porcentaje para cálculo de INFONAVIT</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Periodos de Pago</h3>
                    <div className="space-y-2">
                      <Select defaultValue="quincenal">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="semanal">Semanal</SelectItem>
                          <SelectItem value="quincenal">Quincenal</SelectItem>
                          <SelectItem value="mensual">Mensual</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-gray-500">Frecuencia de pago de nómina</p>
                    </div>
                  </div>
                  
                  <Button>Guardar Configuración</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Nomina;
