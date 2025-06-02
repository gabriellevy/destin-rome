import {d10} from "../../fonctions/des.ts";
import {Perso} from "../Perso.ts";

export type Competence = {
    val: number,
    nbDeTestsFaits: number,
    typeComp: TypeCompetence,
}

export enum TypeCompetence {
    cc = "CC",
    ct = "CT",
    f = "F",
    e = "E",
    i = "I",
    ag = "Ag",
    dex = "Dex",
    int = "Int",
    fm = "FM",
    soc = "Soc",
}

export function compDeDepartAleatoire(comp: TypeCompetence): number {
    let baseValue: number = 20;
    switch(comp) {
        case TypeCompetence.cc :
            baseValue = 20; break;
        case TypeCompetence.ct :
            baseValue = 20; break;
        case TypeCompetence.f :
            baseValue = 20; break;
        case TypeCompetence.e :
            baseValue = 20; break;
        case TypeCompetence.i :
            baseValue = 20; break;
        case TypeCompetence.ag :
            baseValue = 20; break;
        case TypeCompetence.dex :
            baseValue = 20; break;
        case TypeCompetence.int :
            baseValue = 20; break;
        case TypeCompetence.fm :
            baseValue = 20; break;
        case TypeCompetence.soc :
            baseValue = 20; break;
    }
    return baseValue + d10() + d10();
}

export function getCompValue(perso: Perso, typeComp: TypeCompetence): number {
    return perso.comps.find((comp: Competence) => comp.typeComp === typeComp)?.val || -1;
}

export function getCompNbDeTestsFaits(perso: Perso, typeComp: TypeCompetence): number {
    return perso.comps.find((comp: Competence) => comp.typeComp === typeComp)?.nbDeTestsFaits || 0;
}

// seuils de progression des comps (en nombres de tests sur ces comps)
// limite à +25 ?? // TODO : remplir ça , éventuellement avec une fonction
export const seuils: number[] = [
    3,
    7,
    15,
    31,
    63,
    127,
    255,
    511,
];

export function augmenterNbDeTestsFaitsComp(perso: Perso, typeComp: TypeCompetence): string {
    const comp: Competence | undefined = perso.comps.find((comp:Competence) => comp.typeComp === typeComp);
    let texte: string = "";
    if (comp !== undefined) {
        const nbTests: number = comp.nbDeTestsFaits + 1;
        comp.nbDeTestsFaits = nbTests;
        if (seuils.includes(nbTests)) {
            // gain d'un point de compétence :
            if (comp) {
                comp.val += 1;
                texte = "<b>+1 en " + comp.typeComp.toString() + ". </b> ";
            }
        }
    }
    return texte;
}

export const compsDeBase = () => [
    {
        val: compDeDepartAleatoire(TypeCompetence.cc),
        nbDeTestsFaits: 0,
        typeComp: TypeCompetence.cc,
    },
    {
        val: compDeDepartAleatoire(TypeCompetence.ct),
        nbDeTestsFaits: 0,
        typeComp: TypeCompetence.ct,
    },
    {
        val: compDeDepartAleatoire(TypeCompetence.f),
        nbDeTestsFaits: 0,
        typeComp: TypeCompetence.f,
    },
    {
        val: compDeDepartAleatoire(TypeCompetence.e),
        nbDeTestsFaits: 0,
        typeComp: TypeCompetence.e,
    },
    {
        val: compDeDepartAleatoire(TypeCompetence.i),
        nbDeTestsFaits: 0,
        typeComp: TypeCompetence.i,
    },
    {
        val: compDeDepartAleatoire(TypeCompetence.ag),
        nbDeTestsFaits: 0,
        typeComp: TypeCompetence.ag,
    },
    {
        val: compDeDepartAleatoire(TypeCompetence.dex),
        nbDeTestsFaits: 0,
        typeComp: TypeCompetence.dex,
    },
    {
        val: compDeDepartAleatoire(TypeCompetence.int),
        nbDeTestsFaits: 0,
        typeComp: TypeCompetence.int,
    },
    {
        val: compDeDepartAleatoire(TypeCompetence.fm),
        nbDeTestsFaits: 0,
        typeComp: TypeCompetence.fm,
    },
    {
        val: compDeDepartAleatoire(TypeCompetence.soc),
        nbDeTestsFaits: 0,
        typeComp: TypeCompetence.soc,
    },
];
