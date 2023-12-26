import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import { CandidatePrimaryImage } from "../CandidatePrimaryImage";
import { CandidateSecondaryImage } from "../CandidateSecondaryImage";
import styles from "./styles.module.scss";

export const CandidateImageArea = observer((): ReactElement => {
  const { stage, currentCandidate } = votingMachineStore;

  return (
    <>
      <CandidatePrimaryImage />
      {stage.cargo.tipo === "senador" && (
        <>
          <div className={styles.container}>
            <CandidateSecondaryImage
              candidateJob="1º Suplente"
              candidateImage={currentCandidate.suplentes[0].foto}
            />
          </div>
          <CandidateSecondaryImage
            candidateJob="2º Suplente"
            candidateImage={currentCandidate.suplentes[1].foto}
          />
        </>
      )}
      {stage.cargo.tipo === "governador" && (
        <CandidateSecondaryImage
          candidateJob="Vice-Governador"
          candidateImage={currentCandidate.vice.foto}
        />
      )}
      {stage.cargo.tipo === "presidente" && (
        <CandidateSecondaryImage
          candidateJob="Vice-Presidente"
          candidateImage={currentCandidate.vice.foto}
        />
      )}
    </>
  );
});
