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
      data-oid="s-.x3m9"
    >
      <div
        className={cn("flex items-center", isIconOnly ? "flex-col" : "")}
        data-oid="o7zhhqi"
      >
        <div
          className="w-8 h-8 bg-contable-primary text-white rounded-full flex items-center justify-center"
          data-oid="6s9l5o5"
        >
          <span className="font-semibold" data-oid="g392e8y">
            JI
          </span>
        </div>
        {!isIconOnly && (
          <div className="ml-3" data-oid="7ai2ko3">
            <p className="text-sm font-medium" data-oid="znehq3.">
              JARRS Inventory
            </p>
            <p className="text-xs text-gray-500" data-oid="se4skbo">
              Plan: Enterprise
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
