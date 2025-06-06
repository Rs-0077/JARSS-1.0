import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { STORAGE_KEYS } from "@/core/config";

export interface TourStep {
  target: string;
  title: string;
  content: string;
  placement?: "top" | "right" | "bottom" | "left";
}

interface GuidedTourProps {
  steps: TourStep[];
  onComplete?: () => void;
  onSkip?: () => void;
}

export function GuidedTour({ steps, onComplete, onSkip }: GuidedTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    // Check if the tour has been completed or skipped
    const tourCompleted = localStorage.getItem(STORAGE_KEYS.tourCompleted);
    if (tourCompleted === "true") {
      return;
    }

    // Start the tour after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      updateTargetElement();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      updateTargetElement();
    }
  }, [currentStep, isVisible]);

  const updateTargetElement = () => {
    if (currentStep >= steps.length) return;

    const step = steps[currentStep];
    const element = document.querySelector(step.target) as HTMLElement;

    if (element) {
      setTargetElement(element);
      positionTooltip(element, step.placement || "bottom");

      // Add highlight effect to the target element
      element.classList.add("tour-highlight");

      // Scroll element into view if needed
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const positionTooltip = (
    element: HTMLElement,
    placement: "top" | "right" | "bottom" | "left",
  ) => {
    const rect = element.getBoundingClientRect();
    const tooltipWidth = 320;
    const tooltipHeight = 180;
    const spacing = 12;

    let top = 0;
    let left = 0;

    switch (placement) {
      case "top":
        top = rect.top - tooltipHeight - spacing;
        left = rect.left + rect.width / 2 - tooltipWidth / 2;
        break;
      case "right":
        top = rect.top + rect.height / 2 - tooltipHeight / 2;
        left = rect.right + spacing;
        break;
      case "bottom":
        top = rect.bottom + spacing;
        left = rect.left + rect.width / 2 - tooltipWidth / 2;
        break;
      case "left":
        top = rect.top + rect.height / 2 - tooltipHeight / 2;
        left = rect.left - tooltipWidth - spacing;
        break;
    }

    // Ensure the tooltip stays within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (left < 20) left = 20;
    if (left + tooltipWidth > viewportWidth - 20)
      left = viewportWidth - tooltipWidth - 20;
    if (top < 20) top = 20;
    if (top + tooltipHeight > viewportHeight - 20)
      top = viewportHeight - tooltipHeight - 20;

    setTooltipPosition({ top, left });
  };

  const handleNext = () => {
    if (targetElement) {
      targetElement.classList.remove("tour-highlight");
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeTour();
    }
  };

  const handlePrevious = () => {
    if (targetElement) {
      targetElement.classList.remove("tour-highlight");
    }

    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    if (targetElement) {
      targetElement.classList.remove("tour-highlight");
    }

    if (dontShowAgain) {
      localStorage.setItem(STORAGE_KEYS.tourCompleted, "true");
    }

    setIsVisible(false);

    if (onSkip) {
      onSkip();
    }
  };

  const completeTour = () => {
    if (targetElement) {
      targetElement.classList.remove("tour-highlight");
    }

    if (dontShowAgain) {
      localStorage.setItem(STORAGE_KEYS.tourCompleted, "true");
    }

    setIsVisible(false);

    if (onComplete) {
      onComplete();
    }
  };

  if (!isVisible || currentStep >= steps.length) {
    return null;
  }

  const currentTourStep = steps[currentStep];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={handleSkip}
        data-oid="ag:y76g"
      />

      {/* Tooltip */}
      <div
        className="fixed z-[60] w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-fade-in"
        style={{
          top: `${tooltipPosition.top}px`,
          left: `${tooltipPosition.left}px`,
        }}
        data-oid="jmedn74"
      >
        <div
          className="flex justify-between items-center mb-2"
          data-oid="1n38684"
        >
          <h3 className="font-medium text-lg" data-oid="6-pqxbf">
            {currentTourStep.title}
          </h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSkip}
            data-oid="47afc1u"
          >
            <X className="h-4 w-4" data-oid="apc3l.d" />
            <span className="sr-only" data-oid="zzw0wt9">
              Cerrar
            </span>
          </Button>
        </div>

        <div className="text-sm text-muted-foreground mb-4" data-oid="rlyylsn">
          {currentTourStep.content}
        </div>

        <div className="flex items-center justify-between" data-oid="1k8d8ey">
          <div className="flex items-center space-x-2" data-oid="qpgp3a9">
            <Checkbox
              id="dont-show-again"
              checked={dontShowAgain}
              onCheckedChange={(checked) =>
                setDontShowAgain(checked as boolean)
              }
              data-oid="b8d0d8k"
            />

            <label
              htmlFor="dont-show-again"
              className="text-xs text-muted-foreground cursor-pointer"
              data-oid="gdx01j1"
            >
              No mostrar de nuevo
            </label>
          </div>

          <div className="flex space-x-2" data-oid="2-cn0ir">
            {currentStep > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevious}
                data-oid="ia4fgf8"
              >
                <ChevronLeft className="h-4 w-4 mr-1" data-oid="2zkpmyt" />
                Anterior
              </Button>
            )}

            <Button
              variant="default"
              size="sm"
              onClick={handleNext}
              data-oid="jt1f8:t"
            >
              {currentStep < steps.length - 1 ? (
                <>
                  Siguiente
                  <ChevronRight className="h-4 w-4 ml-1" data-oid="q-9:1_b" />
                </>
              ) : (
                "Finalizar"
              )}
            </Button>
          </div>
        </div>

        <div className="mt-3 flex justify-center" data-oid="xbvc_bb">
          <div className="flex space-x-1" data-oid="cm0eu.m">
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === currentStep ? "w-6 bg-primary" : "w-1.5 bg-muted",
                )}
                data-oid="pp:b:b4"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add global styles for the tour highlight */}
      <style jsx global data-oid="pe_eb79">{`
        .tour-highlight {
          position: relative;
          z-index: 55;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5);
          border-radius: 4px;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.3);
          }
        }
      `}</style>
    </>
  );
}
