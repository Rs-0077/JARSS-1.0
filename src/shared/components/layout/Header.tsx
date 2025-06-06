import { Bell, Search, HelpCircle, User } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { ThemeToggle } from "@/shared/components/theme-toggle";

export function Header() {
  return (
    <header
      className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-background px-4 md:px-6 backdrop-blur-sm transition-all duration-300"
      data-oid="91djklt"
    >
      <div className="flex items-center gap-2 lg:hidden" data-oid="2f8t96f">
        <span
          className="text-xl font-bold text-contable-primary"
          data-oid="wax8hgg"
        >
          JARSS
        </span>
      </div>

      <div
        className="hidden md:flex md:flex-1 md:items-center md:gap-4 lg:gap-8"
        data-oid="yj.3n02"
      >
        <div className="relative flex-1 max-w-md" data-oid="-::vk6d">
          <Search
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
            data-oid="ndl6-sz"
          />

          <input
            type="search"
            placeholder="Buscar transacciones, contactos..."
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 pl-8 pr-4 py-2 text-sm outline-none focus:border-contable-primary"
            data-oid="-se10ho"
          />
        </div>
      </div>

      <div className="flex items-center gap-4" data-oid="mu7..pd">
        <ThemeToggle data-oid="lwjhmsd" />
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          data-oid="np0hopp"
        >
          <Bell className="h-5 w-5" data-oid="b5v59tf" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          data-oid="lv11dkw"
        >
          <HelpCircle className="h-5 w-5" data-oid="-ww_d-t" />
        </Button>
        <DropdownMenu data-oid="gd7aeac">
          <DropdownMenuTrigger asChild data-oid="kd9dkyv">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9 gradient-primary text-white hover:brightness-110 transition-all duration-300"
              data-oid=".x4vgk5"
            >
              <User className="h-5 w-5" data-oid="wwzu1:q" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 bg-card text-card-foreground border border-border animate-scale-in"
            data-oid="qla1nnb"
          >
            <DropdownMenuLabel data-oid="0e2ryx3">Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator data-oid=":xj7-_x" />
            <DropdownMenuItem
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              data-oid="m.x4tj3"
            >
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              data-oid="yjzm.bf"
            >
              Ajustes
            </DropdownMenuItem>
            <DropdownMenuSeparator data-oid="56j708." />
            <DropdownMenuItem
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              data-oid="s7qtqi_"
            >
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
