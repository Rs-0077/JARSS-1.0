import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Wallet,
  FileText,
  PieChart,
  Users,
  BarChartHorizontal,
  CreditCard,
  Settings,
} from "lucide-react";

import { SidebarLink } from "./sidebar/SidebarLink";
import { SidebarSubmenu } from "./sidebar/SidebarSubmenu";
import { SidebarProfile } from "./sidebar/SidebarProfile";
import { SidebarHeader } from "./sidebar/SidebarHeader";
import { SidebarToggle } from "./sidebar/SidebarToggle";

type SidebarLinkType = {
  name: string;
  icon: React.ComponentType<any>;
  href: string;
  submenu?: { name: string; href: string }[];
};

const sidebarLinks: SidebarLinkType[] = [
  { name: "Panel", icon: BarChart3, href: "/" },
  {
    name: "Gestión Financiera",
    icon: Wallet,
    href: "/finanzas",
    submenu: [
      { name: "Ingresos", href: "/finanzas/ingresos" },
      { name: "Gastos", href: "/finanzas/gastos" },
      { name: "Inversiones", href: "/finanzas/inversiones" },
    ],
  },
  { name: "Reportes", icon: FileText, href: "/reportes" },
  { name: "Cumplimiento Fiscal", icon: PieChart, href: "/impuestos" },
  {
    name: "Control Presupuestario",
    icon: BarChartHorizontal,
    href: "/presupuestos",
  },
  { name: "Nómina", icon: Users, href: "/nomina" },
  { name: "Bancos y Proveedores", icon: CreditCard, href: "/bank-accounts" },
  { name: "Configuración", icon: Settings, href: "/configuracion" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isIconOnly, setIsIconOnly] = useState(true);
  const location = useLocation();

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  // Set active submenu based on current route
  useEffect(() => {
    const currentLink = sidebarLinks.find((link) =>
      link.submenu?.some((subItem) => location.pathname === subItem.href),
    );

    if (currentLink) {
      setOpenSubmenu(currentLink.name);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsIconOnly(!isIconOnly);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
    setIsIconOnly(false);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setIsIconOnly(true);
  };

  return (
    <>
      <SidebarToggle
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        data-oid="e7bwtvp"
      />

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 transition-all duration-300 transform bg-sidebar border-r border-sidebar-border shadow-md",
          isOpen ? "w-64" : "w-20",
          "translate-x-0 lg:translate-x-0",
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-oid="z730fho"
      >
        <div className="flex flex-col h-full" data-oid="zkeufds">
          <SidebarHeader isIconOnly={isIconOnly} data-oid="3q9qp8." />

          <nav
            className="flex-1 px-3 py-4 space-y-2 overflow-y-auto"
            data-oid="yhl6u9u"
          >
            {sidebarLinks.map((link) => (
              <div key={link.name} className="mb-2" data-oid="7cul0uo">
                {link.submenu ? (
                  <SidebarSubmenu
                    name={link.name}
                    icon={link.icon}
                    href={link.href}
                    submenu={link.submenu}
                    isOpen={openSubmenu === link.name}
                    isIconOnly={isIconOnly}
                    currentPath={location.pathname}
                    onToggle={toggleSubmenu}
                    data-oid=":zghrn1"
                  />
                ) : (
                  <SidebarLink
                    name={link.name}
                    icon={link.icon}
                    href={link.href}
                    isActive={location.pathname === link.href}
                    isIconOnly={isIconOnly}
                    data-oid=":-1i_hl"
                  />
                )}
              </div>
            ))}
          </nav>

          <SidebarProfile isIconOnly={isIconOnly} data-oid="wjqji42" />
        </div>
      </div>
    </>
  );
}
