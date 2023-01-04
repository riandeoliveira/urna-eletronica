import Image from "next/image";
import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

interface CandidateImageProps {
  candidateImage: string;
  candidateJob: string;
}

export const CandidateSecondaryImage = ({
  candidateImage,
  candidateJob,
}: CandidateImageProps): JSX.Element => {
  const { stage } = useSelector(selectVotingMachineStates);

  const isAvailableToPartyVote: boolean =
    stage.cargo.tipo === "deputado_federal" ||
    stage.cargo.tipo === "deputado_estadual";

  return (
    <div className="w-fit text-center absolute translate-x-[461px] translate-y-[147px] z-50">
      <Image
        src={`https://www.tse.jus.br/hotsites/simulador-de-votacao/image/figuras/135x145/24bpp/${candidateImage}.jpg`}
        alt="Imagem do candidato selecionado"
        width={75}
        height={105}
      />
      {!isAvailableToPartyVote && (
        <span
          className={
            stage.cargo.tipo === "governador" ? "text-[8.5px]" : "text-[10px]"
          }
        >
          {candidateJob}
        </span>
      )}
    </div>
  );
};
