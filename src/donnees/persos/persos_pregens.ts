import {anneesToJours} from "../../types/Date.ts";
import {enVoyageEnCampanie, lieuParDefaut, lieuRome} from "../../types/lieux/Lieu.ts";
import {MetalStatut} from "../../types/statut_social/Statut.ts";
import {Perso, Sexe} from "../../types/Perso.ts";
import {compsDeBase} from "../../types/comps/Comps.ts";
import {evts_programmes} from "../evts/evts_programmes.ts";
import {Carriere, metiersEnum, metierTest} from "../../types/metiers/metiers.ts";
import {unAnAvantDebutCampagne} from "../dates/ennemi_interieur.ts";
import {APOLLON} from "../dieux/dieux.ts";
import {ClasseSociale} from "../../types/statut_social/ClasseSociale.ts";

export const persoVide: Perso = {
    prenom: "Lucius",
    nom: "Aemilius",
    cognomen: "Paullus",
    carrieres: new Map<metiersEnum, Carriere>,
    comps: compsDeBase(),
    date: 0,
    dateNaissance: 0,
    dieu: {id: APOLLON},
    evtsProgrammes: evts_programmes,
    jourDuMois: 0,
    lieu: lieuParDefaut,
    sexe: Sexe.male,
    statut: {rang: 4, metalStatut: MetalStatut.bronze},
    classeSociale: ClasseSociale.citoyen_romain,
    maitrises: [],
    vitesseExecution: 5000,
    corruption: 0,
}

export const enfant: Perso = {
    prenom: "Caius",
    nom: "Aemilius",
    cognomen: "Paullus",
    sexe: Sexe.male,
    dateNaissance: anneesToJours(478), // un peu avant 490 ab urbe condita cad le début de la 1ère guerre punique
    jourDuMois: -1,
    date: unAnAvantDebutCampagne, // début du pouvoir derrière le trône 3ème volume
    anneeDeDepart: 490,
    age: 17,
    lieu: lieuParDefaut,
    statut: {rang: 4, metalStatut: MetalStatut.bronze},
    classeSociale: ClasseSociale.citoyen_romain,
    carrieres: new Map<metiersEnum, Carriere>,
    comps: compsDeBase(),
    maitrises: [],
    dieu: {id: APOLLON},
    evtsProgrammes: evts_programmes,
    vitesseExecution: 5000,
    corruption: 0,
};

export const jeuneHommeEnVoyageEnCampanie: Perso = {
    prenom: "Lucius",
    nom: "Aemilius",
    cognomen: "Paullus",
    sexe: Sexe.male,
    dateNaissance: anneesToJours(478),
    date: anneesToJours(490),
    jourDuMois: -1,
    lieu: enVoyageEnCampanie,
    classeSociale: ClasseSociale.citoyen_romain,
    statut: {rang: 2, metalStatut: MetalStatut.argent},
    carrieres: new Map<metiersEnum, Carriere>,
    comps: compsDeBase(),
    maitrises: [],
    dieu: {id: APOLLON},
    evtsProgrammes: evts_programmes,
    vitesseExecution: 5000,
    corruption: 0,
};

// époque du carnaval
export const richeDeRome: Perso = {
    prenom: "Lucius",
    nom: "Aemilius",
    cognomen: "Paullus",
    sexe: Sexe.male,
    dateNaissance: anneesToJours(470),
    date: unAnAvantDebutCampagne, // début du pouvoir derrière le trône 3ème volume
    anneeDeDepart: 490,
    age: 16,
    jourDuMois: -1,
    lieu: lieuRome,
    classeSociale: ClasseSociale.citoyen_riche,
    statut: {rang: 1, metalStatut: MetalStatut.argent},
    carrieres: new Map<metiersEnum, Carriere>([[metiersEnum.edile, metierTest]]),
    comps: compsDeBase(),
    maitrises: [],
    dieu: {id: APOLLON},
    evtsProgrammes: evts_programmes,
    vitesseExecution: 5000,
    corruption: 0,
};
