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
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      <div className={`flex-1 min-w-0 w-full ml-20 transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main className="p-4 md:p-6 w-full max-w-full overflow-x-hidden">
          <PageTransition>
            <div className="space-y-6 animate-slide-up">
              {children}
            </div>
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
