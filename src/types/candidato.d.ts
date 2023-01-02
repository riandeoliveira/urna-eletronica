interface Partido {
  nome: string;
  numero: string;
}

type Cargo =
  | "deputado_estadual"
  | "deputado_federal"
  | "governador"
  | "presidente"
  | "senador"
  | "suplente"
  | "vice_governador"
  | "vice_presidente";

interface CandidatoBase {
  nome: string;
  numero: string;
  partido: Partido;
  sexo: "M" | "F";
  cargo: Cargo;
  foto: string;
}

interface DeputadoFederal extends CandidatoBase {}

interface DeputadoEstadual extends CandidatoBase {}

interface Senador extends CandidatoBase {
  suplentes: CandidatoBase[];
}

interface Governador extends CandidatoBase {
  vice: CandidatoBase;
}

interface Presidente extends CandidatoBase {
  vice: CandidatoBase;
}

export interface Candidato
  extends DeputadoFederal,
    DeputadoEstadual,
    Senador,
    Governador,
    Presidente {}
