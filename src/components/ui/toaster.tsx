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
    <ToastProvider data-oid="-zt.2jk">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="60vkigu">
            <div className="grid gap-1" data-oid="0cn5lp7">
              {title && <ToastTitle data-oid="z8:y0ab">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="cvg5hlx">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="vg_an9b" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="-z71-p6" />
    </ToastProvider>
  );
}
