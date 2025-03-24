import {Perso} from "../../../types/Perso.ts";
import {metiersEnum} from "../../../types/metiers/metiers.ts";
import {GroupeEvts} from "../../../types/Evt.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testCarac, testMetier} from "../../../fonctions/des.ts";
import {TypeCarac} from "../../../types/caracs/Caracs.ts";
import {age} from "../../../types/Date.ts";
import {aUneCarriere, commencerCarriere, travailleEnCeMomentComme} from "../../../types/metiers/metiersUtils.ts";

export const evts_serveur: GroupeEvts = {
    evts: [
        {
            id: "evts_serveur1",
            description: (perso: Perso): string => {
                const taverne: string = "la taverne rouge";
                let texte: string = `Vous hésitez à devenir serveur et décider de postuler à ${taverne} de Klara Kellner. `
                const resTestDex:ResultatTest = testCarac(perso, {carac: TypeCarac.dex, bonusMalus: 40});
                const resTestSoc:ResultatTest = testCarac(perso, {carac: TypeCarac.soc, bonusMalus: 40});
                texte += resTestDex.resume;
                texte += resTestSoc.resume;
                if (!resTestDex.reussi) {
                    texte += `Malheureusement vous êtes excessivement maladroit et la patronne vous recale gentiment. `;
                }
                else if (!resTestSoc.reussi) {
                    texte += `Malheureusement votre manque de tact et votre physique peu facile rebute la patronne qui vous conseille de vous lancer dans autre chose. `;
                }
                else {
                    commencerCarriere(perso, metiersEnum.serveur, taverne);
                    texte += `La patronne n'est pas très exigeante à l'embauche mais il va falloir lui prouver votre motivation. `;
                }
                return texte;
            },
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Klara_Kellner.webp",
            conditions: (perso: Perso): boolean =>
                !aUneCarriere(perso)
                && age(perso) >= 14, // TODO : tester que dans une ville ?
        },
        {
            id: "evts_serveur2",
            description: (perso: Perso): string => {
                let texte: string = "";
                const resTestMetier:ResultatTest = testMetier(perso, {metier: metiersEnum.serveur, bonusMalus: 20});
                texte += resTestMetier.resume;
                if (resTestMetier.reussi) {
                    texte += `Vous êtes un serveur efficace et apprécié. `;
                } else {
                    texte += `Vous avez beaucoup de mal à tenir le rythme épuisant de votre métier de serveur. `;
                }
                return texte;
            },
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Klara_Kellner.webp",
            conditions: (perso: Perso): boolean =>
                travailleEnCeMomentComme(perso, metiersEnum.serveur),
        },
    ],
    probaParDefaut: 5,
};