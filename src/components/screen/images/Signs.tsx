import Image from "next/image";
import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const Signs = (): JSX.Element => {
  const { keyInput, stage } = useSelector(selectVotingMachineStates);

  return (
    <>
      {keyInput.length === 0 && (
        <Image
          src={`https://www.tse.jus.br/hotsites/simulador-de-votacao/image/libras/${stage.libras}`}
          alt="Mulher utilizando a Linguagem Brasileira de Sinais (LIBRAS) para informar o cargo político a receber o voto atual"
          width={188}
          height={180}
          className="absolute translate-x-[348px] translate-y-[114px]"
        />
      )}
    </>
  );
};
