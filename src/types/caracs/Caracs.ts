import {d10} from "../../fonctions/des.ts";
import {Perso} from "../Perso.ts";

export type Carac = {
    val: number,
    nbDeTestsFaits: number,
    typeCarac: TypeCarac,
}

export enum TypeCarac {
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

export function caracDeDepartAleatoire(carac: TypeCarac): number {
    let baseValue: number = 20;
    switch(carac) {
        case TypeCarac.cc :
            baseValue = 20; break;
        case TypeCarac.ct :
            baseValue = 20; break;
        case TypeCarac.f :
            baseValue = 20; break;
        case TypeCarac.e :
            baseValue = 20; break;
        case TypeCarac.i :
            baseValue = 20; break;
        case TypeCarac.ag :
            baseValue = 20; break;
        case TypeCarac.dex :
            baseValue = 20; break;
        case TypeCarac.int :
            baseValue = 20; break;
        case TypeCarac.fm :
            baseValue = 20; break;
        case TypeCarac.soc :
            baseValue = 20; break;
    }
    return baseValue + d10() + d10();
}

export function getCaracValue(perso: Perso, typeCarac: TypeCarac): number {
    return perso.caracs.find((carac: Carac) => carac.typeCarac === typeCarac)?.val || -1;
}

export function getCaracNbDeTestsFaits(perso: Perso, typeCarac: TypeCarac): number {
    return perso.caracs.find((carac: Carac) => carac.typeCarac === typeCarac)?.nbDeTestsFaits || 0;
}

// seuils de progression des caracs (en nombres de tests sur ces caracs)
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

export function augmenterNbDeTestsFaitsCarac(perso: Perso, typeCarac: TypeCarac): string {
    const carac: Carac | undefined = perso.caracs.find((carac:Carac) => carac.typeCarac === typeCarac);
    let texte: string = "";
    if (carac !== undefined) {
        const nbTests: number = carac.nbDeTestsFaits + 1;
        carac.nbDeTestsFaits = nbTests;
        if (seuils.includes(nbTests)) {
            // gain d'un point de compétence :
            if (carac) {
                carac.val += 1;
                texte = "<b>+1 en " + carac.typeCarac.toString() + ". </b> ";
            }
        }
    }
    return texte;
}

export const caracsDeBase = () => [
    {
        val: caracDeDepartAleatoire(TypeCarac.cc),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.cc,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.ct),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.ct,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.f),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.f,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.e),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.e,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.i),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.i,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.ag),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.ag,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.dex),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.dex,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.int),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.int,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.fm),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.fm,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.soc),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.soc,
    },
];
