
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SidebarLinkProps = {
  name: string;
  icon: React.ComponentType<any>;
  href: string;
  isActive: boolean;
  isIconOnly: boolean;
};

export function SidebarLink({ name, icon: Icon, href, isActive, isIconOnly }: SidebarLinkProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <div className="flex items-center">
          {/* Contenedor del icono (siempre visible y estático) */}
          <TooltipTrigger asChild>
            <Link
              to={href}
              className={cn(
                "flex items-center justify-center w-16 h-10 rounded-md",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
            </Link>
          </TooltipTrigger>

          {/* Contenedor del texto (se despliega/oculta) */}
          {!isIconOnly && (
            <Link
              to={href}
              className={cn(
                "h-10 py-2.5 pl-3 flex-1 rounded-r-md",
                isActive
                  ? "bg-sidebar-accent/20 text-sidebar-primary font-medium"
                  : "text-sidebar-foreground hover:text-sidebar-accent-foreground"
              )}
              style={{
                width: isIconOnly ? 0 : 'auto',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <span className="text-sm">
                {name}
              </span>
            </Link>
          )}
        </div>
        {isIconOnly && <TooltipContent side="right">{name}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
}
