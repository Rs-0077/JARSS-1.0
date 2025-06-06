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
      data-oid="o919b9d"
    >
      <div
        className={cn("flex items-center", isIconOnly ? "flex-col" : "")}
        data-oid="--2zw-1"
      >
        <div
          className="w-8 h-8 bg-contable-primary text-white rounded-full flex items-center justify-center"
          data-oid="cvq:pcx"
        >
          <span className="font-semibold" data-oid="sxveyqt">
            JI
          </span>
        </div>
        {!isIconOnly && (
          <div className="ml-3" data-oid="-hjamk_">
            <p className="text-sm font-medium" data-oid="cggv0bp">
              JARRS Inventory
            </p>
            <p className="text-xs text-gray-500" data-oid="lvjol-9">
              Plan: Enterprise
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
