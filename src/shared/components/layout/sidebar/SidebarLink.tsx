import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";

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
        <TooltipTrigger asChild>
          <Link
            to={href}
            className={cn(
              "flex items-center px-3 py-2.5 rounded-md group transition-all duration-300",
              isActive
                ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-md"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              isIconOnly ? "justify-center" : ""
            )}
          >
            <Icon className={cn(
              "h-5 w-5 transition-transform duration-300",
              isActive
                ? "text-sidebar-primary-foreground"
                : "text-sidebar-foreground group-hover:text-sidebar-accent-foreground",
              !isIconOnly && "group-hover:scale-110"
            )} />
            {!isIconOnly && (
              <span className={cn(
                "ml-3 text-sm transition-all duration-300",
                isActive ? "font-medium" : ""
              )}>
                {name}
              </span>
            )}
          </Link>
        </TooltipTrigger>
        {isIconOnly && <TooltipContent side="right">{name}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
}
