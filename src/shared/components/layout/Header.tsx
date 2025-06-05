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
      data-oid="nv-ghdv"
    >
      <div className="flex items-center gap-2 lg:hidden" data-oid="vsc7k0b">
        <span
          className="text-xl font-bold text-contable-primary"
          data-oid="mpr0-nd"
        >
          JARSS
        </span>
      </div>

      <div
        className="hidden md:flex md:flex-1 md:items-center md:gap-4 lg:gap-8"
        data-oid="1:u2cdc"
      >
        <div className="relative flex-1 max-w-md" data-oid="11.zwky">
          <Search
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
            data-oid="ey69p1j"
          />

          <input
            type="search"
            placeholder="Buscar transacciones, contactos..."
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 pl-8 pr-4 py-2 text-sm outline-none focus:border-contable-primary"
            data-oid="w21kk9w"
          />
        </div>
      </div>

      <div className="flex items-center gap-4" data-oid="hk18oef">
        <ThemeToggle data-oid="emqu_.p" />
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          data-oid="28brc77"
        >
          <Bell className="h-5 w-5" data-oid="j:b_d7-" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          data-oid="v:_o59:"
        >
          <HelpCircle className="h-5 w-5" data-oid="55.6dqf" />
        </Button>
        <DropdownMenu data-oid="y_9t06l">
          <DropdownMenuTrigger asChild data-oid="wthr87y">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9 gradient-primary text-white hover:brightness-110 transition-all duration-300"
              data-oid="4zd5m-5"
            >
              <User className="h-5 w-5" data-oid="5gy_uz_" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 bg-card text-card-foreground border border-border animate-scale-in"
            data-oid="04wh:vl"
          >
            <DropdownMenuLabel data-oid="1xsm459">Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator data-oid="n9bk.yo" />
            <DropdownMenuItem
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              data-oid="doa-lxv"
            >
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              data-oid="xzduyqu"
            >
              Ajustes
            </DropdownMenuItem>
            <DropdownMenuSeparator data-oid="ra.auy0" />
            <DropdownMenuItem
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              data-oid="og9ep1m"
            >
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
