import {TypeCompetence} from "./comps/Comps.ts";
import {metiersEnum} from "./metiers/metiers.ts";

export type ResultatTest = {
    reussi: boolean,
    critical: boolean,
    resume: string,
}

export type TestCompetence = {
    comp: TypeCompetence,
    bonusMalus: number,
}

export type TestMetier = {
    metier: metiersEnum,
    bonusMalus: number,
}
