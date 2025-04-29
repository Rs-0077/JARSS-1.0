import React, { useState, useEffect } from 'react';
import { Bell, X, Check, AlertTriangle, Info, Ban } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

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
    const count = notifications.filter(n => !n.read).length;
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
      case 'success':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'error':
        return <Ban className="h-5 w-5 text-red-500" />;
      case 'info':
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getNotificationClasses = (type: NotificationType, read: boolean) => {
    return cn(
      "p-4 rounded-lg mb-2 border transition-all duration-200 ease-in-out",
      read ? "bg-background opacity-70" : "bg-background shadow-sm",
      {
        "border-green-200 hover:border-green-300": type === 'success',
        "border-amber-200 hover:border-amber-300": type === 'warning',
        "border-red-200 hover:border-red-300": type === 'error',
        "border-blue-200 hover:border-blue-300": type === 'info',
      }
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
          <span className="sr-only">Notificaciones</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>Notificaciones</SheetTitle>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onMarkAllAsRead}
              disabled={unreadCount === 0}
            >
              Marcar todo como leído
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onClearAll}
              disabled={notifications.length === 0}
            >
              Limpiar todo
            </Button>
          </div>
        </SheetHeader>
        
        <Tabs defaultValue="all" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">
              Todas ({notifications.length})
            </TabsTrigger>
            <TabsTrigger value="unread">
              No leídas ({unreadCount})
            </TabsTrigger>
            <TabsTrigger value="read">
              Leídas ({notifications.length - unreadCount})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4 max-h-[70vh] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No hay notificaciones
              </div>
            ) : (
              notifications.map(notification => (
                <div 
                  key={notification.id} 
                  className={getNotificationClasses(notification.type, notification.read)}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-0.5">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className={cn(
                          "text-sm font-medium",
                          notification.read ? "text-foreground/80" : "text-foreground"
                        )}>
                          {notification.title}
                        </h4>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onDismiss(notification.id);
                          }}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Descartar</span>
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {notification.message}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-muted-foreground">
                          {new Date(notification.timestamp).toLocaleString()}
                        </span>
                        {notification.actionLabel && (
                          <Button 
                            variant="link" 
                            size="sm" 
                            className="p-0 h-auto text-xs"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (notification.actionFn) notification.actionFn();
                            }}
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
          
          <TabsContent value="unread" className="mt-4 max-h-[70vh] overflow-y-auto">
            {unreadCount === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No hay notificaciones sin leer
              </div>
            ) : (
              notifications
                .filter(n => !n.read)
                .map(notification => (
                  <div 
                    key={notification.id} 
                    className={getNotificationClasses(notification.type, notification.read)}
                    onClick={() => handleNotificationClick(notification)}
                  >
                    <div className="flex items-start">
                      <div className="mr-3 mt-0.5">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-medium">
                            {notification.title}
                          </h4>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              onDismiss(notification.id);
                            }}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Descartar</span>
                          </button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notification.message}
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-muted-foreground">
                            {new Date(notification.timestamp).toLocaleString()}
                          </span>
                          {notification.actionLabel && (
                            <Button 
                              variant="link" 
                              size="sm" 
                              className="p-0 h-auto text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (notification.actionFn) notification.actionFn();
                              }}
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
          
          <TabsContent value="read" className="mt-4 max-h-[70vh] overflow-y-auto">
            {notifications.filter(n => n.read).length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No hay notificaciones leídas
              </div>
            ) : (
              notifications
                .filter(n => n.read)
                .map(notification => (
                  <div 
                    key={notification.id} 
                    className={getNotificationClasses(notification.type, notification.read)}
                    onClick={() => handleNotificationClick(notification)}
                  >
                    <div className="flex items-start">
                      <div className="mr-3 mt-0.5">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-medium text-foreground/80">
                            {notification.title}
                          </h4>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              onDismiss(notification.id);
                            }}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Descartar</span>
                          </button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notification.message}
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-muted-foreground">
                            {new Date(notification.timestamp).toLocaleString()}
                          </span>
                          {notification.actionLabel && (
                            <Button 
                              variant="link" 
                              size="sm" 
                              className="p-0 h-auto text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (notification.actionFn) notification.actionFn();
                              }}
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
