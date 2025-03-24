import {Perso} from "../../../types/Perso.ts";
import {metiersEnum} from "../../../types/metiers/metiers.ts";
import {GroupeEvts} from "../../../types/Evt.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testCarac, testMetier} from "../../../fonctions/des.ts";
import {TypeCarac} from "../../../types/caracs/Caracs.ts";
import {age, anneesToJours} from "../../../types/Date.ts";
import {aUneCarriere, commencerCarriere, travailleEnCeMomentComme} from "../../../types/metiers/metiersUtils.ts";

const passageDiplomeBoucher: (perso: Perso) => string = (perso: Perso) => {
    let texte: string =  "Vous êtes apprenti boucher depuis longtemps. ";
    const resTestMetier:ResultatTest = testMetier(perso, {metier: metiersEnum.apprenti_boucher, bonusMalus: 20});
    texte += resTestMetier.resume;
    if (resTestMetier.reussi) {
        texte +=  "Votre maître vous juge prêt. Vous allez pouvoir devenir boucher à part entière.";
        commencerCarriere(perso, metiersEnum.boucher, '');
    } else {
        texte += "Malheureusement d'après votre maître vous avez encore beaucoup à apprendre avant de pouvoir travailler seul. ";
        perso.evtsProgrammes.set(perso.date + anneesToJours(1), passageDiplomeBoucher);
    }
    return texte;
}

export const evts_boucher: GroupeEvts = {
    evts: [
        {
            id: "evts_boucher1",
            description: (perso: Perso): string => {
                let texte: string = `Vous voudriez devenir boucher. `
                const resTestDex:ResultatTest = testCarac(perso, {carac: TypeCarac.f, bonusMalus: 0});
                texte += resTestDex.resume;
                if (resTestDex.reussi) {
                    commencerCarriere(perso, metiersEnum.apprenti_boucher, '');
                    texte += `Votre motivation et votre force impressionnent le boucher qui vous engage comme apprenti à l'essai. `;
                    perso.evtsProgrammes.set(perso.date + anneesToJours(3), passageDiplomeBoucher);
                } else {
                    texte += `Malheureusement vous n'impressionnez guère le boucher qui refuse de vous prendre comme apprenti. `;
                }
                return texte;
            },
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Gerd_Fleisher.webp",
            conditions: (perso: Perso): boolean =>
                !aUneCarriere(perso)
                && age(perso) >= 14,
        },
        {
            id: "evts_boucher2",
            description: (perso: Perso): string => {
                let texte: string = "";
                const resTestMetier:ResultatTest = testMetier(perso, {metier: metiersEnum.boucher, bonusMalus: 0});
                texte += resTestMetier.resume;
                if (resTestMetier.reussi) {
                    texte += `Votre viande est appréciée de tous. `;
                } else {
                    texte += `Vous avez beaucoup de mal à faire apprécier votre viande. `;
                }
                return texte;
            },
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Gerd_Fleisher.webp",
            conditions: (perso: Perso): boolean =>
                travailleEnCeMomentComme(perso, metiersEnum.boucher),
        },
    ],
    probaParDefaut: 5,
};