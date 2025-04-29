import { cn } from "@/lib/utils";

type SidebarHeaderProps = {
  isIconOnly: boolean;
};

export function SidebarHeader({ isIconOnly }: SidebarHeaderProps) {
  return (
    <div
      className="p-4 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 h-16 flex items-center"
    >
      <div className="flex items-center justify-center w-full">
        <img
          src="/lovable-uploads/a940ee28-144f-40e9-ba6e-90a6b7131190.png"
          alt="JARSS Logo"
          className="h-14 w-auto"
        />
        {!isIconOnly && (
          <div className="ml-3 transition-opacity duration-300">
            <h1 className="text-xl font-bold text-contable-primary">JARSS Inventory</h1>
            <p className="text-xs text-gray-500">Sistema de Inventario</p>
          </div>
        )}
      </div>
    </div>
  );
}
