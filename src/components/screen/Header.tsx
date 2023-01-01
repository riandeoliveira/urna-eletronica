import { useVotingStage } from "hooks/useVotingStage";
import type { Candidato } from "types/candidato";

interface HeaderProps extends Candidato {}

export const Header = (props: HeaderProps): JSX.Element => {
  const { votingStage } = useVotingStage();

  const getPoliticalOfficeNameBySex = (): string | null => {
    if (props.sexo === "M") {
      return votingStage.cargo.nome_masculino;
    }

    if (props.sexo === "F") {
      return votingStage.cargo.nome_feminino;
    }

    return null;
  };

  return (
    <header>
      <p className="text-[15px] text-[#333333] pt-[5px] tracking-[0.5px]">
        SEU VOTO PARA
      </p>
      <span className="text-[22px] tracking-[1.5px] pl-[150px]">
        {getPoliticalOfficeNameBySex()}
      </span>
    </header>
  );
};
