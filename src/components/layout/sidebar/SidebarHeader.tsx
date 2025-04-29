
import { cn } from "@/lib/utils";
import { JarssLogo } from "@/components/icons/JarssLogo";

type SidebarHeaderProps = {
  isIconOnly: boolean;
};

export function SidebarHeader({ isIconOnly }: SidebarHeaderProps) {
  return (
    <div
      className="border-b border-sidebar-border h-16 flex items-center"
    >
      <div className="flex items-center">
        {/* Logo (siempre visible y estático) */}
        <div className="flex items-center justify-center w-16 h-16">
          <JarssLogo
            size={40}
            className="text-sidebar-primary"
          />
        </div>

        {/* Texto (se despliega/oculta) */}
        {!isIconOnly && (
          <div
            className="h-16 flex flex-col justify-center"
            style={{
              width: isIconOnly ? 0 : 'auto',
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }}
          >
            <h1 className="text-xl font-bold text-sidebar-primary">JARSS</h1>
            <p className="text-xs text-sidebar-foreground/70">Inventory</p>
          </div>
        )}
      </div>
    </div>
  );
}
