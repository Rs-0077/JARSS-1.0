import { cn } from "@/lib/utils";

type SidebarProfileProps = {
  isIconOnly: boolean;
};

export function SidebarProfile({ isIconOnly }: SidebarProfileProps) {
  return (
    <div className={cn(
      "p-4 border-t border-gray-200 dark:border-gray-800",
      isIconOnly ? "text-center" : ""
    )}>
      <div className={cn(
        "flex items-center",
        isIconOnly ? "flex-col" : ""
      )}>
        <div className="w-8 h-8 bg-contable-primary text-white rounded-full flex items-center justify-center">
          <span className="font-semibold">JI</span>
        </div>
        {!isIconOnly && (
          <div className="ml-3">
            <p className="text-sm font-medium">JARRS Inventory</p>
            <p className="text-xs text-gray-500">Plan: Enterprise</p>
          </div>
        )}
      </div>
    </div>
  );
}
