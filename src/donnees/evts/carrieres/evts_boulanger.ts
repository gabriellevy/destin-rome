import {Perso} from "../../../types/Perso.ts";
import {metiersEnum} from "../../../types/metiers/metiers.ts";
import {GroupeEvts} from "../../../types/Evt.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testCarac, testMetier} from "../../../fonctions/des.ts";
import {TypeCarac} from "../../../types/caracs/Caracs.ts";
import {age, anneesToJours} from "../../../types/Date.ts";
import {aUneCarriere, commencerCarriere, travailleEnCeMomentComme} from "../../../types/metiers/metiersUtils.ts";

const passageDiplomeBoulanger: (perso: Perso) => string = (perso: Perso) => {
    let texte: string =  "Vous êtes apprenti boulanger depuis longtemps. ";
    const resTestMetier:ResultatTest = testMetier(perso, {metier: metiersEnum.apprenti_boulanger, bonusMalus: 20});
    texte += resTestMetier.resume;
    if (resTestMetier.reussi) {
        texte +=  "Votre maître vous juge prêt. Vous allez pouvoir devenir boulanger à part entière.";
        commencerCarriere(perso, metiersEnum.boulanger, '');
    } else {
        texte += "Malheureusement d'après votre maître vous avez encore beaucoup à apprendre avant de pouvoir travailler seul. ";
        perso.evtsProgrammes.set(perso.date + anneesToJours(1), passageDiplomeBoulanger);
    }
    return texte;
}

export const evts_boulanger: GroupeEvts = {
    evts: [
        {
            id: "evts_boulanger1",
            description: (perso: Perso): string => {
                let texte: string = `Vous voudriez devenir boulanger. `
                const resTestDex:ResultatTest = testCarac(perso, {carac: TypeCarac.dex, bonusMalus: 0});
                texte += resTestDex.resume;
                if (resTestDex.reussi) {
                    commencerCarriere(perso, metiersEnum.apprenti_boulanger, '');
                    texte += `Votre motivation et votre dextérité impressionnent le boulanger qui vous engage comme apprenti à l'essai. `;
                    perso.evtsProgrammes.set(perso.date + anneesToJours(3), passageDiplomeBoulanger);
                } else {
                    texte += `Malheureusement vous n'impressionnez guère le boulanger qui refuse de vous prendre comme apprenti. `;
                }
                return texte;
            },
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Bruno_B%C3%A4cker.webp",
            conditions: (perso: Perso): boolean =>
                !aUneCarriere(perso)
                && age(perso) >= 14,
        },
        {
            id: "evts_boulanger2",
            description: (perso: Perso): string => {
                let texte: string = "";
                const resTestMetier:ResultatTest = testMetier(perso, {metier: metiersEnum.boulanger, bonusMalus: 0});
                texte += resTestMetier.resume;
                if (resTestMetier.reussi) {
                    texte += `Votre pain est apprécié de tous. `;
                } else {
                    texte += `Vous avez beaucoup de mal à faire apprécier votre pain. `;
                }
                return texte;
            },
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Bruno_B%C3%A4cker.webp",
            conditions: (perso: Perso): boolean =>
                travailleEnCeMomentComme(perso, metiersEnum.boulanger),
        },
    ],
    probaParDefaut: 5,
};