import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const CandidatePrimaryImage = observer((): ReactElement => {
  const { stage, currentCandidate } = votingMachineStore;

  const isAvailableToPartyVote: boolean =
    stage.cargo.tipo === "deputado_federal" || stage.cargo.tipo === "deputado_estadual";

  const candidateJob: string =
    currentCandidate.sexo === "F" ? stage.cargo.nome_feminino : stage.cargo.nome_masculino;

  return (
    <div className={styles.candidate_primary_image_area}>
      <img
        src={`https://www.tse.jus.br/hotsites/simulador-de-votacao/image/figuras/135x145/24bpp/${currentCandidate.foto}.jpg`}
        alt="Imagem do candidato selecionado"
        width={90}
        height={125}
      />
      {!isAvailableToPartyVote && <span className={styles.label}>{candidateJob}</span>}
    </div>
  );
});
