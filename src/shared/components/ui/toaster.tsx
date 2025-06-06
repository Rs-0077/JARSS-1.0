import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/shared/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider data-oid=":ynqv9n">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="i06qjay">
            <div className="grid gap-1" data-oid="3xtl..7">
              {title && <ToastTitle data-oid="n6cznmt">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="oi_m59d">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="_s5p5k9" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="9ci35ik" />
    </ToastProvider>
  );
}
