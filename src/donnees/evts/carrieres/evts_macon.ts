import {Perso} from "../../../types/Perso.ts";
import {metiersEnum} from "../../../types/metiers/metiers.ts";
import {GroupeEvts} from "../../../types/Evt.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testComp, testMetier} from "../../../fonctions/des.ts";
import {TypeCompetence} from "../../../types/comps/Comps.ts";
import {age} from "../../../types/Date.ts";
import {aUneCarriere, commencerCarriere, travailleEnCeMomentComme} from "../../../types/metiers/metiersUtils.ts";

export const evts_macon: GroupeEvts = {
    evts: [
        {
            id: "evts_macon1",
            description: (perso: Perso): string => {
                let texte: string = `Vous avez décidé de devenir maçon. `
                const resTestF:ResultatTest = testComp(perso, {comp: TypeCompetence.force, bonusMalus: 20});
                const resTestE:ResultatTest = testComp(perso, {comp: TypeCompetence.endurance, bonusMalus: 20});
                texte += resTestF.resume;
                texte += resTestE.resume;
                if (!resTestF.reussi || !resTestE.reussi) {
                    texte += `Malheureusement vous vous révélez trop faible pour ce métier épuisant. `;
                }
                else {
                    commencerCarriere(perso, metiersEnum.macon, '');
                    texte += `Solide comme vous êtes, vous êtes engagé. `;
                }
                return texte;
            },
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Kai_Bauerr.webp",
            conditions: (perso: Perso): boolean =>
                !aUneCarriere(perso)
                && age(perso) >= 14,
        },
        {
            id: "evts_macon2",
            description: (perso: Perso): string => {
                let texte: string = "";
                const resTestMetier:ResultatTest = testMetier(perso, {metier: metiersEnum.macon, bonusMalus: 20});
                texte += resTestMetier.resume;
                if (resTestMetier.reussi) {
                    texte += `Vous êtes un maçon efficace. `;
                } else {
                    texte += `Vous avez beaucoup de mal à tenir le rythme épuisant de votre métier de maçon. `;
                }
                return texte;
            },
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Kai_Bauerr.webp",
            conditions: (perso: Perso): boolean =>
                travailleEnCeMomentComme(perso, metiersEnum.macon),
        },
    ],
    probaParDefaut: 5,
};