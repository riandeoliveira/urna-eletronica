import Image from "next/image";
import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { PoliticalOffice } from "../candidate/PoliticalOffice";
import { KeyInput } from "../KeyInput";

export const Stage = (): JSX.Element => {
  const { keyInput, stage } = useSelector(selectVotingMachineStates);

  return (
    <>
      <div className="translate-x-[85px] translate-y-[43px]">
        <PoliticalOffice />
      </div>
      <div className="translate-x-[75px] translate-y-[76px]">
        <KeyInput />
      </div>
      {keyInput.length === 0 && (
        <Image
          src={`https://www.tse.jus.br/hotsites/simulador-de-votacao/image/libras/${stage.libras}`}
          alt="Mulher fazendo sinais com as mãos utilizando a Linguagem Brasileira de Sinais (LIBRAS)"
          width={188}
          height={180}
          className="absolute translate-x-[348px] translate-y-[81px]"
        />
      )}
    </>
  );
};
