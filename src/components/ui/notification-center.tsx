import React, { useState, useEffect } from "react";
import { Bell, X, Check, AlertTriangle, Info, Ban } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type NotificationType = "info" | "success" | "warning" | "error";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  timestamp: Date;
  read: boolean;
  actionLabel?: string;
  actionFn?: () => void;
}

interface NotificationCenterProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onDismiss: (id: string) => void;
  onClearAll: () => void;
}

export function NotificationCenter({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onDismiss,
  onClearAll,
}: NotificationCenterProps) {
  const [open, setOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const count = notifications.filter((n) => !n.read).length;
    setUnreadCount(count);
  }, [notifications]);

  const handleNotificationClick = (notification: Notification) => {
    if (!notification.read) {
      onMarkAsRead(notification.id);
    }

    if (notification.actionFn) {
      notification.actionFn();
    }
  };

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "success":
        return <Check className="h-5 w-5 text-green-500" data-oid="0s8h9ls" />;
      case "warning":
        return (
          <AlertTriangle
            className="h-5 w-5 text-amber-500"
            data-oid="y8q5jow"
          />
        );

      case "error":
        return <Ban className="h-5 w-5 text-red-500" data-oid="-uwe03r" />;
      case "info":
      default:
        return <Info className="h-5 w-5 text-blue-500" data-oid="xojzjcx" />;
    }
  };

  const getNotificationClasses = (type: NotificationType, read: boolean) => {
    return cn(
      "p-4 rounded-lg mb-2 border transition-all duration-200 ease-in-out",
      read ? "bg-background opacity-70" : "bg-background shadow-sm",
      {
        "border-green-200 hover:border-green-300": type === "success",
        "border-amber-200 hover:border-amber-300": type === "warning",
        "border-red-200 hover:border-red-300": type === "error",
        "border-blue-200 hover:border-blue-300": type === "info",
      },
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen} data-oid="yhq8bfu">
      <SheetTrigger asChild data-oid="fa4h2hm">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          data-oid="fp3vosc"
        >
          <Bell className="h-5 w-5" data-oid="6dot30_" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
              data-oid="vfs4sf_"
            >
              {unreadCount}
            </Badge>
          )}
          <span className="sr-only" data-oid="-gek4yj">
            Notificaciones
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md" data-oid="u86rm51">
        <SheetHeader
          className="flex flex-row items-center justify-between"
          data-oid="_gl5y96"
        >
          <SheetTitle data-oid="8htmay3">Notificaciones</SheetTitle>
          <div className="flex space-x-2" data-oid="nabauqm">
            <Button
              variant="outline"
              size="sm"
              onClick={onMarkAllAsRead}
              disabled={unreadCount === 0}
              data-oid="lrcfkyl"
            >
              Marcar todo como leído
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onClearAll}
              disabled={notifications.length === 0}
              data-oid="9v95la."
            >
              Limpiar todo
            </Button>
          </div>
        </SheetHeader>

        <Tabs defaultValue="all" className="mt-4" data-oid="y08gavn">
          <TabsList className="grid w-full grid-cols-3" data-oid="qa:bzts">
            <TabsTrigger value="all" data-oid="yzt-nvm">
              Todas ({notifications.length})
            </TabsTrigger>
            <TabsTrigger value="unread" data-oid="nvf6zng">
              No leídas ({unreadCount})
            </TabsTrigger>
            <TabsTrigger value="read" data-oid="dhqdpa:">
              Leídas ({notifications.length - unreadCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="all"
            className="mt-4 max-h-[70vh] overflow-y-auto"
            data-oid="8mcovik"
          >
            {notifications.length === 0 ? (
              <div
                className="text-center py-8 text-muted-foreground"
                data-oid="447womk"
              >
                No hay notificaciones
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={getNotificationClasses(
                    notification.type,
                    notification.read,
                  )}
                  onClick={() => handleNotificationClick(notification)}
                  data-oid="qb4hg0f"
                >
                  <div className="flex items-start" data-oid="f5ad69u">
                    <div className="mr-3 mt-0.5" data-oid="6i2__2v">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1" data-oid="zz:w6fx">
                      <div
                        className="flex justify-between items-start"
                        data-oid="kpx60q3"
                      >
                        <h4
                          className={cn(
                            "text-sm font-medium",
                            notification.read
                              ? "text-foreground/80"
                              : "text-foreground",
                          )}
                          data-oid="a67yz78"
                        >
                          {notification.title}
                        </h4>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onDismiss(notification.id);
                          }}
                          className="text-muted-foreground hover:text-foreground"
                          data-oid="7o5k8n5"
                        >
                          <X className="h-4 w-4" data-oid="1jwe.m6" />
                          <span className="sr-only" data-oid="oa683wj">
                            Descartar
                          </span>
                        </button>
                      </div>
                      <p
                        className="text-sm text-muted-foreground mt-1"
                        data-oid="y::lv:a"
                      >
                        {notification.message}
                      </p>
                      <div
                        className="flex justify-between items-center mt-2"
                        data-oid="n9vwkcs"
                      >
                        <span
                          className="text-xs text-muted-foreground"
                          data-oid=":95yyg1"
                        >
                          {new Date(notification.timestamp).toLocaleString()}
                        </span>
                        {notification.actionLabel && (
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 h-auto text-xs"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (notification.actionFn)
                                notification.actionFn();
                            }}
                            data-oid="xl0hsur"
                          >
                            {notification.actionLabel}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </TabsContent>

          <TabsContent
            value="unread"
            className="mt-4 max-h-[70vh] overflow-y-auto"
            data-oid="32y0ykm"
          >
            {unreadCount === 0 ? (
              <div
                className="text-center py-8 text-muted-foreground"
                data-oid="sg.85jd"
              >
                No hay notificaciones sin leer
              </div>
            ) : (
              notifications
                .filter((n) => !n.read)
                .map((notification) => (
                  <div
                    key={notification.id}
                    className={getNotificationClasses(
                      notification.type,
                      notification.read,
                    )}
                    onClick={() => handleNotificationClick(notification)}
                    data-oid="j6rtbbm"
                  >
                    <div className="flex items-start" data-oid="j-c7r4e">
                      <div className="mr-3 mt-0.5" data-oid="uribal-">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1" data-oid="zsyi9h9">
                        <div
                          className="flex justify-between items-start"
                          data-oid="vmw4ymz"
                        >
                          <h4
                            className="text-sm font-medium"
                            data-oid="y6q4qkn"
                          >
                            {notification.title}
                          </h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onDismiss(notification.id);
                            }}
                            className="text-muted-foreground hover:text-foreground"
                            data-oid="y8-m6zm"
                          >
                            <X className="h-4 w-4" data-oid="-az.58e" />
                            <span className="sr-only" data-oid="r._wycs">
                              Descartar
                            </span>
                          </button>
                        </div>
                        <p
                          className="text-sm text-muted-foreground mt-1"
                          data-oid="kdiefz5"
                        >
                          {notification.message}
                        </p>
                        <div
                          className="flex justify-between items-center mt-2"
                          data-oid="ok9p146"
                        >
                          <span
                            className="text-xs text-muted-foreground"
                            data-oid="gm4ap4h"
                          >
                            {new Date(notification.timestamp).toLocaleString()}
                          </span>
                          {notification.actionLabel && (
                            <Button
                              variant="link"
                              size="sm"
                              className="p-0 h-auto text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (notification.actionFn)
                                  notification.actionFn();
                              }}
                              data-oid="ckf1puq"
                            >
                              {notification.actionLabel}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </TabsContent>

          <TabsContent
            value="read"
            className="mt-4 max-h-[70vh] overflow-y-auto"
            data-oid="mluq.z:"
          >
            {notifications.filter((n) => n.read).length === 0 ? (
              <div
                className="text-center py-8 text-muted-foreground"
                data-oid="5-5dvym"
              >
                No hay notificaciones leídas
              </div>
            ) : (
              notifications
                .filter((n) => n.read)
                .map((notification) => (
                  <div
                    key={notification.id}
                    className={getNotificationClasses(
                      notification.type,
                      notification.read,
                    )}
                    onClick={() => handleNotificationClick(notification)}
                    data-oid="oq._4zd"
                  >
                    <div className="flex items-start" data-oid="0ejdwfj">
                      <div className="mr-3 mt-0.5" data-oid="5db4e.s">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1" data-oid="dygt4rw">
                        <div
                          className="flex justify-between items-start"
                          data-oid="uw:mlvm"
                        >
                          <h4
                            className="text-sm font-medium text-foreground/80"
                            data-oid="-afc:7c"
                          >
                            {notification.title}
                          </h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onDismiss(notification.id);
                            }}
                            className="text-muted-foreground hover:text-foreground"
                            data-oid="fhptlrw"
                          >
                            <X className="h-4 w-4" data-oid="sh5tj76" />
                            <span className="sr-only" data-oid="si_pdma">
                              Descartar
                            </span>
                          </button>
                        </div>
                        <p
                          className="text-sm text-muted-foreground mt-1"
                          data-oid="9k.5euj"
                        >
                          {notification.message}
                        </p>
                        <div
                          className="flex justify-between items-center mt-2"
                          data-oid="-udg800"
                        >
                          <span
                            className="text-xs text-muted-foreground"
                            data-oid="f9yw.z5"
                          >
                            {new Date(notification.timestamp).toLocaleString()}
                          </span>
                          {notification.actionLabel && (
                            <Button
                              variant="link"
                              size="sm"
                              className="p-0 h-auto text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (notification.actionFn)
                                  notification.actionFn();
                              }}
                              data-oid="4i152ay"
                            >
                              {notification.actionLabel}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
