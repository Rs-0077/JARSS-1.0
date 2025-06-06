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
        return <Check className="h-5 w-5 text-green-500" data-oid="e9yl3wm" />;
      case "warning":
        return (
          <AlertTriangle
            className="h-5 w-5 text-amber-500"
            data-oid="p_rxuvq"
          />
        );

      case "error":
        return <Ban className="h-5 w-5 text-red-500" data-oid="za8mw5y" />;
      case "info":
      default:
        return <Info className="h-5 w-5 text-blue-500" data-oid="pgap000" />;
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
    <Sheet open={open} onOpenChange={setOpen} data-oid="zg1dimp">
      <SheetTrigger asChild data-oid="ict5fx-">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          data-oid="2xnt885"
        >
          <Bell className="h-5 w-5" data-oid="ke-:tvy" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
              data-oid=":p:6k-:"
            >
              {unreadCount}
            </Badge>
          )}
          <span className="sr-only" data-oid="3x374nk">
            Notificaciones
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md" data-oid="858rgkt">
        <SheetHeader
          className="flex flex-row items-center justify-between"
          data-oid="t887bpa"
        >
          <SheetTitle data-oid="eiislon">Notificaciones</SheetTitle>
          <div className="flex space-x-2" data-oid="ub6_fi:">
            <Button
              variant="outline"
              size="sm"
              onClick={onMarkAllAsRead}
              disabled={unreadCount === 0}
              data-oid="dyzr.71"
            >
              Marcar todo como leído
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onClearAll}
              disabled={notifications.length === 0}
              data-oid="3sxuu7z"
            >
              Limpiar todo
            </Button>
          </div>
        </SheetHeader>

        <Tabs defaultValue="all" className="mt-4" data-oid="a6nf3k1">
          <TabsList className="grid w-full grid-cols-3" data-oid="fig9c_e">
            <TabsTrigger value="all" data-oid="6fnzafs">
              Todas ({notifications.length})
            </TabsTrigger>
            <TabsTrigger value="unread" data-oid="ipmrxz:">
              No leídas ({unreadCount})
            </TabsTrigger>
            <TabsTrigger value="read" data-oid="cv1cmh3">
              Leídas ({notifications.length - unreadCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="all"
            className="mt-4 max-h-[70vh] overflow-y-auto"
            data-oid="rm9:tq."
          >
            {notifications.length === 0 ? (
              <div
                className="text-center py-8 text-muted-foreground"
                data-oid="k8lkfxv"
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
                  data-oid="b5f43pz"
                >
                  <div className="flex items-start" data-oid="z:m6v0x">
                    <div className="mr-3 mt-0.5" data-oid="y4f_b79">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1" data-oid="__dzah0">
                      <div
                        className="flex justify-between items-start"
                        data-oid="6ipxwk8"
                      >
                        <h4
                          className={cn(
                            "text-sm font-medium",
                            notification.read
                              ? "text-foreground/80"
                              : "text-foreground",
                          )}
                          data-oid=".k2mvk2"
                        >
                          {notification.title}
                        </h4>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onDismiss(notification.id);
                          }}
                          className="text-muted-foreground hover:text-foreground"
                          data-oid="s.g:lpt"
                        >
                          <X className="h-4 w-4" data-oid="w_g9p9j" />
                          <span className="sr-only" data-oid="fr8dljq">
                            Descartar
                          </span>
                        </button>
                      </div>
                      <p
                        className="text-sm text-muted-foreground mt-1"
                        data-oid="ps6djma"
                      >
                        {notification.message}
                      </p>
                      <div
                        className="flex justify-between items-center mt-2"
                        data-oid="-aztem:"
                      >
                        <span
                          className="text-xs text-muted-foreground"
                          data-oid="apo-ugk"
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
                            data-oid="x3yb.2d"
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
            data-oid="2znbktu"
          >
            {unreadCount === 0 ? (
              <div
                className="text-center py-8 text-muted-foreground"
                data-oid="py6s9vs"
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
                    data-oid="j6kbnn_"
                  >
                    <div className="flex items-start" data-oid="d5fwqq9">
                      <div className="mr-3 mt-0.5" data-oid="u:7wrjt">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1" data-oid="s00hasy">
                        <div
                          className="flex justify-between items-start"
                          data-oid="hk3..37"
                        >
                          <h4
                            className="text-sm font-medium"
                            data-oid="uo86d19"
                          >
                            {notification.title}
                          </h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onDismiss(notification.id);
                            }}
                            className="text-muted-foreground hover:text-foreground"
                            data-oid="a6u9--1"
                          >
                            <X className="h-4 w-4" data-oid="hzd.13n" />
                            <span className="sr-only" data-oid="52t_0rd">
                              Descartar
                            </span>
                          </button>
                        </div>
                        <p
                          className="text-sm text-muted-foreground mt-1"
                          data-oid="qm4op.7"
                        >
                          {notification.message}
                        </p>
                        <div
                          className="flex justify-between items-center mt-2"
                          data-oid="3hzwyz2"
                        >
                          <span
                            className="text-xs text-muted-foreground"
                            data-oid="19jx49f"
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
                              data-oid="tqsf:bs"
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
            data-oid="s:.154y"
          >
            {notifications.filter((n) => n.read).length === 0 ? (
              <div
                className="text-center py-8 text-muted-foreground"
                data-oid="pp-olmr"
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
                    data-oid="1tfw11a"
                  >
                    <div className="flex items-start" data-oid="v985m..">
                      <div className="mr-3 mt-0.5" data-oid="tvtjg:h">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1" data-oid="g452-c_">
                        <div
                          className="flex justify-between items-start"
                          data-oid="z1dwuu3"
                        >
                          <h4
                            className="text-sm font-medium text-foreground/80"
                            data-oid="a7cpq7o"
                          >
                            {notification.title}
                          </h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onDismiss(notification.id);
                            }}
                            className="text-muted-foreground hover:text-foreground"
                            data-oid="x2hhv5z"
                          >
                            <X className="h-4 w-4" data-oid="l0qoln7" />
                            <span className="sr-only" data-oid="a7ty3ig">
                              Descartar
                            </span>
                          </button>
                        </div>
                        <p
                          className="text-sm text-muted-foreground mt-1"
                          data-oid="2om05gw"
                        >
                          {notification.message}
                        </p>
                        <div
                          className="flex justify-between items-center mt-2"
                          data-oid="b74gdcb"
                        >
                          <span
                            className="text-xs text-muted-foreground"
                            data-oid="l9l808l"
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
                              data-oid="azp.toa"
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
