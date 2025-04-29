import { Bell, Search, HelpCircle, User } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/shared/components/ui/dropdown-menu";
import { ThemeToggle } from "@/shared/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-background px-4 md:px-6 backdrop-blur-sm transition-all duration-300">
      <div className="flex items-center gap-2 lg:hidden">
        <span className="text-xl font-bold text-contable-primary">JARSS</span>
      </div>

      <div className="hidden md:flex md:flex-1 md:items-center md:gap-4 lg:gap-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Buscar transacciones, contactos..."
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 pl-8 pr-4 py-2 text-sm outline-none focus:border-contable-primary"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 gradient-primary text-white hover:brightness-110 transition-all duration-300">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-card text-card-foreground border border-border animate-scale-in">
            <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200">Perfil</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200">Ajustes</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200">Cerrar sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
