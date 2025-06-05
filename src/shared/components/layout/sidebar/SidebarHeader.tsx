import { cn } from "@/lib/utils";

type SidebarHeaderProps = {
  isIconOnly: boolean;
};

export function SidebarHeader({ isIconOnly }: SidebarHeaderProps) {
  return (
    <div
      className="p-4 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 h-16 flex items-center"
      data-oid="fy0jb79"
    >
      <div
        className="flex items-center justify-center w-full"
        data-oid="p_9epjg"
      >
        <img
          src="/lovable-uploads/a940ee28-144f-40e9-ba6e-90a6b7131190.png"
          alt="JARSS Logo"
          className="h-14 w-auto"
          data-oid="fuh1tti"
        />

        {!isIconOnly && (
          <div
            className="ml-3 transition-opacity duration-300"
            data-oid="ky.non7"
          >
            <h1
              className="text-xl font-bold text-contable-primary"
              data-oid="mbka2k2"
            >
              JARSS Inventory
            </h1>
            <p className="text-xs text-gray-500" data-oid="2e2533q">
              Sistema de Inventario
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
