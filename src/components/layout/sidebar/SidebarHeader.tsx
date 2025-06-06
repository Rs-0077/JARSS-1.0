import { cn } from "@/lib/utils";
import { JarssLogo } from "@/components/icons/JarssLogo";

type SidebarHeaderProps = {
  isIconOnly: boolean;
};

export function SidebarHeader({ isIconOnly }: SidebarHeaderProps) {
  return (
    <div
      className="border-b border-sidebar-border h-16 flex items-center"
      data-oid=".y_nq.."
    >
      <div className="flex items-center" data-oid="mxcx125">
        {/* Logo (siempre visible y estático) */}
        <div
          className="flex items-center justify-center w-16 h-16"
          data-oid="u4ik.k."
        >
          <JarssLogo
            size={40}
            color="currentColor"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            data-oid="spohph_"
          />
        </div>

        {/* Texto (se despliega/oculta) */}
        {!isIconOnly && (
          <div
            className="h-16 flex flex-col justify-center"
            style={{
              width: isIconOnly ? 0 : "auto",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            data-oid="mljx-8r"
          >
            <h1
              className="text-xl font-bold text-white dark:text-gray-100 hover:text-gray-200 dark:hover:text-white transition-colors"
              data-oid="xzbavg5"
            >
              JARSS
            </h1>
            <p
              className="text-xs text-sidebar-foreground/70"
              data-oid="48:u-41"
            >
              Inventory
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
