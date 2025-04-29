
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Configuracion = () => {
  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Configuración del Sistema</h1>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Perfil de Empresa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">
                Próximamente podrá configurar la información de su empresa.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Usuarios y Permisos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">
                Próximamente podrá gestionar usuarios y sus permisos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Configuracion;
