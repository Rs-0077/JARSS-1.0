import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Configuracion = () => {
  return (
    <MainLayout data-oid="7os75-v">
      <div className="space-y-4" data-oid="uy1mpvm">
        <h1 className="text-2xl font-bold" data-oid="nwv:0.7">
          Configuración del Sistema
        </h1>

        <div className="grid gap-4 md:grid-cols-2" data-oid="i66xas-">
          <Card data-oid="eh1qm31">
            <CardHeader data-oid="x4e1b9j">
              <CardTitle data-oid=".z4fosa">Perfil de Empresa</CardTitle>
            </CardHeader>
            <CardContent data-oid="nrrnqx:">
              <p className="text-center py-8 text-gray-500" data-oid="3fchp3d">
                Próximamente podrá configurar la información de su empresa.
              </p>
            </CardContent>
          </Card>

          <Card data-oid="jxgx3ej">
            <CardHeader data-oid="s3jvirm">
              <CardTitle data-oid="1o.513p">Usuarios y Permisos</CardTitle>
            </CardHeader>
            <CardContent data-oid="2rgsn1.">
              <p className="text-center py-8 text-gray-500" data-oid="o0lzl.-">
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
