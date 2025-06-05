import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider data-oid="x-hiqt4">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="_xn.0t3">
            <div className="grid gap-1" data-oid="dp96lpc">
              {title && <ToastTitle data-oid="kc59.vi">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="zh7vdgs">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="wnwag78" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="0rruq0:" />
    </ToastProvider>
  );
}
