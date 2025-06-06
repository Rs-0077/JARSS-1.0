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
      data-oid="45h0plc"
    >
      <div className="flex items-center gap-2 lg:hidden" data-oid="_e5i_:9">
        <span
          className="text-xl font-bold text-contable-primary"
          data-oid="yg7oj-7"
        >
          JARSS
        </span>
      </div>

      <div
        className="hidden md:flex md:flex-1 md:items-center md:gap-4 lg:gap-8"
        data-oid="-_qkw9p"
      >
        <div className="relative flex-1 max-w-md" data-oid="jf5ksm8">
          <Search
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
            data-oid="yngkn_r"
          />

          <input
            type="search"
            placeholder="Buscar transacciones, contactos..."
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 pl-8 pr-4 py-2 text-sm outline-none focus:border-contable-primary"
            data-oid="a0upsz5"
          />
        </div>
      </div>

      <div className="flex items-center gap-4" data-oid="gldd4b0">
        <ThemeToggle data-oid="w6jcjwt" />
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          data-oid="pkrevjv"
        >
          <Bell className="h-5 w-5" data-oid=":p1:5h3" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          data-oid="mxiw793"
        >
          <HelpCircle className="h-5 w-5" data-oid="9e-tn_t" />
        </Button>
        <DropdownMenu data-oid="t6l-ia6">
          <DropdownMenuTrigger asChild data-oid="7-ts675">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9 gradient-primary text-white hover:brightness-110 transition-all duration-300"
              data-oid="qwq47ym"
            >
              <User className="h-5 w-5" data-oid="0copkkm" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 bg-card text-card-foreground border border-border animate-scale-in"
            data-oid="8eetwwh"
          >
            <DropdownMenuLabel data-oid="9g16o4.">Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator data-oid=".dp42e3" />
            <DropdownMenuItem
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              data-oid="p23itj0"
            >
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              data-oid="yha0h95"
            >
              Ajustes
            </DropdownMenuItem>
            <DropdownMenuSeparator data-oid="plmnyw_" />
            <DropdownMenuItem
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              data-oid="wuptzbh"
            >
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
