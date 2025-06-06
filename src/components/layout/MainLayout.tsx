import { ReactNode, useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { PageTransition } from "@/shared/components/ui/page-transition";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [mounted, setMounted] = useState(false);

  // Efecto para animación de entrada inicial
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-background" data-oid="3c02e4t">
      <Sidebar data-oid="wboxjw8" />
      <div
        className={`flex-1 min-w-0 w-full ml-16 transition-all duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        data-oid="3g6h0:r"
      >
        <Header data-oid="hj92dfu" />
        <main
          className="p-4 md:p-6 w-full max-w-full overflow-x-hidden"
          data-oid="y40lhux"
        >
          <PageTransition data-oid="w47__r1">
            <div className="space-y-6" data-oid="7h-ykrp">
              {children}
            </div>
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
