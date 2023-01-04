import Image from "next/image";
import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const CandidatePrimaryImage = (): JSX.Element => {
  const { stage, currentCandidate } = useSelector(selectVotingMachineStates);

  const isAvailableToPartyVote: boolean =
    stage.cargo.tipo === "deputado_federal" ||
    stage.cargo.tipo === "deputado_estadual";

  const candidateJob: string =
    currentCandidate.sexo === "F"
      ? stage.cargo.nome_feminino
      : stage.cargo.nome_masculino;

  return (
    <div className="w-fit text-center absolute translate-x-[446px]">
      <Image
        src={`https://www.tse.jus.br/hotsites/simulador-de-votacao/image/figuras/135x145/24bpp/${currentCandidate.foto}.jpg`}
        alt="Imagem do candidato selecionado"
        width={90}
        height={145}
      />
      {!isAvailableToPartyVote && (
        <span className="text-[14px]">{candidateJob}</span>
      )}
    </div>
  );
};
