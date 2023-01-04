import { Signs } from "../images/Signs";
import { NumberLabel } from "../labels/NumberLabel";
import { PoliticalJobLabel } from "../labels/PoliticalJobLabel";

export const Stage = (): JSX.Element => {
  return (
    <>
      <PoliticalJobLabel />
      <NumberLabel />
      <Signs />
    </>
  );
};
