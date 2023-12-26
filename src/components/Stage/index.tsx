import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import { CandidateJob } from "../CandidateJob";
import { CandidateNumber } from "../CandidateNumber";
import styles from "./styles.module.scss";

export const Stage = observer((): ReactElement => {
  const { keyInput, stage } = votingMachineStore;

  return (
    <>
      <CandidateJob />
      <CandidateNumber />
      {keyInput.length === 0 && (
        <img
          src={`https://www.tse.jus.br/hotsites/simulador-de-votacao/image/libras/${stage.libras}`}
          alt="Mulher utilizando a Linguagem Brasileira de Sinais (LIBRAS) para informar o cargo político a receber o voto atual"
          width={188}
          height={181.2}
          className={styles.image}
        />
      )}
    </>
  );
});
