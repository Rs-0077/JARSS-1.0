import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Configuracion = () => {
  return (
    <MainLayout data-oid="0ebng3z">
      <div className="space-y-4" data-oid="2d7ql:t">
        <h1 className="text-2xl font-bold" data-oid="60aaifx">
          Configuración del Sistema
        </h1>

        <div className="grid gap-4 md:grid-cols-2" data-oid="t3wzz_w">
          <Card data-oid="dk9lk9y">
            <CardHeader data-oid="rxd--41">
              <CardTitle data-oid="z6a.2w-">Perfil de Empresa</CardTitle>
            </CardHeader>
            <CardContent data-oid="_bd4i7c">
              <p className="text-center py-8 text-gray-500" data-oid="3:69269">
                Próximamente podrá configurar la información de su empresa.
              </p>
            </CardContent>
          </Card>

          <Card data-oid="kl0c-3n">
            <CardHeader data-oid="ppyvuqp">
              <CardTitle data-oid="qz-kr_.">Usuarios y Permisos</CardTitle>
            </CardHeader>
            <CardContent data-oid="auualnm">
              <p className="text-center py-8 text-gray-500" data-oid="6yasd:u">
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
