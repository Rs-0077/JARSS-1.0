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
    <div className="flex min-h-screen w-full bg-background" data-oid="p2674j4">
      <Sidebar data-oid="x0f57hd" />
      <div
        className={`flex-1 min-w-0 w-full ml-16 transition-all duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        data-oid=":si..n6"
      >
        <Header data-oid="9w3dvf6" />
        <main
          className="p-4 md:p-6 w-full max-w-full overflow-x-hidden"
          data-oid="1:est:4"
        >
          <PageTransition data-oid="jb45959">
            <div className="space-y-6" data-oid="bulpqx:">
              {children}
            </div>
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
