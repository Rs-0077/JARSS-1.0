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
    <div className={cn("space-y-6", className)} data-oid="yxsd5z8">
      <div className="flex justify-between items-center" data-oid="mu5-bqe">
        <h2 className="text-2xl font-semibold" data-oid="dj21.wp">
          Preferencias de usuario
        </h2>
        <div className="flex space-x-2" data-oid="z48eysq">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            disabled={!hasChanges}
            data-oid="m_1-8yl"
          >
            <RotateCcw className="mr-2 h-4 w-4" data-oid="nh41bwj" />
            Restablecer
          </Button>
          <Button
            size="sm"
            onClick={handleSave}
            disabled={!hasChanges}
            data-oid="gitl:hb"
          >
            <Save className="mr-2 h-4 w-4" data-oid="3vrfx2-" />
            Guardar cambios
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="w-full" data-oid="1xgak-7">
        <TabsList className="grid w-full grid-cols-3" data-oid="t14g:oa">
          <TabsTrigger value="general" data-oid="1v51kfu">
            General
          </TabsTrigger>
          <TabsTrigger value="notifications" data-oid="_c3:hdb">
            Notificaciones
          </TabsTrigger>
          <TabsTrigger value="accessibility" data-oid="wj.wt5p">
            Accesibilidad
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="general"
          className="space-y-4 pt-4"
          data-oid="2z767hx"
        >
          <div className="space-y-4" data-oid="uf310n-">
            <div data-oid="zuv-pur">
              <h3 className="text-lg font-medium mb-2" data-oid="jp-aqy_">
                Tema
              </h3>
              <div className="grid grid-cols-3 gap-4" data-oid="nvj8lm-">
                <div
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all",
                    preferences.theme === "light"
                      ? "border-primary bg-primary/10"
                      : "border-muted hover:border-primary/50",
                  )}
                  onClick={() => handleChange(["theme"], "light")}
                  data-oid="u0lh5tp"
                >
                  <Sun
                    className="h-8 w-8 mb-2 text-yellow-500"
                    data-oid="fe_-jti"
                  />

                  <span data-oid="-gj-oyu">Claro</span>
                </div>

                <div
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all",
                    preferences.theme === "dark"
                      ? "border-primary bg-primary/10"
                      : "border-muted hover:border-primary/50",
                  )}
                  onClick={() => handleChange(["theme"], "dark")}
                  data-oid="vq6524y"
                >
                  <Moon
                    className="h-8 w-8 mb-2 text-indigo-400"
                    data-oid="uwplc9:"
                  />

                  <span data-oid="xle7mkb">Oscuro</span>
                </div>

                <div
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all",
                    preferences.theme === "system"
                      ? "border-primary bg-primary/10"
                      : "border-muted hover:border-primary/50",
                  )}
                  onClick={() => handleChange(["theme"], "system")}
                  data-oid="73a0:-o"
                >
                  <div className="h-8 w-8 mb-2 flex" data-oid="oal0.an">
                    <Sun
                      className="h-8 w-4 text-yellow-500"
                      data-oid="iiu5rj2"
                    />

                    <Moon
                      className="h-8 w-4 text-indigo-400"
                      data-oid="_8iz:tw"
                    />
                  </div>
                  <span data-oid="9yhfrw:">Sistema</span>
                </div>
              </div>
            </div>

            <div className="space-y-2" data-oid="72lwvn1">
              <h3 className="text-lg font-medium mb-2" data-oid="3m0h1-8">
                Visualización
              </h3>

              <div
                className="flex items-center justify-between"
                data-oid="hvwqh2r"
              >
                <div className="space-y-0.5" data-oid="q7suukq">
                  <Label htmlFor="compact-mode" data-oid="v:fq-s5">
                    Modo compacto
                  </Label>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="pg9wlwz"
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
                  data-oid="7_0:pw8"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="6xr5vkf"
              >
                <div className="space-y-0.5" data-oid="x4boi_.">
                  <Label htmlFor="show-tips" data-oid="t7.megi">
                    Mostrar consejos
                  </Label>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="cp7-8xe"
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
                  data-oid="wbr-nzg"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="fa0p89j"
              >
                <div className="space-y-0.5" data-oid="qhxefy9">
                  <Label htmlFor="welcome-screen" data-oid="-_2:kfq">
                    Pantalla de bienvenida
                  </Label>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="js3vqla"
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
                  data-oid="4ki2cyo"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="notifications"
          className="space-y-4 pt-4"
          data-oid="wuo5nv3"
        >
          <div className="space-y-4" data-oid="246nane">
            <div
              className="flex items-center justify-between"
              data-oid="5__llzy"
            >
              <div className="space-y-0.5" data-oid="4tijymq">
                <Label
                  htmlFor="notifications-enabled"
                  className="text-base font-medium"
                  data-oid="yy9-:e7"
                >
                  Notificaciones
                </Label>
                <p className="text-sm text-muted-foreground" data-oid="o4bt1n:">
                  Habilitar o deshabilitar todas las notificaciones
                </p>
              </div>
              <div className="flex items-center space-x-2" data-oid="ltqjbsc">
                {preferences.notifications.enabled ? (
                  <Bell className="h-4 w-4 text-primary" data-oid="ebreiq0" />
                ) : (
                  <BellOff
                    className="h-4 w-4 text-muted-foreground"
                    data-oid="njhg7vu"
                  />
                )}
                <Switch
                  id="notifications-enabled"
                  checked={preferences.notifications.enabled}
                  onCheckedChange={(checked) =>
                    handleChange(["notifications", "enabled"], checked)
                  }
                  data-oid="8ej0gr3"
                />
              </div>
            </div>

            <div
              className="space-y-2 pl-2 border-l-2 border-muted"
              data-oid="oai95l3"
            >
              <div
                className="flex items-center justify-between"
                data-oid="mbidmay"
              >
                <Label
                  htmlFor="email-notifications"
                  className="flex-1"
                  data-oid="-tecyqy"
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
                  data-oid="6_7:t15"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="en6hlcq"
              >
                <Label
                  htmlFor="app-notifications"
                  className="flex-1"
                  data-oid="-qmgc2j"
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
                  data-oid="v1yzi5m"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="ktjsedg"
              >
                <Label
                  htmlFor="sound-notifications"
                  className="flex-1"
                  data-oid="dsuykc."
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
                  data-oid="dr81o7o"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="accessibility"
          className="space-y-4 pt-4"
          data-oid="6q37387"
        >
          <div className="space-y-6" data-oid="_uayy13">
            <div className="space-y-2" data-oid="lbve6i-">
              <div
                className="flex justify-between items-center"
                data-oid="211259v"
              >
                <Label
                  htmlFor="font-size"
                  className="text-base font-medium"
                  data-oid="93txrkc"
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
                  data-oid="j0x:wv4"
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
                data-oid=":dwsz4l"
              />

              <div
                className="flex justify-between text-xs text-muted-foreground"
                data-oid="28q76ru"
              >
                <span data-oid=":_ws.mk">Pequeño</span>
                <span data-oid="eav_l4g">Normal</span>
                <span data-oid="347i-wk">Grande</span>
              </div>
            </div>

            <div className="space-y-2" data-oid="riwfrmx">
              <div
                className="flex items-center justify-between"
                data-oid="_ee9e94"
              >
                <div className="space-y-0.5" data-oid=".c0tto:">
                  <Label htmlFor="contrast-mode" data-oid="6a7n3qj">
                    Modo de alto contraste
                  </Label>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="p6451j5"
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
                  data-oid="4yy560n"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="m.pa_1z"
              >
                <div className="space-y-0.5" data-oid="udehkdt">
                  <Label htmlFor="reduced-motion" data-oid="e7xphot">
                    Movimiento reducido
                  </Label>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid=":9bez.q"
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
                  data-oid="kmx8xj1"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
