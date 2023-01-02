import Image from "next/image";
import { useSelector } from "react-redux";
import type { RootState } from "types/redux";
import { PoliticalOffice } from "../candidate/PoliticalOffice";
import { KeyInput } from "../KeyInput";

export const Stage = (): JSX.Element => {
  const { keyInput, stage } = useSelector(
    (state: RootState) => state.votingMachine
  );

  return (
    <>
      <div className="translate-x-[80px] translate-y-[43px]">
        <PoliticalOffice />
      </div>
      <KeyInput />
      {keyInput.length === 0 && (
        <Image
          src={`https://www.tse.jus.br/hotsites/simulador-de-votacao/image/libras/${stage.libras}`}
          alt="Mulher fazendo sinais com as mãos utilizando a Linguagem Brasileira de Sinais (LIBRAS)"
          width={188}
          height={180}
          className="translate-x-[348px] translate-y-[48px]"
        />
      )}
    </>
  );
};
