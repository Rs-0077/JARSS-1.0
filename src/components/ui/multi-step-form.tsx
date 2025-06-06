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
      <div className="mb-8" data-oid="nw3i0hy">
        <div className="flex items-center justify-between" data-oid="uenlur6">
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
                  data-oid="uosrfii"
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" data-oid="fcmz1ly" />
                  ) : (
                    <span data-oid="poiq:ho">{index + 1}</span>
                  )}

                  {/* Step label */}
                  <div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    data-oid="f2fkd52"
                  >
                    <span
                      className={cn(
                        "text-xs font-medium",
                        isActive ? "text-primary" : "text-muted-foreground",
                      )}
                      data-oid="2e1l-_l"
                    >
                      {step.title}
                      {step.isOptional && (
                        <span
                          className="ml-1 text-muted-foreground"
                          data-oid="9:ga9ot"
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
                    data-oid="0dn-cy4"
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
                data-oid="3gvvfso"
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
                data-oid="b5flit_"
              >
                <span data-oid="j1yfcgd">{steps.length + 1}</span>

                <div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  data-oid="3onqmgp"
                >
                  <span
                    className={cn(
                      "text-xs font-medium",
                      showingSummary ? "text-primary" : "text-muted-foreground",
                    )}
                    data-oid="4-3lftn"
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
      <div className="space-y-6" data-oid="cvr1ntg">
        <h3 className="text-lg font-medium" data-oid="70ilaz9">
          Resumen de la información
        </h3>

        {steps.map((step) => (
          <Card key={step.id} className="overflow-hidden" data-oid="o5f967m">
            <CardHeader className="py-3 px-4 bg-muted/30" data-oid="ssaaugh">
              <div
                className="flex justify-between items-center"
                data-oid="snb4til"
              >
                <CardTitle className="text-base" data-oid="1ondqj:">
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
                  data-oid="vh.an:2"
                >
                  Editar
                </Button>
              </div>
            </CardHeader>
            <CardContent className="py-3 px-4" data-oid="ma2eit-">
              {/* This would typically be a custom summary renderer for each step */}
              <pre
                className="text-sm whitespace-pre-wrap bg-muted/20 p-2 rounded"
                data-oid="w:_nfxr"
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
    <div className={cn("w-full", className)} data-oid="-36grz:">
      {showStepIndicator && renderStepIndicator()}

      <Card className="mt-8 w-full" data-oid="n0ytm9h">
        <CardHeader data-oid="n.xpju-">
          <CardTitle data-oid="fqkvsdm">
            {showingSummary ? "Confirmar información" : currentStep.title}
          </CardTitle>
        </CardHeader>

        <CardContent data-oid="t:1uw-l">
          {showingSummary
            ? renderSummary()
            : React.cloneElement(currentStep.component as React.ReactElement, {
                data: formData[currentStep.id] || {},
                onDataChange: (data: any) =>
                  updateFormData(currentStep.id, data),
              })}
        </CardContent>

        <CardFooter className="flex justify-between" data-oid="q3p87rd">
          <Button
            variant="outline"
            onClick={isFirstStep ? onCancel : handlePrevious}
            disabled={isSubmitting}
            data-oid="zzsyz7o"
          >
            {isFirstStep ? (
              "Cancelar"
            ) : (
              <>
                <ChevronLeft className="mr-2 h-4 w-4" data-oid="awfjhsu" />
                Anterior
              </>
            )}
          </Button>

          <Button
            onClick={showingSummary ? handleComplete : handleNext}
            disabled={isSubmitting}
            data-oid="oc0sv-p"
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
                <ChevronRight className="ml-2 h-4 w-4" data-oid="y1n4190" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
