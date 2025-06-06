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
      data-oid=".mkji5w"
    >
      <div
        className={cn("flex items-center", isIconOnly ? "flex-col" : "")}
        data-oid="3a-qv49"
      >
        <div
          className="w-8 h-8 bg-contable-primary text-white rounded-full flex items-center justify-center"
          data-oid=":.n353w"
        >
          <span className="font-semibold" data-oid="cs-sjq4">
            EC
          </span>
        </div>
        {!isIconOnly && (
          <div className="ml-3" data-oid="tyeavg-">
            <p className="text-sm font-medium" data-oid="k7afgox">
              Empresa Demo
            </p>
            <p className="text-xs text-gray-500" data-oid="hb0iyas">
              Plan: Profesional
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
