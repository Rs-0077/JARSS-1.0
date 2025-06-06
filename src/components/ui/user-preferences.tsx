import React, { useState, useEffect } from "react";
import { Save, RotateCcw, Moon, Sun, Bell, BellOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { STORAGE_KEYS } from "@/core/config";
import { useTheme } from "@/components/theme-provider";

export interface UserPreferences {
  theme: "light" | "dark" | "system";
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
  theme: "system",
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

export function UserPreferencesPanel({
  onSave,
  className,
}: UserPreferencesProps) {
  const [preferences, setPreferences] =
    useState<UserPreferences>(defaultPreferences);
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
        console.error("Error parsing saved preferences:", error);
      }
    }
  }, []);

  const handleChange = (path: string[], value: any) => {
    setPreferences((prev) => {
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
    localStorage.setItem(
      STORAGE_KEYS.userPreferences,
      JSON.stringify(preferences),
    );

    // Apply theme
    setTheme(preferences.theme);

    // Apply font size
    document.documentElement.style.fontSize = `${preferences.accessibility.fontSize}%`;

    // Apply reduced motion
    if (preferences.accessibility.reducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }

    // Apply high contrast
    if (preferences.accessibility.contrastMode) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
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
    <div className={cn("space-y-6", className)} data-oid="zrugt__">
      <div className="flex justify-between items-center" data-oid="yktld15">
        <h2 className="text-2xl font-semibold" data-oid="o8i.80d">
          Preferencias de usuario
        </h2>
        <div className="flex space-x-2" data-oid="3-blp1o">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            disabled={!hasChanges}
            data-oid="2fwv_t_"
          >
            <RotateCcw className="mr-2 h-4 w-4" data-oid="mm.u_h6" />
            Restablecer
          </Button>
          <Button
            size="sm"
            onClick={handleSave}
            disabled={!hasChanges}
            data-oid="s27jb58"
          >
            <Save className="mr-2 h-4 w-4" data-oid="r8c7djx" />
            Guardar cambios
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="w-full" data-oid="a9.jz:f">
        <TabsList className="grid w-full grid-cols-3" data-oid="p2-twux">
          <TabsTrigger value="general" data-oid="-tjvjdm">
            General
          </TabsTrigger>
          <TabsTrigger value="notifications" data-oid="dsw5c8e">
            Notificaciones
          </TabsTrigger>
          <TabsTrigger value="accessibility" data-oid="20a3p1m">
            Accesibilidad
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="general"
          className="space-y-4 pt-4"
          data-oid="yga7t8g"
        >
          <div className="space-y-4" data-oid="rxadm:e">
            <div data-oid="kbws:j_">
              <h3 className="text-lg font-medium mb-2" data-oid="v_eon8u">
                Tema
              </h3>
              <div className="grid grid-cols-3 gap-4" data-oid="5ato5xa">
                <div
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all",
                    preferences.theme === "light"
                      ? "border-primary bg-primary/10"
                      : "border-muted hover:border-primary/50",
                  )}
                  onClick={() => handleChange(["theme"], "light")}
                  data-oid="wlm8m-e"
                >
                  <Sun
                    className="h-8 w-8 mb-2 text-yellow-500"
                    data-oid="2id-.9n"
                  />

                  <span data-oid="0s67smw">Claro</span>
                </div>

                <div
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all",
                    preferences.theme === "dark"
                      ? "border-primary bg-primary/10"
                      : "border-muted hover:border-primary/50",
                  )}
                  onClick={() => handleChange(["theme"], "dark")}
                  data-oid="cnddir9"
                >
                  <Moon
                    className="h-8 w-8 mb-2 text-indigo-400"
                    data-oid="h20q9bv"
                  />

                  <span data-oid=".:eo9rr">Oscuro</span>
                </div>

                <div
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all",
                    preferences.theme === "system"
                      ? "border-primary bg-primary/10"
                      : "border-muted hover:border-primary/50",
                  )}
                  onClick={() => handleChange(["theme"], "system")}
                  data-oid="dcrc:l2"
                >
                  <div className="h-8 w-8 mb-2 flex" data-oid="817mu7i">
                    <Sun
                      className="h-8 w-4 text-yellow-500"
                      data-oid="hsvahqn"
                    />

                    <Moon
                      className="h-8 w-4 text-indigo-400"
                      data-oid="m2.jrkh"
                    />
                  </div>
                  <span data-oid="5xnbf23">Sistema</span>
                </div>
              </div>
            </div>

            <div className="space-y-2" data-oid=".7_hrwu">
              <h3 className="text-lg font-medium mb-2" data-oid="3dt:9kv">
                Visualización
              </h3>

              <div
                className="flex items-center justify-between"
                data-oid=".sah62w"
              >
                <div className="space-y-0.5" data-oid="ix9tf3h">
                  <Label htmlFor="compact-mode" data-oid="5ger_bg">
                    Modo compacto
                  </Label>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="hstsx:z"
                  >
                    Reduce el espaciado y tamaño de los elementos
                  </p>
                </div>
                <Switch
                  id="compact-mode"
                  checked={preferences.display.compactMode}
                  onCheckedChange={(checked) =>
                    handleChange(["display", "compactMode"], checked)
                  }
                  data-oid="_bvo539"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="-cnbgob"
              >
                <div className="space-y-0.5" data-oid="zbkytux">
                  <Label htmlFor="show-tips" data-oid="_5zok-.">
                    Mostrar consejos
                  </Label>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="s_9ng-t"
                  >
                    Muestra consejos y sugerencias mientras usas la aplicación
                  </p>
                </div>
                <Switch
                  id="show-tips"
                  checked={preferences.display.showTips}
                  onCheckedChange={(checked) =>
                    handleChange(["display", "showTips"], checked)
                  }
                  data-oid="4ihx38i"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="a55bq3c"
              >
                <div className="space-y-0.5" data-oid="226440x">
                  <Label htmlFor="welcome-screen" data-oid="ua7i_dz">
                    Pantalla de bienvenida
                  </Label>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="p26a2jh"
                  >
                    Muestra la pantalla de bienvenida al iniciar la aplicación
                  </p>
                </div>
                <Switch
                  id="welcome-screen"
                  checked={preferences.display.showWelcomeScreen}
                  onCheckedChange={(checked) =>
                    handleChange(["display", "showWelcomeScreen"], checked)
                  }
                  data-oid="laazc06"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="notifications"
          className="space-y-4 pt-4"
          data-oid="2z-jckq"
        >
          <div className="space-y-4" data-oid="a3-8m8y">
            <div
              className="flex items-center justify-between"
              data-oid="posn6os"
            >
              <div className="space-y-0.5" data-oid="du0xe_7">
                <Label
                  htmlFor="notifications-enabled"
                  className="text-base font-medium"
                  data-oid="d6sb3lr"
                >
                  Notificaciones
                </Label>
                <p className="text-sm text-muted-foreground" data-oid="co1-dlt">
                  Habilitar o deshabilitar todas las notificaciones
                </p>
              </div>
              <div className="flex items-center space-x-2" data-oid="kcq8c5t">
                {preferences.notifications.enabled ? (
                  <Bell className="h-4 w-4 text-primary" data-oid="-o5ryzf" />
                ) : (
                  <BellOff
                    className="h-4 w-4 text-muted-foreground"
                    data-oid="_e_8d24"
                  />
                )}
                <Switch
                  id="notifications-enabled"
                  checked={preferences.notifications.enabled}
                  onCheckedChange={(checked) =>
                    handleChange(["notifications", "enabled"], checked)
                  }
                  data-oid="u84ymd-"
                />
              </div>
            </div>

            <div
              className="space-y-2 pl-2 border-l-2 border-muted"
              data-oid="mp-d5-5"
            >
              <div
                className="flex items-center justify-between"
                data-oid=":kud.4q"
              >
                <Label
                  htmlFor="email-notifications"
                  className="flex-1"
                  data-oid=":m6-4wa"
                >
                  Notificaciones por correo electrónico
                </Label>
                <Switch
                  id="email-notifications"
                  checked={
                    preferences.notifications.email &&
                    preferences.notifications.enabled
                  }
                  onCheckedChange={(checked) =>
                    handleChange(["notifications", "email"], checked)
                  }
                  disabled={!preferences.notifications.enabled}
                  data-oid=":_n2nbs"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="psfe014"
              >
                <Label
                  htmlFor="app-notifications"
                  className="flex-1"
                  data-oid="-puz_2r"
                >
                  Notificaciones en la aplicación
                </Label>
                <Switch
                  id="app-notifications"
                  checked={
                    preferences.notifications.app &&
                    preferences.notifications.enabled
                  }
                  onCheckedChange={(checked) =>
                    handleChange(["notifications", "app"], checked)
                  }
                  disabled={!preferences.notifications.enabled}
                  data-oid="sza4fz9"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="7dumd.l"
              >
                <Label
                  htmlFor="sound-notifications"
                  className="flex-1"
                  data-oid="-xst.dh"
                >
                  Sonidos de notificación
                </Label>
                <Switch
                  id="sound-notifications"
                  checked={
                    preferences.notifications.sound &&
                    preferences.notifications.enabled
                  }
                  onCheckedChange={(checked) =>
                    handleChange(["notifications", "sound"], checked)
                  }
                  disabled={!preferences.notifications.enabled}
                  data-oid="fb2iqcm"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="accessibility"
          className="space-y-4 pt-4"
          data-oid="q60afui"
        >
          <div className="space-y-6" data-oid="votb84q">
            <div className="space-y-2" data-oid="xlty9wx">
              <div
                className="flex justify-between items-center"
                data-oid="sj-evea"
              >
                <Label
                  htmlFor="font-size"
                  className="text-base font-medium"
                  data-oid=":fh.vq5"
                >
                  Tamaño de fuente: {preferences.accessibility.fontSize}%
                </Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    handleChange(["accessibility", "fontSize"], 100)
                  }
                  disabled={preferences.accessibility.fontSize === 100}
                  data-oid="f7-e7aa"
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
                onValueChange={(value) =>
                  handleChange(["accessibility", "fontSize"], value[0])
                }
                data-oid="t:lpq7w"
              />

              <div
                className="flex justify-between text-xs text-muted-foreground"
                data-oid="pw25a87"
              >
                <span data-oid="29ej97w">Pequeño</span>
                <span data-oid="5_hq1fa">Normal</span>
                <span data-oid="4jnf3at">Grande</span>
              </div>
            </div>

            <div className="space-y-2" data-oid="m5-t9d.">
              <div
                className="flex items-center justify-between"
                data-oid="lg.7xjm"
              >
                <div className="space-y-0.5" data-oid="wjfdg2t">
                  <Label htmlFor="contrast-mode" data-oid="-.g8:ir">
                    Modo de alto contraste
                  </Label>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="5l64oo8"
                  >
                    Aumenta el contraste para mejorar la legibilidad
                  </p>
                </div>
                <Switch
                  id="contrast-mode"
                  checked={preferences.accessibility.contrastMode}
                  onCheckedChange={(checked) =>
                    handleChange(["accessibility", "contrastMode"], checked)
                  }
                  data-oid="td7j5-j"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="flu_nc-"
              >
                <div className="space-y-0.5" data-oid="2s6vhiz">
                  <Label htmlFor="reduced-motion" data-oid="9n1w0ez">
                    Movimiento reducido
                  </Label>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="zf97ke3"
                  >
                    Reduce o elimina las animaciones y transiciones
                  </p>
                </div>
                <Switch
                  id="reduced-motion"
                  checked={preferences.accessibility.reducedMotion}
                  onCheckedChange={(checked) =>
                    handleChange(["accessibility", "reducedMotion"], checked)
                  }
                  data-oid="53nvhpl"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
