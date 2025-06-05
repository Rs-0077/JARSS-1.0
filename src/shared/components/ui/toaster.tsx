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
    <ToastProvider data-oid="_xwmc7a">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="ouu8sct">
            <div className="grid gap-1" data-oid="iih6-ka">
              {title && <ToastTitle data-oid="r:4ksgw">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="qtq6_:p">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="b73qrk:" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="3k.h6t6" />
    </ToastProvider>
  );
}
