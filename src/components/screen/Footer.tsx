import { useSelector } from "react-redux";
import type { RootState } from "types/redux";
import { CheckingVote } from "./stage/CheckingVote";

export const Footer = (): JSX.Element => {
  const { isCheckingVote } = useSelector(
    (state: RootState) => state.votingMachine
  );

  return (
    <div className="border-t-2 border-t-black mt-[8px] leading-[16px] pt-[4px]">
      <div className="text-[13px] flex flex-col">
        {isCheckingVote ? (
          <div className="translate-x-[114px] translate-y-[14px]">
            <CheckingVote />
          </div>
        ) : (
          <>
            <span className="pl-[6px]">Aperte a tecla:</span>
            <span className="pl-[22px]">CONFIRMA para CONFIRMAR este voto</span>
            <span className="pl-[32px]">CORRIGE para REINICIAR este voto</span>
          </>
        )}
      </div>
    </div>
  );
};
