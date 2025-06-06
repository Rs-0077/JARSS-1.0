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
      data-oid="zu2la22"
    >
      <div
        className={cn("flex items-center", isIconOnly ? "flex-col" : "")}
        data-oid="8xu32re"
      >
        <div
          className="w-8 h-8 bg-contable-primary text-white rounded-full flex items-center justify-center"
          data-oid="u0hy8kk"
        >
          <span className="font-semibold" data-oid="7q0gs1x">
            EC
          </span>
        </div>
        {!isIconOnly && (
          <div className="ml-3" data-oid="4o4eslx">
            <p className="text-sm font-medium" data-oid="jp.yf.u">
              Empresa Demo
            </p>
            <p className="text-xs text-gray-500" data-oid="jplylp5">
              Plan: Profesional
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
