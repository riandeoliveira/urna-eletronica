import { makeAutoObservable } from "mobx";
import etapas from "static/etapas/etapas.json";
import { type Candidato } from "types/candidato";
import { type Etapa } from "types/etapa";

export class VotingMachineStore {
  public currentCandidate: Candidato;
  public isBlankVote: boolean;
  public isCheckingVote: boolean;
  public isFinishedVote: boolean;
  public isNullVote: boolean;
  public isPartyVote: boolean;
  public keyInput: string[];
  public stage: Etapa;
  public stageIndex: number;

  public constructor() {
    this.currentCandidate = {} as Candidato;
    this.isBlankVote = false;
    this.isCheckingVote = false;
    this.isFinishedVote = false;
    this.isNullVote = false;
    this.isPartyVote = false;
    this.keyInput = [];
    this.stage = etapas[0];
    this.stageIndex = 0;

    makeAutoObservable(this);
  }

  public setCurrentCandidate(currentCandidate: Candidato): void {
    this.currentCandidate = currentCandidate;
  }

  public setIsBlankVote(isBlankVote: boolean): void {
    this.isBlankVote = isBlankVote;
  }

  public setIsCheckingVote(isCheckingVote: boolean): void {
    this.isCheckingVote = isCheckingVote;
  }

  public setIsFinishedVote(isFinishedVote: boolean): void {
    this.isFinishedVote = isFinishedVote;
  }

  public setIsNullVote(isNullVote: boolean): void {
    this.isNullVote = isNullVote;
  }

  public setIsPartyVote(isPartyVote: boolean): void {
    this.isPartyVote = isPartyVote;
  }

  public setKeyInput(keyInput: string[]): void {
    this.keyInput = keyInput;
  }

  public setStage(stage: Etapa): void {
    this.stage = stage;
  }

  public setStageIndex(stageIndex: number): void {
    this.stageIndex = stageIndex;
  }
}

export const votingMachineStore = new VotingMachineStore();
