interface CandidatoBase {
  nome: string;
  numero: string;
  partido: string;
  sexo: "M" | "F";
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
