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
      <TooltipProvider data-oid="vg69_g1">
        <Tooltip data-oid="he.q4.7">
          <div className="flex items-center relative" data-oid="y47jtdy">
            {/* Contenedor del icono (siempre visible y estático) */}
            <TooltipTrigger asChild data-oid="fhdsif9">
              <button
                onClick={handleToggle}
                className={cn(
                  "flex items-center justify-center w-16 h-10 rounded-md",
                  isOpen
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:text-sidebar-accent-foreground",
                )}
                data-oid=":_d.tou"
              >
                <Icon className="h-5 w-5" data-oid="uddi7z:" />
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
                data-oid=".blbzpf"
              >
                <span className="text-sm" data-oid="1th:nkq">
                  {name}
                </span>
                <div data-oid=":nnfe67">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4" data-oid="t52uijw" />
                  ) : (
                    <ChevronDown className="w-4 h-4" data-oid="e11ov.v" />
                  )}
                </div>
              </button>
            )}
          </div>
          {isIconOnly && (
            <TooltipContent side="right" data-oid="_74ubxk">
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
        data-oid="qcqcgrf"
      >
        <div
          className={cn(
            "bg-sidebar rounded-md shadow-lg border border-sidebar-border",
            "p-2 mt-1 w-full",
            isIconOnly ? "ml-0" : "",
          )}
          data-oid="ohvpc7."
        >
          {submenu.map((subitem, index) => (
            <div
              key={subitem.name}
              className={cn(
                "transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0",
              )}
              data-oid="gyp3jzy"
            >
              <SubmenuItem
                name={subitem.name}
                href={subitem.href}
                isActive={currentPath === subitem.href}
                isIconOnly={isIconOnly}
                data-oid="tp4d5ky"
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
    <TooltipProvider data-oid="9rfj7to">
      <Tooltip data-oid="k-u0hon">
        <div
          className="flex items-center my-1 px-2 rounded-md hover:bg-sidebar-accent/10"
          data-oid="q920jyo"
        >
          {/* Indicador visual (siempre visible y estático) */}
          <TooltipTrigger asChild data-oid="_kgdir0">
            <Link
              to={href}
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-md",
                isActive
                  ? "text-sidebar-primary"
                  : "text-sidebar-foreground/60 hover:text-sidebar-accent-foreground",
              )}
              data-oid="h9wguug"
            >
              <span
                className={cn(
                  "w-2 h-2 rounded-full",
                  isActive ? "bg-sidebar-primary" : "bg-sidebar-foreground/40",
                )}
                data-oid="nt7rmhx"
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
            data-oid="nji:gjm"
          >
            <span className="text-sm" data-oid="ymyguvx">
              {name}
            </span>
          </Link>
        </div>
        {isIconOnly && (
          <TooltipContent side="right" data-oid="l96zj.7">
            {name}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
