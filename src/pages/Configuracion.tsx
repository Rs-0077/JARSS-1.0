import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Configuracion = () => {
  return (
    <MainLayout data-oid="lhxwmqn">
      <div className="space-y-4" data-oid="pfk.ta.">
        <h1 className="text-2xl font-bold" data-oid="ar:wm-f">
          Configuración del Sistema
        </h1>

        <div className="grid gap-4 md:grid-cols-2" data-oid="mlkoo_h">
          <Card data-oid="3jtao5x">
            <CardHeader data-oid="nfir6w9">
              <CardTitle data-oid="g7c8afb">Perfil de Empresa</CardTitle>
            </CardHeader>
            <CardContent data-oid="ddmqt78">
              <p className="text-center py-8 text-gray-500" data-oid="e-d0a1u">
                Próximamente podrá configurar la información de su empresa.
              </p>
            </CardContent>
          </Card>

          <Card data-oid="u:u5-3.">
            <CardHeader data-oid="jywxw5t">
              <CardTitle data-oid="2_r4-d:">Usuarios y Permisos</CardTitle>
            </CardHeader>
            <CardContent data-oid="fi4f5t0">
              <p className="text-center py-8 text-gray-500" data-oid="pz2-ctl">
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
