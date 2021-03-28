import {ultimoStatus} from './ultimoStatus';

export class PropositionModel {
  id!: number;
  uri!: string;
  siglaTipo!: string;
  codTipo!: number;
  numero!: number;
  ano!: number;
  ementa!: string;
  descricaoTipo!: string;
  ementaDetalhada!: string;
  keywords!: string;
  dataApresentacao!: string;
  urlInteiroTeor!: string;
  ultimoStatus!: ultimoStatus;
}
