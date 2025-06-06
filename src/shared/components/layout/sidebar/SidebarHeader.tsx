import { cn } from "@/lib/utils";

type SidebarHeaderProps = {
  isIconOnly: boolean;
};

export function SidebarHeader({ isIconOnly }: SidebarHeaderProps) {
  return (
    <div
      className="p-4 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 h-16 flex items-center"
      data-oid="lja-73_"
    >
      <div
        className="flex items-center justify-center w-full"
        data-oid="6qwtbsr"
      >
        {!isIconOnly && (
          <div
            className="ml-3 transition-opacity duration-300"
            data-oid="0mqmekj"
          >
            <h1
              className="text-xl font-bold text-contable-primary"
              data-oid="g2iu2o6"
            >
              JARSS Inventory
            </h1>
            <p className="text-xs text-gray-500" data-oid="d4jzt:m">
              Sistema de Inventario
            </p>
          </div>
        )}
        <svg
          width={size}
          height={size}
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          data-oid="00_eahx"
        >
          {/* Rombo exterior */}
          <path
            d="M250 50L450 250L250 450L50 250L250 50Z"
            fill={color}
            stroke="none"
            data-oid="y5cwbcu"
          />

          {/* Rombo interior */}
          <path
            d="M250 120L380 250L250 380L120 250L250 120Z"
            fill="currentColor"
            className="text-background dark:text-sidebar"
            stroke="none"
            data-oid="50270jk"
          />

          {/* Detalles internos */}
          <path
            d="M250 150L350 250L250 350L150 250L250 150Z"
            fill={color}
            stroke="none"
            data-oid="jcuo_d7"
          />

          {/* Círculo central */}
        </svg>
      </div>
    </div>
  );
}
