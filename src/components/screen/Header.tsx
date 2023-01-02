import { useSelector } from "react-redux";
import { selectCandidatesByStage } from "redux/voting-machine/selectors";

export const Header = (): JSX.Element => {
  const abc = useSelector(selectCandidatesByStage);

  console.log(abc);

  return (
    <header className="pt-[5px] pl-[4px]">
      <p className="text-[15px] text-[#333333] tracking-[0.5px]">
        SEU VOTO PARA
      </p>
    </header>
  );
};
