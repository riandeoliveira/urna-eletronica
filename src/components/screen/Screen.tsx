import Image from "next/image";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { KeyInput } from "./KeyInput";

export const Screen = (): JSX.Element => {
  return (
    <div className="bg-black w-[609px] h-[336px] pt-[20.86px] pr-[37px] pb-[19.7px] pl-9">
      <div className="w-[536px] h-[295.45px] bg-white font-screen">
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
        <div className="w-fit text-center absolute translate-x-[446px] translate-y-[-235px]">
          <Image
            src="/assets/images/aaa.jpg"
            alt="Imagem do candidato selecionado"
            width={90}
            height={145}
          />
          <span className="text-[14px]">Senadora</span>
        </div>
        <div className="flex gap-1 text-center absolute translate-x-[392px] translate-y-[-86px]">
          <div>
            <Image
              src="/assets/images/bbb.jpg"
              alt="Imagem do candidato selecionado"
              width={70}
              height={105}
            />
            <span className="text-[10px]">1º Suplente</span>
          </div>
          <div>
            <Image
              src="/assets/images/bbb.jpg"
              alt="Imagem do candidato selecionado"
              width={70}
              height={105}
            />
            <span className="text-[10px]">2º Suplente</span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
