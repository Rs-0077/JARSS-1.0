import { cn } from "@/lib/utils";

type SidebarProfileProps = {
  isIconOnly: boolean;
};

export function SidebarProfile({ isIconOnly }: SidebarProfileProps) {
  return (
    <div
      className={cn(
        "p-4 border-t border-gray-200 dark:border-gray-800",
        isIconOnly ? "text-center" : "",
      )}
      data-oid="_t_0lls"
    >
      <div
        className={cn("flex items-center", isIconOnly ? "flex-col" : "")}
        data-oid=":3s44:7"
      >
        <div
          className="w-8 h-8 bg-contable-primary text-white rounded-full flex items-center justify-center"
          data-oid="5:p1fc-"
        >
          <span className="font-semibold" data-oid="r3:p0x0">
            JI
          </span>
        </div>
        {!isIconOnly && (
          <div className="ml-3" data-oid="7c7xj-:">
            <p className="text-sm font-medium" data-oid="h6ik3mr">
              JARRS Inventory
            </p>
            <p className="text-xs text-gray-500" data-oid="pi5yuzd">
              Plan: Enterprise
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
