import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

interface CandidateImageProps {
  candidateImage: string;
  candidateJob: string;
}

export const CandidateSecondaryImage = observer(
  ({ candidateImage, candidateJob }: CandidateImageProps): ReactElement => {
    const { stage } = votingMachineStore;

    const isAvailableToPartyVote: boolean =
      stage.cargo.tipo === "deputado_federal" || stage.cargo.tipo === "deputado_estadual";

    return (
      <div className={styles.candidate_secondary_image_area}>
        <img
          src={`https://www.tse.jus.br/hotsites/simulador-de-votacao/image/figuras/135x145/24bpp/${candidateImage}.jpg`}
          alt="Imagem do candidato selecionado"
          width={75}
          height={105}
        />
        {!isAvailableToPartyVote && (
          <span className={styles.label} data-job-position={stage.cargo.tipo === "governador"}>
            {candidateJob}
          </span>
        )}
      </div>
    );
  },
);
