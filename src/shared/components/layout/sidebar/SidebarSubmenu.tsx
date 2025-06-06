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
      <TooltipProvider data-oid="4gf6un6">
        <Tooltip data-oid="3tgoa5x">
          <TooltipTrigger asChild data-oid="znfchi5">
            <button
              onClick={handleToggle}
              className={cn(
                "flex items-center justify-between w-full px-3 py-2.5 rounded-md group transition-all",
                isOpen
                  ? "bg-contable-primary text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-contable-primary dark:text-gray-300 dark:hover:bg-gray-800",
              )}
              data-oid="yxqz-ss"
            >
              <div className="flex items-center" data-oid="hrvlwb:">
                <Icon
                  className={cn(
                    "h-5 w-5",
                    isOpen
                      ? ""
                      : "text-gray-500 group-hover:text-contable-primary",
                  )}
                  data-oid=":.n7tk7"
                />

                {!isIconOnly && (
                  <span className="ml-3 text-sm" data-oid="mve7nka">
                    {name}
                  </span>
                )}
              </div>
              {!isIconOnly &&
                (isOpen ? (
                  <ChevronUp className="w-4 h-4" data-oid="55::jxc" />
                ) : (
                  <ChevronDown className="w-4 h-4" data-oid="nf3pk0v" />
                ))}
            </button>
          </TooltipTrigger>
          {isIconOnly && (
            <TooltipContent side="right" data-oid="wo-g:hk">
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
          data-oid="g9y1pb-"
        >
          {submenu.map((subitem) => (
            <SubmenuItem
              key={subitem.name}
              name={subitem.name}
              href={subitem.href}
              isActive={currentPath === subitem.href}
              isIconOnly={isIconOnly}
              data-oid="_7ivt_g"
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
    <TooltipProvider data-oid="p:9qmru">
      <Tooltip data-oid="v8pnjrp">
        <TooltipTrigger asChild data-oid="xj._lkl">
          <Link
            to={href}
            className={cn(
              "flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800",
              isActive
                ? "text-contable-primary font-medium bg-gray-50 dark:bg-gray-800"
                : "text-gray-600 dark:text-gray-400",
              isIconOnly ? "justify-center" : "",
            )}
            data-oid="ckn57i5"
          >
            {isIconOnly ? (
              <span
                className={cn(
                  "w-2 h-2 rounded-full",
                  isActive ? "bg-contable-primary" : "bg-gray-400",
                )}
                data-oid="f8cvor3"
              ></span>
            ) : (
              <span data-oid="kwyu7ip">{name}</span>
            )}
          </Link>
        </TooltipTrigger>
        {isIconOnly && (
          <TooltipContent side="right" data-oid="2fv0u8y">
            {name}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
