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
        return <Check className="h-5 w-5 text-green-500" data-oid="473yg3o" />;
      case "warning":
        return (
          <AlertTriangle
            className="h-5 w-5 text-amber-500"
            data-oid="9a-_p4r"
          />
        );

      case "error":
        return <Ban className="h-5 w-5 text-red-500" data-oid="h5go_5l" />;
      case "info":
      default:
        return <Info className="h-5 w-5 text-blue-500" data-oid="wfqye75" />;
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
    <Sheet open={open} onOpenChange={setOpen} data-oid="r_0d4i_">
      <SheetTrigger asChild data-oid="_3t-_6z">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          data-oid="841ynfv"
        >
          <Bell className="h-5 w-5" data-oid="6pwes84" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
              data-oid="l5yo4du"
            >
              {unreadCount}
            </Badge>
          )}
          <span className="sr-only" data-oid="c3hw8zw">
            Notificaciones
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md" data-oid="olz:wkr">
        <SheetHeader
          className="flex flex-row items-center justify-between"
          data-oid="9z7aevi"
        >
          <SheetTitle data-oid="d33:prn">Notificaciones</SheetTitle>
          <div className="flex space-x-2" data-oid="5xev1-a">
            <Button
              variant="outline"
              size="sm"
              onClick={onMarkAllAsRead}
              disabled={unreadCount === 0}
              data-oid="37re_i8"
            >
              Marcar todo como leído
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onClearAll}
              disabled={notifications.length === 0}
              data-oid="0h1e51g"
            >
              Limpiar todo
            </Button>
          </div>
        </SheetHeader>

        <Tabs defaultValue="all" className="mt-4" data-oid="ftw282g">
          <TabsList className="grid w-full grid-cols-3" data-oid="okl-21p">
            <TabsTrigger value="all" data-oid="ip4rehv">
              Todas ({notifications.length})
            </TabsTrigger>
            <TabsTrigger value="unread" data-oid="g70w9_n">
              No leídas ({unreadCount})
            </TabsTrigger>
            <TabsTrigger value="read" data-oid="oza5:0a">
              Leídas ({notifications.length - unreadCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="all"
            className="mt-4 max-h-[70vh] overflow-y-auto"
            data-oid="hqv.f:e"
          >
            {notifications.length === 0 ? (
              <div
                className="text-center py-8 text-muted-foreground"
                data-oid="zgddz55"
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
                  data-oid="wc1abym"
                >
                  <div className="flex items-start" data-oid="_-d6cq.">
                    <div className="mr-3 mt-0.5" data-oid="muqntjx">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1" data-oid="k2qp:n:">
                      <div
                        className="flex justify-between items-start"
                        data-oid="sat0sj3"
                      >
                        <h4
                          className={cn(
                            "text-sm font-medium",
                            notification.read
                              ? "text-foreground/80"
                              : "text-foreground",
                          )}
                          data-oid="uzrghnk"
                        >
                          {notification.title}
                        </h4>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onDismiss(notification.id);
                          }}
                          className="text-muted-foreground hover:text-foreground"
                          data-oid="smmmx4s"
                        >
                          <X className="h-4 w-4" data-oid="3k86aqb" />
                          <span className="sr-only" data-oid="bn-3c9t">
                            Descartar
                          </span>
                        </button>
                      </div>
                      <p
                        className="text-sm text-muted-foreground mt-1"
                        data-oid="z3p1oqa"
                      >
                        {notification.message}
                      </p>
                      <div
                        className="flex justify-between items-center mt-2"
                        data-oid="gawbkdp"
                      >
                        <span
                          className="text-xs text-muted-foreground"
                          data-oid="4tbf4n4"
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
                            data-oid="89je3cw"
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
            data-oid="w:lseh4"
          >
            {unreadCount === 0 ? (
              <div
                className="text-center py-8 text-muted-foreground"
                data-oid="ml5c8ah"
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
                    data-oid="543q:p:"
                  >
                    <div className="flex items-start" data-oid="n4cotb:">
                      <div className="mr-3 mt-0.5" data-oid="63hrbmu">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1" data-oid="qu8qo9w">
                        <div
                          className="flex justify-between items-start"
                          data-oid="_t2yiyi"
                        >
                          <h4
                            className="text-sm font-medium"
                            data-oid="2uiya.-"
                          >
                            {notification.title}
                          </h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onDismiss(notification.id);
                            }}
                            className="text-muted-foreground hover:text-foreground"
                            data-oid="h.ccbwk"
                          >
                            <X className="h-4 w-4" data-oid="q87.9-4" />
                            <span className="sr-only" data-oid="gabrsao">
                              Descartar
                            </span>
                          </button>
                        </div>
                        <p
                          className="text-sm text-muted-foreground mt-1"
                          data-oid=".hh44nd"
                        >
                          {notification.message}
                        </p>
                        <div
                          className="flex justify-between items-center mt-2"
                          data-oid="nxd3e_f"
                        >
                          <span
                            className="text-xs text-muted-foreground"
                            data-oid="yeixa:8"
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
                              data-oid="snhze5d"
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
            data-oid="mkxbda6"
          >
            {notifications.filter((n) => n.read).length === 0 ? (
              <div
                className="text-center py-8 text-muted-foreground"
                data-oid="fiddee6"
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
                    data-oid="aank6kw"
                  >
                    <div className="flex items-start" data-oid="zfwplqj">
                      <div className="mr-3 mt-0.5" data-oid="69ftqzn">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1" data-oid="s0qi6c-">
                        <div
                          className="flex justify-between items-start"
                          data-oid="2oupz-o"
                        >
                          <h4
                            className="text-sm font-medium text-foreground/80"
                            data-oid="p3d4a16"
                          >
                            {notification.title}
                          </h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onDismiss(notification.id);
                            }}
                            className="text-muted-foreground hover:text-foreground"
                            data-oid=":n9qti_"
                          >
                            <X className="h-4 w-4" data-oid="jygyubv" />
                            <span className="sr-only" data-oid="0nnkm.z">
                              Descartar
                            </span>
                          </button>
                        </div>
                        <p
                          className="text-sm text-muted-foreground mt-1"
                          data-oid="t9u3882"
                        >
                          {notification.message}
                        </p>
                        <div
                          className="flex justify-between items-center mt-2"
                          data-oid="wni5:2x"
                        >
                          <span
                            className="text-xs text-muted-foreground"
                            data-oid="ei38zkf"
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
                              data-oid="bc8pm-o"
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
