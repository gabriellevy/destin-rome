import {Perso} from "../types/Perso.ts";
import {ResultatTest} from "../types/LancerDe.ts";
import {testComp} from "./des.ts";
import {TypeCompetence} from "../types/comps/Comps.ts";

export function testCorruptionMentale(perso: Perso): ResultatTest {
    const resTest:ResultatTest = testComp(perso, {comp: TypeCompetence.volonte, bonusMalus:0});
    if (resTest.reussi) {
        resTest.resume += "Vous résistez à la corruption mentale. <br/>";
    } else {
        resTest.resume += "Votre âme subit l'effet de la corruption. <br/>";
        perso.corruption += 1;
        if (resTest.critical) {
            perso.corruption += 2;
        }
        // TODO : EFFETS DES MUTATIONS ETC
    }
    return resTest;
}

export function testCorruptionPhysique(perso: Perso): ResultatTest {
    const resTest:ResultatTest = testComp(perso, {comp: TypeCompetence.endurance, bonusMalus:0});
    if (resTest.reussi) {
        resTest.resume += "Vous résistez à la corruption de votre corps. <br/>";
    } else {
        resTest.resume += "Votre corps subit l'effet de la corruption. <br/>";
        perso.corruption += 1;
        if (resTest.critical) {
            perso.corruption += 2;
        }
        // TODO : EFFETS DES MUTATIONS ETC
    }
    return resTest;
}