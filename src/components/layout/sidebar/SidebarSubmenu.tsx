
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
  onToggle
}: SidebarSubmenuProps) {
  const handleToggle = () => {
    onToggle(name);
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <div className="flex items-center relative">
            {/* Contenedor del icono (siempre visible y estático) */}
            <TooltipTrigger asChild>
              <button
                onClick={handleToggle}
                className={cn(
                  "flex items-center justify-center w-16 h-10 rounded-md",
                  isOpen
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:text-sidebar-accent-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
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
                    : "text-sidebar-foreground hover:text-sidebar-accent-foreground"
                )}
                style={{
                  width: isIconOnly ? 0 : 'auto',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  flex: 1
                }}
              >
                <span className="text-sm">
                  {name}
                </span>
                <div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>
            )}
          </div>
          {isIconOnly && <TooltipContent side="right">{name}</TooltipContent>}
        </Tooltip>
      </TooltipProvider>

      <div
        className={cn(
          "absolute left-0 z-50 transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{
          top: "100%",
          width: isIconOnly ? "200px" : "240px"
        }}
      >
        <div className={cn(
          "bg-sidebar rounded-md shadow-lg border border-sidebar-border",
          "p-2 mt-1 w-full",
          isIconOnly ? "ml-0" : ""
        )}>
          {submenu.map((subitem, index) => (
            <div
              key={subitem.name}
              className={cn(
                "transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0"
              )}
            >
              <SubmenuItem
                name={subitem.name}
                href={subitem.href}
                isActive={currentPath === subitem.href}
                isIconOnly={isIconOnly}
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
    <TooltipProvider>
      <Tooltip>
        <div className="flex items-center my-1 px-2 rounded-md hover:bg-sidebar-accent/10">
          {/* Indicador visual (siempre visible y estático) */}
          <TooltipTrigger asChild>
            <Link
              to={href}
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-md",
                isActive
                  ? "text-sidebar-primary"
                  : "text-sidebar-foreground/60 hover:text-sidebar-accent-foreground"
              )}
            >
              <span className={cn(
                "w-2 h-2 rounded-full",
                isActive ? "bg-sidebar-primary" : "bg-sidebar-foreground/40"
              )}></span>
            </Link>
          </TooltipTrigger>

          {/* Texto del submenú */}
          <Link
            to={href}
            className={cn(
              "h-8 py-1.5 pl-2 flex-1 rounded-r-md",
              isActive
                ? "text-sidebar-primary font-medium"
                : "text-sidebar-foreground hover:text-sidebar-accent-foreground"
            )}
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <span className="text-sm">{name}</span>
          </Link>
        </div>
        {isIconOnly && <TooltipContent side="right">{name}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
}
