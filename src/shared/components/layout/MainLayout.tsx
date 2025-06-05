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
    <div className="flex min-h-screen w-full bg-background" data-oid="f8yk08p">
      <Sidebar data-oid="7yzp_j_" />
      <div
        className={`flex-1 min-w-0 w-full ml-20 transition-all duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        data-oid="9lhqyg5"
      >
        <Header data-oid="3vpug_j" />
        <main
          className="p-4 md:p-6 w-full max-w-full overflow-x-hidden"
          data-oid="zq5e._1"
        >
          <PageTransition data-oid="k2juua1">
            <div className="space-y-6 animate-slide-up" data-oid="e1odiop">
              {children}
            </div>
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
