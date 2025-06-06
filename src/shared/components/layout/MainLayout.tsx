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
    <div className="flex min-h-screen w-full bg-background" data-oid="6i.qn50">
      <Sidebar data-oid="k_1m6hp" />
      <div
        className={`flex-1 min-w-0 w-full ml-20 transition-all duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        data-oid="sdkcnrm"
      >
        <Header data-oid="96qzs5e" />
        <main
          className="p-4 md:p-6 w-full max-w-full overflow-x-hidden"
          data-oid="stoa3qu"
        >
          <PageTransition data-oid="zzourr3">
            <div className="space-y-6 animate-slide-up" data-oid="tvimf1l">
              {children}
            </div>
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
