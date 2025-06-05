import { cn } from "@/lib/utils";
import { JarssLogo } from "@/components/icons/JarssLogo";

type SidebarHeaderProps = {
  isIconOnly: boolean;
};

export function SidebarHeader({ isIconOnly }: SidebarHeaderProps) {
  return (
    <div
      className="border-b border-sidebar-border h-16 flex items-center"
      data-oid="w89l_zb"
    >
      <div className="flex items-center" data-oid="8-xp08w">
        {/* Logo (siempre visible y estático) */}
        <div
          className="flex items-center justify-center w-16 h-16"
          data-oid="dq80oi5"
        >
          <JarssLogo
            size={40}
            className="text-sidebar-primary"
            data-oid="u5n:iex"
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
            data-oid="kicy9pu"
          >
            <h1
              className="text-xl font-bold text-sidebar-primary"
              data-oid="nxam5ej"
            >
              JARSS
            </h1>
            <p
              className="text-xs text-sidebar-foreground/70"
              data-oid="z3683_5"
            >
              Inventory
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
