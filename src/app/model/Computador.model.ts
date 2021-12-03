import { Setor } from 'src/app/model/Setores.model';
export interface Computador{
    id?: number;
    nomeComputador:string;
    ip:string;
    marca:string;
    setor:Setor;

}