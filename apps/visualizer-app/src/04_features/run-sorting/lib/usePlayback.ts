import { useEffect, useState } from 'react';
import type { AlgorithmStep } from '../../../05_entities/algorithm';

type UsePlaybackOptions = {
  intervalMs?: number;
};

export function usePlayback(
  steps: AlgorithmStep[],
  { intervalMs = 400 }: UsePlaybackOptions = {},
) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying || steps.length === 0) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev + 1 >= steps.length) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isPlaying, steps.length, intervalMs]);

  useEffect(() => {
    // Reset to the beginning when steps change.
    setCurrentStep(0);
  }, [steps]);

  const start = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };


  return {
    currentStep,
    isPlaying,
    start,
    setCurrentStep,
  };
}
