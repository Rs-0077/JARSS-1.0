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
    <ToastProvider data-oid="l6pbupf">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="l7l:ole">
            <div className="grid gap-1" data-oid="3jxdx:c">
              {title && <ToastTitle data-oid="iock7xa">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="5:t4c9m">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="pynkcen" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="j2s15i." />
    </ToastProvider>
  );
}
