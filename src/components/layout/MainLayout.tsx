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
    <div className="flex min-h-screen w-full bg-background" data-oid="zz2ecn1">
      <Sidebar data-oid="52.0epf" />
      <div
        className={`flex-1 min-w-0 w-full ml-16 transition-all duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        data-oid=":be_cq2"
      >
        <Header data-oid="efc_.d." />
        <main
          className="p-4 md:p-6 w-full max-w-full overflow-x-hidden"
          data-oid="pxa8t0m"
        >
          <PageTransition data-oid="g3qcwmi">
            <div className="space-y-6" data-oid="p.vmovt">
              {children}
            </div>
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
