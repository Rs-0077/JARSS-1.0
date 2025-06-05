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
      data-oid="wgox8-p"
    >
      <div
        className={cn("flex items-center", isIconOnly ? "flex-col" : "")}
        data-oid=":atnj:j"
      >
        <div
          className="w-8 h-8 bg-contable-primary text-white rounded-full flex items-center justify-center"
          data-oid="s1x42je"
        >
          <span className="font-semibold" data-oid="4itee8b">
            EC
          </span>
        </div>
        {!isIconOnly && (
          <div className="ml-3" data-oid="es3e37e">
            <p className="text-sm font-medium" data-oid="2q:.4jy">
              Empresa Demo
            </p>
            <p className="text-xs text-gray-500" data-oid="73xujhm">
              Plan: Profesional
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
