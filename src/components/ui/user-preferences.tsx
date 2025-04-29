import React, { useState, useEffect } from 'react';
import { Save, RotateCcw, Moon, Sun, Bell, BellOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { STORAGE_KEYS } from '@/core/config';
import { useTheme } from '@/components/theme-provider';

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: {
    enabled: boolean;
    email: boolean;
    app: boolean;
    sound: boolean;
  };
  accessibility: {
    fontSize: number;
    contrastMode: boolean;
    reducedMotion: boolean;
  };
  display: {
    compactMode: boolean;
    showTips: boolean;
    showWelcomeScreen: boolean;
  };
}

const defaultPreferences: UserPreferences = {
  theme: 'system',
  notifications: {
    enabled: true,
    email: true,
    app: true,
    sound: true,
  },
  accessibility: {
    fontSize: 100,
    contrastMode: false,
    reducedMotion: false,
  },
  display: {
    compactMode: false,
    showTips: true,
    showWelcomeScreen: true,
  },
};

interface UserPreferencesProps {
  onSave?: (preferences: UserPreferences) => void;
  className?: string;
}

export function UserPreferencesPanel({ onSave, className }: UserPreferencesProps) {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
  const [hasChanges, setHasChanges] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    // Load saved preferences
    const savedPreferences = localStorage.getItem(STORAGE_KEYS.userPreferences);
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
      } catch (error) {
        console.error('Error parsing saved preferences:', error);
      }
    }
  }, []);

  const handleChange = (path: string[], value: any) => {
    setPreferences(prev => {
      const newPreferences = { ...prev };
      let current: any = newPreferences;
      
      // Navigate to the nested property
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      
      // Set the value
      current[path[path.length - 1]] = value;
      
      return newPreferences;
    });
    
    setHasChanges(true);
  };

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem(STORAGE_KEYS.userPreferences, JSON.stringify(preferences));
    
    // Apply theme
    setTheme(preferences.theme);
    
    // Apply font size
    document.documentElement.style.fontSize = `${preferences.accessibility.fontSize}%`;
    
    // Apply reduced motion
    if (preferences.accessibility.reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
    
    // Apply high contrast
    if (preferences.accessibility.contrastMode) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    // Callback
    if (onSave) {
      onSave(preferences);
    }
    
    setHasChanges(false);
  };

  const handleReset = () => {
    setPreferences(defaultPreferences);
    setHasChanges(true);
  };

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Preferencias de usuario</h2>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleReset}
            disabled={!hasChanges}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Restablecer
          </Button>
          <Button 
            size="sm" 
            onClick={handleSave}
            disabled={!hasChanges}
          >
            <Save className="mr-2 h-4 w-4" />
            Guardar cambios
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
          <TabsTrigger value="accessibility">Accesibilidad</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4 pt-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Tema</h3>
              <div className="grid grid-cols-3 gap-4">
                <div 
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all",
                    preferences.theme === 'light' 
                      ? "border-primary bg-primary/10" 
                      : "border-muted hover:border-primary/50"
                  )}
                  onClick={() => handleChange(['theme'], 'light')}
                >
                  <Sun className="h-8 w-8 mb-2 text-yellow-500" />
                  <span>Claro</span>
                </div>
                
                <div 
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all",
                    preferences.theme === 'dark' 
                      ? "border-primary bg-primary/10" 
                      : "border-muted hover:border-primary/50"
                  )}
                  onClick={() => handleChange(['theme'], 'dark')}
                >
                  <Moon className="h-8 w-8 mb-2 text-indigo-400" />
                  <span>Oscuro</span>
                </div>
                
                <div 
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all",
                    preferences.theme === 'system' 
                      ? "border-primary bg-primary/10" 
                      : "border-muted hover:border-primary/50"
                  )}
                  onClick={() => handleChange(['theme'], 'system')}
                >
                  <div className="h-8 w-8 mb-2 flex">
                    <Sun className="h-8 w-4 text-yellow-500" />
                    <Moon className="h-8 w-4 text-indigo-400" />
                  </div>
                  <span>Sistema</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium mb-2">Visualización</h3>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="compact-mode">Modo compacto</Label>
                  <p className="text-sm text-muted-foreground">
                    Reduce el espaciado y tamaño de los elementos
                  </p>
                </div>
                <Switch
                  id="compact-mode"
                  checked={preferences.display.compactMode}
                  onCheckedChange={(checked) => handleChange(['display', 'compactMode'], checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="show-tips">Mostrar consejos</Label>
                  <p className="text-sm text-muted-foreground">
                    Muestra consejos y sugerencias mientras usas la aplicación
                  </p>
                </div>
                <Switch
                  id="show-tips"
                  checked={preferences.display.showTips}
                  onCheckedChange={(checked) => handleChange(['display', 'showTips'], checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="welcome-screen">Pantalla de bienvenida</Label>
                  <p className="text-sm text-muted-foreground">
                    Muestra la pantalla de bienvenida al iniciar la aplicación
                  </p>
                </div>
                <Switch
                  id="welcome-screen"
                  checked={preferences.display.showWelcomeScreen}
                  onCheckedChange={(checked) => handleChange(['display', 'showWelcomeScreen'], checked)}
                />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4 pt-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications-enabled" className="text-base font-medium">
                  Notificaciones
                </Label>
                <p className="text-sm text-muted-foreground">
                  Habilitar o deshabilitar todas las notificaciones
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {preferences.notifications.enabled ? (
                  <Bell className="h-4 w-4 text-primary" />
                ) : (
                  <BellOff className="h-4 w-4 text-muted-foreground" />
                )}
                <Switch
                  id="notifications-enabled"
                  checked={preferences.notifications.enabled}
                  onCheckedChange={(checked) => handleChange(['notifications', 'enabled'], checked)}
                />
              </div>
            </div>
            
            <div className="space-y-2 pl-2 border-l-2 border-muted">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="flex-1">
                  Notificaciones por correo electrónico
                </Label>
                <Switch
                  id="email-notifications"
                  checked={preferences.notifications.email && preferences.notifications.enabled}
                  onCheckedChange={(checked) => handleChange(['notifications', 'email'], checked)}
                  disabled={!preferences.notifications.enabled}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="app-notifications" className="flex-1">
                  Notificaciones en la aplicación
                </Label>
                <Switch
                  id="app-notifications"
                  checked={preferences.notifications.app && preferences.notifications.enabled}
                  onCheckedChange={(checked) => handleChange(['notifications', 'app'], checked)}
                  disabled={!preferences.notifications.enabled}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="sound-notifications" className="flex-1">
                  Sonidos de notificación
                </Label>
                <Switch
                  id="sound-notifications"
                  checked={preferences.notifications.sound && preferences.notifications.enabled}
                  onCheckedChange={(checked) => handleChange(['notifications', 'sound'], checked)}
                  disabled={!preferences.notifications.enabled}
                />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="accessibility" className="space-y-4 pt-4">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="font-size" className="text-base font-medium">
                  Tamaño de fuente: {preferences.accessibility.fontSize}%
                </Label>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleChange(['accessibility', 'fontSize'], 100)}
                  disabled={preferences.accessibility.fontSize === 100}
                >
                  Restablecer
                </Button>
              </div>
              <Slider
                id="font-size"
                min={75}
                max={150}
                step={5}
                value={[preferences.accessibility.fontSize]}
                onValueChange={(value) => handleChange(['accessibility', 'fontSize'], value[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Pequeño</span>
                <span>Normal</span>
                <span>Grande</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="contrast-mode">Modo de alto contraste</Label>
                  <p className="text-sm text-muted-foreground">
                    Aumenta el contraste para mejorar la legibilidad
                  </p>
                </div>
                <Switch
                  id="contrast-mode"
                  checked={preferences.accessibility.contrastMode}
                  onCheckedChange={(checked) => handleChange(['accessibility', 'contrastMode'], checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="reduced-motion">Movimiento reducido</Label>
                  <p className="text-sm text-muted-foreground">
                    Reduce o elimina las animaciones y transiciones
                  </p>
                </div>
                <Switch
                  id="reduced-motion"
                  checked={preferences.accessibility.reducedMotion}
                  onCheckedChange={(checked) => handleChange(['accessibility', 'reducedMotion'], checked)}
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
