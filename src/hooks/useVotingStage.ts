import { useState } from "react";
import etapas from "static/etapas/etapas.json";
import type { Etapa } from "types/etapa";

interface UseVotingStage {
  nextStage: () => void;
  votingStage: Etapa;
}

export const useVotingStage = (): UseVotingStage => {
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [votingStage, setVotingStage] = useState<Etapa>(etapas[currentStage]);

  const nextStage = (): void => {
    setCurrentStage((state) => state + 1);
    setVotingStage(etapas[currentStage]);
  };

  return {
    nextStage,
    votingStage,
  };
};
