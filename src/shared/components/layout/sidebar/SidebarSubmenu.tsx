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
      <TooltipProvider data-oid="e_74v21">
        <Tooltip data-oid="1vn0y._">
          <TooltipTrigger asChild data-oid="1p9q-f3">
            <button
              onClick={handleToggle}
              className={cn(
                "flex items-center justify-between w-full px-3 py-2.5 rounded-md group transition-all",
                isOpen
                  ? "bg-contable-primary text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-contable-primary dark:text-gray-300 dark:hover:bg-gray-800",
              )}
              data-oid="-yfmqx8"
            >
              <div className="flex items-center" data-oid="28wfces">
                <Icon
                  className={cn(
                    "h-5 w-5",
                    isOpen
                      ? ""
                      : "text-gray-500 group-hover:text-contable-primary",
                  )}
                  data-oid="mcknrj9"
                />

                {!isIconOnly && (
                  <span className="ml-3 text-sm" data-oid="yga2:f5">
                    {name}
                  </span>
                )}
              </div>
              {!isIconOnly &&
                (isOpen ? (
                  <ChevronUp className="w-4 h-4" data-oid="n1:1y:p" />
                ) : (
                  <ChevronDown className="w-4 h-4" data-oid="la90k0:" />
                ))}
            </button>
          </TooltipTrigger>
          {isIconOnly && (
            <TooltipContent side="right" data-oid=":ohm0on">
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
          data-oid="7i3v-gb"
        >
          {submenu.map((subitem) => (
            <SubmenuItem
              key={subitem.name}
              name={subitem.name}
              href={subitem.href}
              isActive={currentPath === subitem.href}
              isIconOnly={isIconOnly}
              data-oid="n9bvz3r"
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
    <TooltipProvider data-oid="e1npk59">
      <Tooltip data-oid="zmpofhg">
        <TooltipTrigger asChild data-oid="pk58s7i">
          <Link
            to={href}
            className={cn(
              "flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800",
              isActive
                ? "text-contable-primary font-medium bg-gray-50 dark:bg-gray-800"
                : "text-gray-600 dark:text-gray-400",
              isIconOnly ? "justify-center" : "",
            )}
            data-oid="uxhb:41"
          >
            {isIconOnly ? (
              <span
                className={cn(
                  "w-2 h-2 rounded-full",
                  isActive ? "bg-contable-primary" : "bg-gray-400",
                )}
                data-oid="g:ojvrt"
              ></span>
            ) : (
              <span data-oid="p_f7jlf">{name}</span>
            )}
          </Link>
        </TooltipTrigger>
        {isIconOnly && (
          <TooltipContent side="right" data-oid="v62a2uk">
            {name}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
