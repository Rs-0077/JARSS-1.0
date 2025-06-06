import { Menu, X } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

type SidebarToggleProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export function SidebarToggle({ isOpen, toggleSidebar }: SidebarToggleProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed top-4 left-4 z-50 lg:hidden rounded-full bg-white/90 backdrop-blur-sm shadow-md dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800"
      onClick={toggleSidebar}
      data-oid="0vmihnx"
    >
      {isOpen ? (
        <X size={20} data-oid="uroxzo:" />
      ) : (
        <Menu size={20} data-oid="rv6z24h" />
      )}
    </Button>
  );
}
