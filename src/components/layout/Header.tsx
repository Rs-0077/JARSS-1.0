import { Search, HelpCircle, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/shared/components/theme-toggle";
import {
  NotificationCenter,
  type Notification,
} from "@/components/ui/notification-center";
import { useState, useEffect } from "react";
import { STORAGE_KEYS } from "@/core/config";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UserPreferencesPanel } from "@/components/ui/user-preferences";

export function Header() {
  // Estado para las notificaciones
  const [notifications, setNotifications] = useState<Notification[]>([]);
  // Estado para el diálogo de preferencias
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  // Cargar notificaciones guardadas
  useEffect(() => {
    const savedNotifications = localStorage.getItem(STORAGE_KEYS.notifications);
    if (savedNotifications) {
      try {
        const parsed = JSON.parse(savedNotifications);
        setNotifications(parsed);
      } catch (error) {
        console.error("Error parsing saved notifications:", error);
      }
    } else {
      // Notificaciones de ejemplo si no hay guardadas
      const exampleNotifications: Notification[] = [
        {
          id: "1",
          title: "Bienvenido a JARSS Inventory",
          message:
            "Gracias por usar nuestra aplicación. Explora todas las funcionalidades disponibles.",
          type: "info",
          timestamp: new Date(),
          read: false,
          actionLabel: "Ver tour",
        },
        {
          id: "2",
          title: "Nuevas funcionalidades disponibles",
          message:
            "Hemos añadido nuevas características para mejorar tu experiencia.",
          type: "success",
          timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 día atrás
          read: false,
        },
      ];

      setNotifications(exampleNotifications);
      localStorage.setItem(
        STORAGE_KEYS.notifications,
        JSON.stringify(exampleNotifications),
      );
    }
  }, []);

  // Funciones para gestionar notificaciones
  const handleMarkAsRead = (id: string) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification,
    );
    setNotifications(updatedNotifications);
    localStorage.setItem(
      STORAGE_KEYS.notifications,
      JSON.stringify(updatedNotifications),
    );
  };

  const handleMarkAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications);
    localStorage.setItem(
      STORAGE_KEYS.notifications,
      JSON.stringify(updatedNotifications),
    );
  };

  const handleDismiss = (id: string) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id,
    );
    setNotifications(updatedNotifications);
    localStorage.setItem(
      STORAGE_KEYS.notifications,
      JSON.stringify(updatedNotifications),
    );
  };

  const handleClearAll = () => {
    setNotifications([]);
    localStorage.setItem(STORAGE_KEYS.notifications, JSON.stringify([]));
  };

  return (
    <header
      className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-background/80 px-4 md:px-6 backdrop-blur-sm transition-all duration-300"
      data-oid="gn1oc28"
    >
      <div className="flex items-center gap-2 lg:hidden" data-oid="ib1xegk">
        <span
          className="text-xl font-bold text-contable-primary"
          data-oid="q7wg77e"
        >
          JARSS
        </span>
      </div>

      <div
        className="hidden md:flex md:flex-1 md:items-center md:gap-4 lg:gap-8"
        data-oid="sl6dg-q"
      >
        <div className="relative flex-1 max-w-md" data-oid="6mzob8n">
          <Search
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
            data-oid="_k5-bht"
          />

          <input
            type="search"
            placeholder="Buscar transacciones, contactos..."
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 pl-8 pr-4 py-2 text-sm outline-none focus:border-contable-primary"
            data-oid="wpyq.8a"
          />
        </div>
      </div>

      <div className="flex items-center gap-4" data-oid="u148i_o">
        <ThemeToggle data-oid="me4pe7z" />

        {/* Centro de notificaciones */}
        <NotificationCenter
          notifications={notifications}
          onMarkAsRead={handleMarkAsRead}
          onMarkAllAsRead={handleMarkAllAsRead}
          onDismiss={handleDismiss}
          onClearAll={handleClearAll}
          data-oid="ie:sxig"
        />

        {/* Botón de ayuda */}
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          onClick={() => {
            // Aquí se podría abrir un diálogo de ayuda o un tour guiado
            const helpNotification: Notification = {
              id: Date.now().toString(),
              title: "Centro de ayuda",
              message:
                "Encuentra guías, tutoriales y respuestas a preguntas frecuentes.",
              type: "info",
              timestamp: new Date(),
              read: false,
              actionLabel: "Ver ayuda",
            };
            setNotifications([helpNotification, ...notifications]);
            localStorage.setItem(
              STORAGE_KEYS.notifications,
              JSON.stringify([helpNotification, ...notifications]),
            );
          }}
          data-oid="9:nq6ur"
        >
          <HelpCircle className="h-5 w-5" data-oid="g5ee-4z" />
        </Button>

        {/* Menú de usuario */}
        <DropdownMenu data-oid="dscqmbk">
          <DropdownMenuTrigger asChild data-oid=".k1a3o.">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9 gradient-primary text-white hover:brightness-110 transition-all duration-300"
              data-oid="9h6kw4_"
            >
              <User className="h-5 w-5" data-oid="c1ko9uz" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 bg-card text-card-foreground border border-border animate-scale-in"
            data-oid="5lr:xd."
          >
            <DropdownMenuLabel data-oid="99q7kad">Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator data-oid="3cuk6ld" />
            <DropdownMenuItem
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              data-oid=".6cpc:y"
            >
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              onClick={() => setPreferencesOpen(true)}
              data-oid="vdw66qa"
            >
              <Settings className="h-4 w-4 mr-2" data-oid="8ypv270" />
              Preferencias
            </DropdownMenuItem>
            <DropdownMenuSeparator data-oid="ug0v_rz" />
            <DropdownMenuItem
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              data-oid="_iiiinu"
            >
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Diálogo de preferencias de usuario */}
      <Dialog
        open={preferencesOpen}
        onOpenChange={setPreferencesOpen}
        data-oid="59.sm5q"
      >
        <DialogContent className="sm:max-w-[600px]" data-oid="pxquayl">
          <DialogHeader data-oid="w_sq98l">
            <DialogTitle data-oid="snvw-4w">
              Preferencias de usuario
            </DialogTitle>
          </DialogHeader>
          <UserPreferencesPanel
            onSave={() => {
              setPreferencesOpen(false);
              // Notificar al usuario que se guardaron las preferencias
              const prefsNotification: Notification = {
                id: Date.now().toString(),
                title: "Preferencias guardadas",
                message:
                  "Tus preferencias han sido actualizadas correctamente.",
                type: "success",
                timestamp: new Date(),
                read: false,
              };
              setNotifications([prefsNotification, ...notifications]);
              localStorage.setItem(
                STORAGE_KEYS.notifications,
                JSON.stringify([prefsNotification, ...notifications]),
              );
            }}
            data-oid="t-qaz2q"
          />
        </DialogContent>
      </Dialog>
    </header>
  );
}
