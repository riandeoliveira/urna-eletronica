import { Header } from "../Header";
import { KeyInput } from "../KeyInput";

export const InfoArea = (): JSX.Element => {
  return (
    <div className="flex flex-col pl-[4px]">
      <Header nome="João Frango" sexo="F" />
      <div className="text-[15px] flex gap-[40px]">
        <span className="flex items-center">Número:</span>
        <div className="flex gap-[2px] translate-x-[-8px]">
          {[0, 0, 0, 0].map((candidato, index) => (
            <KeyInput key={index} />
          ))}
        </div>
      </div>
      <div className="flex gap-[40px]">
        <div className="flex flex-col">
          <span className="text-[15px]">Nome:</span>
          <span className="text-[14px] pt-[20px]">Partido:</span>
        </div>
        <div className="flex flex-col">
          <span>Enfermeira</span>
          <span className="pt-[20px] translate-y-[-3px]">PProf</span>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-[6px]">
          <span className="text-[14px] pt-6">1º Suplente:</span>
          <span className="text-[14px]">2º Suplente:</span>
        </div>
        <div className="flex flex-col pt-[20px] gap-[6px]">
          <span className="translate-y-[3px]">Aeromoça</span>
          <span>Detetive</span>
        </div>
      </div>
    </div>
  );
};
