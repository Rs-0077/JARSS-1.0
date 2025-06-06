import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";

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
      <TooltipProvider data-oid="ey_wwus">
        <Tooltip data-oid=":t77vwx">
          <TooltipTrigger asChild data-oid="3lioc9b">
            <button
              onClick={handleToggle}
              className={cn(
                "flex items-center justify-between w-full px-3 py-2.5 rounded-md group transition-all",
                isOpen
                  ? "bg-contable-primary text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-contable-primary dark:text-gray-300 dark:hover:bg-gray-800",
              )}
              data-oid="iv-ph.5"
            >
              <div className="flex items-center" data-oid="3stzw17">
                <Icon
                  className={cn(
                    "h-5 w-5",
                    isOpen
                      ? ""
                      : "text-gray-500 group-hover:text-contable-primary",
                  )}
                  data-oid="37aczy3"
                />

                {!isIconOnly && (
                  <span className="ml-3 text-sm" data-oid="weh99df">
                    {name}
                  </span>
                )}
              </div>
              {!isIconOnly &&
                (isOpen ? (
                  <ChevronUp className="w-4 h-4" data-oid="cpd8ppc" />
                ) : (
                  <ChevronDown className="w-4 h-4" data-oid="pkvzbyh" />
                ))}
            </button>
          </TooltipTrigger>
          {isIconOnly && (
            <TooltipContent side="right" data-oid="baxwn5t">
              {name}
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>

      {isOpen && (
        <div
          className={cn(
            "mt-1 space-y-1 pl-3 pr-1",
            isIconOnly
              ? "ml-0"
              : "ml-7 border-l border-gray-200 dark:border-gray-700",
          )}
          data-oid="206l38-"
        >
          {submenu.map((subitem) => (
            <SubmenuItem
              key={subitem.name}
              name={subitem.name}
              href={subitem.href}
              isActive={currentPath === subitem.href}
              isIconOnly={isIconOnly}
              data-oid=":t68sjl"
            />
          ))}
        </div>
      )}
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
    <TooltipProvider data-oid="-iqhpi7">
      <Tooltip data-oid="k8:3rzk">
        <TooltipTrigger asChild data-oid="-acc.5x">
          <Link
            to={href}
            className={cn(
              "flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800",
              isActive
                ? "text-contable-primary font-medium bg-gray-50 dark:bg-gray-800"
                : "text-gray-600 dark:text-gray-400",
              isIconOnly ? "justify-center" : "",
            )}
            data-oid="7j2v643"
          >
            {isIconOnly ? (
              <span
                className={cn(
                  "w-2 h-2 rounded-full",
                  isActive ? "bg-contable-primary" : "bg-gray-400",
                )}
                data-oid="ena0zx."
              ></span>
            ) : (
              <span data-oid="p2qalex">{name}</span>
            )}
          </Link>
        </TooltipTrigger>
        {isIconOnly && (
          <TooltipContent side="right" data-oid="b603u7j">
            {name}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
