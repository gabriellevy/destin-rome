import {ResidenceDeVoyage} from "./ResidenceDeVoyage.ts";
import {Perso} from "../Perso.ts";
import {Pays} from "../../donnees/geographie/pays.ts";
import {getSousProvinces, Province} from "../../donnees/geographie/provinces.ts";
import {Ville} from "../../donnees/geographie/villes.ts";
import {getVilles, SousProvince} from "../../donnees/geographie/sousProvince.ts";

export type Option = {
    value: string,
    label: string,
}

export type Lieu = {
    pays: Pays,
    province: Province,
    sousProvince: SousProvince,
    ville: Ville,
    maison: string|null,
    enVoyage:boolean,
    residenceVoyage:ResidenceDeVoyage|null,
};

export const lieuParDefaut: Lieu = {
    pays: Pays.empire,
    province: Province.italia,
    sousProvince: SousProvince.latium,
    ville: Ville.rome,
    maison: null,
    enVoyage:false,
    residenceVoyage: null,
};

export const lieuRome: Lieu = {
    pays: Pays.empire,
    province: Province.italia,
    sousProvince: SousProvince.latium,
    ville: Ville.rome,
    maison: null,
    enVoyage:false,
    residenceVoyage: null,
};

export const enVoyageEnCampanie: Lieu = {
    pays: Pays.empire,
    province: Province.hispania,
    sousProvince: SousProvince.campanie,
    ville: Ville.herculanum,
    maison: null,
    enVoyage:true,
    residenceVoyage: null,
};

export function vaA(perso: Perso, ville: Ville) {
    perso.lieu.ville = ville;
    const sousProvince: SousProvince = getSousProvinceDeVille(ville);
    perso.lieu.sousProvince = sousProvince;
    perso.lieu.province = getProvinceDeSousProvince(sousProvince);
}

export function getSousProvinceDeVille(ville: Ville): SousProvince {
    return Object.values(SousProvince).find(sousProvince=> getVilles(sousProvince).includes(ville)) || SousProvince.sousProvinceInconnue;
}

export function getProvinceDeSousProvince(sousProvince: SousProvince): Province {
    return Object.values(Province).find(province=> getSousProvinces(province).includes(sousProvince)) || Province.provinceInconnue;
}

export function auBordDeLaRiviere(perso: Perso): boolean {
    if (perso.lieu.province === Province.gallia) return true; // il y a des rivières partout là dedans...

    return false;
}