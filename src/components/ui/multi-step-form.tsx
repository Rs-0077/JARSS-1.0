import React, { useState, useEffect } from "react";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface Step {
  id: string;
  title: string;
  description?: string;
  component: React.ReactNode;
  isOptional?: boolean;
}

interface MultiStepFormProps {
  steps: Step[];
  onComplete: (data: any) => void;
  onCancel?: () => void;
  initialData?: any;
  className?: string;
  showStepIndicator?: boolean;
  showSummary?: boolean;
}

export function MultiStepForm({
  steps,
  onComplete,
  onCancel,
  initialData = {},
  className,
  showStepIndicator = true,
  showSummary = true,
}: MultiStepFormProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState(initialData);
  const [stepsCompleted, setStepsCompleted] = useState<Record<string, boolean>>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showingSummary, setShowingSummary] = useState(false);

  const currentStep = steps[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  useEffect(() => {
    // Initialize steps completed state
    const initialStepsCompleted: Record<string, boolean> = {};
    steps.forEach((step) => {
      initialStepsCompleted[step.id] = false;
    });
    setStepsCompleted(initialStepsCompleted);
  }, [steps]);

  const handleNext = () => {
    // Mark current step as completed
    setStepsCompleted((prev) => ({
      ...prev,
      [currentStep.id]: true,
    }));

    if (isLastStep) {
      if (showSummary) {
        setShowingSummary(true);
      } else {
        handleComplete();
      }
    } else {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (showingSummary) {
      setShowingSummary(false);
    } else {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleComplete = async () => {
    setIsSubmitting(true);
    try {
      await onComplete(formData);
    } catch (error) {
      console.error("Error completing form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStepClick = (index: number) => {
    // Only allow clicking on completed steps or the next available step
    const targetStep = steps[index];
    const isCompleted = stepsCompleted[targetStep.id];
    const isNextAvailable = index === 0 || stepsCompleted[steps[index - 1].id];

    if (isCompleted || isNextAvailable) {
      setCurrentStepIndex(index);
      setShowingSummary(false);
    }
  };

  const updateFormData = (stepId: string, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [stepId]: data,
    }));
  };

  // Render step indicator
  const renderStepIndicator = () => {
    return (
      <div className="mb-8" data-oid="xp3bt21">
        <div className="flex items-center justify-between" data-oid="-xo:37e">
          {steps.map((step, index) => {
            const isActive = index === currentStepIndex && !showingSummary;
            const isCompleted = stepsCompleted[step.id];
            const isClickable =
              isCompleted || index === 0 || stepsCompleted[steps[index - 1].id];

            return (
              <React.Fragment key={step.id}>
                {/* Step circle */}
                <div
                  className={cn(
                    "relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : isCompleted
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-muted bg-muted/50 text-muted-foreground",
                    isClickable
                      ? "cursor-pointer hover:scale-110"
                      : "cursor-not-allowed opacity-70",
                  )}
                  onClick={() => isClickable && handleStepClick(index)}
                  data-oid="27pyo7u"
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" data-oid="t-lcdeq" />
                  ) : (
                    <span data-oid="gxoiqq0">{index + 1}</span>
                  )}

                  {/* Step label */}
                  <div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    data-oid="dxumfdl"
                  >
                    <span
                      className={cn(
                        "text-xs font-medium",
                        isActive ? "text-primary" : "text-muted-foreground",
                      )}
                      data-oid="xnv_-8_"
                    >
                      {step.title}
                      {step.isOptional && (
                        <span
                          className="ml-1 text-muted-foreground"
                          data-oid="wgm0j0d"
                        >
                          (Opcional)
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-0.5 mx-2",
                      index < currentStepIndex ||
                        (isCompleted && index === currentStepIndex)
                        ? "bg-primary"
                        : "bg-muted",
                    )}
                    data-oid="2jvrbp5"
                  />
                )}
              </React.Fragment>
            );
          })}

          {/* Summary step (if enabled) */}
          {showSummary && (
            <>
              <div
                className={cn(
                  "flex-1 h-0.5 mx-2",
                  isLastStep && stepsCompleted[steps[steps.length - 1].id]
                    ? "bg-primary"
                    : "bg-muted",
                )}
                data-oid="fftcseh"
              />

              <div
                className={cn(
                  "relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200",
                  showingSummary
                    ? "border-primary bg-primary text-primary-foreground"
                    : isLastStep && stepsCompleted[steps[steps.length - 1].id]
                      ? "border-primary bg-primary/10 text-primary cursor-pointer hover:scale-110"
                      : "border-muted bg-muted/50 text-muted-foreground cursor-not-allowed opacity-70",
                )}
                onClick={() => {
                  if (
                    isLastStep &&
                    stepsCompleted[steps[steps.length - 1].id]
                  ) {
                    setShowingSummary(true);
                  }
                }}
                data-oid="273c6dx"
              >
                <span data-oid="cl4bypp">{steps.length + 1}</span>

                <div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  data-oid="dvo02e8"
                >
                  <span
                    className={cn(
                      "text-xs font-medium",
                      showingSummary ? "text-primary" : "text-muted-foreground",
                    )}
                    data-oid="lrkpjuo"
                  >
                    Resumen
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  // Render summary
  const renderSummary = () => {
    return (
      <div className="space-y-6" data-oid="0-__mgz">
        <h3 className="text-lg font-medium" data-oid="rjoef2r">
          Resumen de la información
        </h3>

        {steps.map((step) => (
          <Card key={step.id} className="overflow-hidden" data-oid="5yr2n2q">
            <CardHeader className="py-3 px-4 bg-muted/30" data-oid="2rusihr">
              <div
                className="flex justify-between items-center"
                data-oid="p3w5ey7"
              >
                <CardTitle className="text-base" data-oid="ls0vt0m">
                  {step.title}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const stepIndex = steps.findIndex((s) => s.id === step.id);
                    setCurrentStepIndex(stepIndex);
                    setShowingSummary(false);
                  }}
                  data-oid="2r7ejtv"
                >
                  Editar
                </Button>
              </div>
            </CardHeader>
            <CardContent className="py-3 px-4" data-oid="y4o8za:">
              {/* This would typically be a custom summary renderer for each step */}
              <pre
                className="text-sm whitespace-pre-wrap bg-muted/20 p-2 rounded"
                data-oid="ba8pqz_"
              >
                {JSON.stringify(formData[step.id] || {}, null, 2)}
              </pre>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("w-full", className)} data-oid="2i_e1.2">
      {showStepIndicator && renderStepIndicator()}

      <Card className="mt-8 w-full" data-oid="kko:x9g">
        <CardHeader data-oid="0k8e.pm">
          <CardTitle data-oid="dsg8xm:">
            {showingSummary ? "Confirmar información" : currentStep.title}
          </CardTitle>
        </CardHeader>

        <CardContent data-oid="27xm2ll">
          {showingSummary
            ? renderSummary()
            : React.cloneElement(currentStep.component as React.ReactElement, {
                data: formData[currentStep.id] || {},
                onDataChange: (data: any) =>
                  updateFormData(currentStep.id, data),
              })}
        </CardContent>

        <CardFooter className="flex justify-between" data-oid=":v3r1c9">
          <Button
            variant="outline"
            onClick={isFirstStep ? onCancel : handlePrevious}
            disabled={isSubmitting}
            data-oid="4oepf76"
          >
            {isFirstStep ? (
              "Cancelar"
            ) : (
              <>
                <ChevronLeft className="mr-2 h-4 w-4" data-oid="gy_cta-" />
                Anterior
              </>
            )}
          </Button>

          <Button
            onClick={showingSummary ? handleComplete : handleNext}
            disabled={isSubmitting}
            data-oid="qi.lwm1"
          >
            {isSubmitting ? (
              "Procesando..."
            ) : showingSummary ? (
              "Completar"
            ) : isLastStep ? (
              showSummary ? (
                "Revisar"
              ) : (
                "Completar"
              )
            ) : (
              <>
                Siguiente
                <ChevronRight className="ml-2 h-4 w-4" data-oid="-.rzddx" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
