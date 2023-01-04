import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { PartyVoteFooter } from "./labels/PartyVoteFooter";
import { CheckingVote } from "./labels/CheckingVote";

export const Footer = (): JSX.Element => {
  const { isCheckingVote } = useSelector(selectVotingMachineStates);

  return (
    <div className="absolute translate-y-[237px] w-[88%] border-t-2 border-t-black leading-[16px] pt-[4px]">
      <div className="text-[13px] flex flex-col">
        {isCheckingVote ? (
          <CheckingVote />
        ) : (
          <>
            <span className="pl-[6px]">Aperte a tecla:</span>
            <span className="pl-[22px]">CONFIRMA para CONFIRMAR este voto</span>
            <span className="pl-[32px]">CORRIGE para REINICIAR este voto</span>
            <PartyVoteFooter />
          </>
        )}
      </div>
    </div>
  );
};
