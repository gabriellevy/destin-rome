import {anneesToJours} from "../../types/Date.ts";
import {enVoyageEnCampanie, lieuRome, lieuParDefaut} from "../../types/lieux/Lieu.ts";
import {MetalStatut} from "../../types/Statut.ts";
import {Perso, Sexe} from "../../types/Perso.ts";
import {caracsDeBase} from "../../types/caracs/Caracs.ts";
import {evts_programmes} from "../evts/evts_programmes.ts";
import {Carriere, metiersEnum, metierTest} from "../../types/metiers/metiers.ts";
import {unAnAvantDebutCampagne} from "../dates/ennemi_interieur.ts";
import {APOLLON} from "../dieux/dieux.ts";

export const persoVide: Perso = {
    prenom: "Lucius",
    nom: "Aemilius",
    cognomen: "Paullus",
    carrieres: new Map<metiersEnum, Carriere>,
    caracs: caracsDeBase(),
    date: 0,
    dateNaissance: 0,
    dieu: {id: APOLLON},
    evtsProgrammes: evts_programmes,
    jourDuMois: 0,
    lieu: lieuParDefaut,
    sexe: Sexe.male,
    statut: {rang: 4, metalStatut: MetalStatut.bronze},
    talents: [],
    vitesseExecution: 5000,
    corruption: 0,
}

export const enfant: Perso = {
    prenom: "Lucius",
    nom: "Aemilius",
    cognomen: "Paullus",
    sexe: Sexe.male,
    dateNaissance: anneesToJours(478), // un peu avant 490 ab urbe condita cad le début de la 1ère guerre punique
    date: anneesToJours(490)-2, // pas laisser trop de liberté au joueur là dessus
    jourDuMois: -1,
    lieu: lieuParDefaut,
    statut: {rang: 4, metalStatut: MetalStatut.bronze},
    carrieres: new Map<metiersEnum, Carriere>,
    caracs: caracsDeBase(),
    talents: [],
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
    statut: {rang: 2, metalStatut: MetalStatut.argent},
    carrieres: new Map<metiersEnum, Carriere>,
    caracs: caracsDeBase(),
    talents: [],
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
    statut: {rang: 1, metalStatut: MetalStatut.argent},
    carrieres: new Map<metiersEnum, Carriere>([[metiersEnum.bourgmestre, metierTest]]),
    caracs: caracsDeBase(),
    talents: [],
    dieu: {id: APOLLON},
    evtsProgrammes: evts_programmes,
    vitesseExecution: 5000,
    corruption: 0,
};
