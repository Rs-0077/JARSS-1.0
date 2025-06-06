import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SubmenuItem = {
  name: string;
  href: string;
};

type SidebarSubmenuProps = {
  name: string;
  icon: React.ComponentType<any>;
  href: string;
  submenu: SubmenuItem[];
  isOpen: boolean;
  isIconOnly: boolean;
  currentPath: string;
  onToggle: (name: string) => void;
};

export function SidebarSubmenu({
  name,
  icon: Icon,
  href,
  submenu,
  isOpen,
  isIconOnly,
  currentPath,
  onToggle,
}: SidebarSubmenuProps) {
  const handleToggle = () => {
    onToggle(name);
  };

  return (
    <>
      <TooltipProvider data-oid="qcmbz1b">
        <Tooltip data-oid="92onok3">
          <div className="flex items-center relative" data-oid="uxyzngn">
            {/* Contenedor del icono (siempre visible y estático) */}
            <TooltipTrigger asChild data-oid="pmiok1n">
              <button
                onClick={handleToggle}
                className={cn(
                  "flex items-center justify-center w-16 h-10 rounded-md",
                  isOpen
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:text-sidebar-accent-foreground",
                )}
                data-oid="8to1acu"
              >
                <Icon className="h-5 w-5" data-oid="uf_hhwb" />
              </button>
            </TooltipTrigger>

            {/* Contenedor del texto (se despliega/oculta) */}
            {!isIconOnly && (
              <button
                onClick={handleToggle}
                className={cn(
                  "h-10 flex items-center justify-between rounded-r-md",
                  "py-2.5 pl-3 pr-3",
                  isOpen
                    ? "bg-sidebar-accent/20 text-sidebar-primary font-medium"
                    : "text-sidebar-foreground hover:text-sidebar-accent-foreground",
                )}
                style={{
                  width: isIconOnly ? 0 : "auto",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  flex: 1,
                }}
                data-oid="7q-x7c9"
              >
                <span className="text-sm" data-oid="seft3lb">
                  {name}
                </span>
                <div data-oid="hl3n4ar">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4" data-oid="99dd3aa" />
                  ) : (
                    <ChevronDown className="w-4 h-4" data-oid="zy8j_dt" />
                  )}
                </div>
              </button>
            )}
          </div>
          {isIconOnly && (
            <TooltipContent side="right" data-oid="7nanpm7">
              {name}
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>

      <div
        className={cn(
          "absolute left-0 z-50 transition-all duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        style={{
          top: "100%",
          width: isIconOnly ? "200px" : "240px",
        }}
        data-oid="a0gj8qz"
      >
        <div
          className={cn(
            "bg-sidebar rounded-md shadow-lg border border-sidebar-border",
            "p-2 mt-1 w-full",
            isIconOnly ? "ml-0" : "",
          )}
          data-oid="k4u_j_s"
        >
          {submenu.map((subitem, index) => (
            <div
              key={subitem.name}
              className={cn(
                "transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0",
              )}
              data-oid="vi9mk1n"
            >
              <SubmenuItem
                name={subitem.name}
                href={subitem.href}
                isActive={currentPath === subitem.href}
                isIconOnly={isIconOnly}
                data-oid="qng91q6"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

type SubmenuItemProps = {
  name: string;
  href: string;
  isActive: boolean;
  isIconOnly: boolean;
};

function SubmenuItem({ name, href, isActive, isIconOnly }: SubmenuItemProps) {
  return (
    <TooltipProvider data-oid="1.z9ywl">
      <Tooltip data-oid="nx9wn5e">
        <div
          className="flex items-center my-1 px-2 rounded-md hover:bg-sidebar-accent/10"
          data-oid="s0emchz"
        >
          {/* Indicador visual (siempre visible y estático) */}
          <TooltipTrigger asChild data-oid="-:1ncdu">
            <Link
              to={href}
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-md",
                isActive
                  ? "text-sidebar-primary"
                  : "text-sidebar-foreground/60 hover:text-sidebar-accent-foreground",
              )}
              data-oid="a.fkmre"
            >
              <span
                className={cn(
                  "w-2 h-2 rounded-full",
                  isActive ? "bg-sidebar-primary" : "bg-sidebar-foreground/40",
                )}
                data-oid="zwyg0kr"
              ></span>
            </Link>
          </TooltipTrigger>

          {/* Texto del submenú */}
          <Link
            to={href}
            className={cn(
              "h-8 py-1.5 pl-2 flex-1 rounded-r-md",
              isActive
                ? "text-sidebar-primary font-medium"
                : "text-sidebar-foreground hover:text-sidebar-accent-foreground",
            )}
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
            }}
            data-oid="fc_3eh7"
          >
            <span className="text-sm" data-oid="tkgvnkf">
              {name}
            </span>
          </Link>
        </div>
        {isIconOnly && (
          <TooltipContent side="right" data-oid="u65oibl">
            {name}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
