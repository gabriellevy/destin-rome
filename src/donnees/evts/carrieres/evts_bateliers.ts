import {Perso} from "../../../types/Perso.ts";
import {metiersEnum} from "../../../types/metiers/metiers.ts";
import {GroupeEvts} from "../../../types/Evt.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testComp} from "../../../fonctions/des.ts";
import {TypeCompetence} from "../../../types/comps/Comps.ts";
import {age} from "../../../types/Date.ts";
import {auBordDeLaRiviere} from "../../../types/lieux/Lieu.ts";
import {aUneCarriere, commencerCarriere, travailleEnCeMomentComme} from "../../../types/metiers/metiersUtils.ts";

export const evts_batelier: GroupeEvts = {
    evts: [
        {
            id: "evts_batelier1",
            description: (perso: Perso): string => {
                let texte: string = `Vous hésitez à devenir batelier. `
                const resTestFor:ResultatTest = testComp(perso, {comp: TypeCompetence.f, bonusMalus: 20});
                const resTestEnd:ResultatTest = testComp(perso, {comp: TypeCompetence.e, bonusMalus: 20});
                texte += resTestFor.resume;
                texte += resTestEnd.resume;
                if (resTestFor.reussi && resTestEnd.reussi) {
                    commencerCarriere(perso, metiersEnum.batelier, '');
                    texte += `Coriace comme vous l'êtes, vous impressionnez le capitaine qui vous engage à l'essai. `;
                } else {
                    texte += `Malheureusement c'est un métier qui demande une très robuste constitution et vous êtes jugé trop frêle par le capitaine. `;
                }
                return texte;
            },
            conditions: (perso: Perso): boolean =>
                !aUneCarriere(perso)
                && age(perso) >= 14
                && auBordDeLaRiviere(perso),
        },
        {
            id: "evts_batelier2",
            description: (perso: Perso): string => {
                let texte: string = "";
                const resTestFor:ResultatTest = testComp(perso, {comp: TypeCompetence.f, bonusMalus: 40});
                const resTestEnd:ResultatTest = testComp(perso, {comp: TypeCompetence.e, bonusMalus: 40});
                texte += resTestEnd.resume;
                texte += resTestEnd.resume;
                if (resTestFor.reussi && resTestEnd.reussi) {
                    texte += `Vous êtes un batelier efficace et respecté. `;
                } else {
                    texte += `Vous avez beaucoup de mal à tenir le rythme épuisant de votre métier de batelier. `;
                }
                return texte;
            },
            conditions: (perso: Perso): boolean =>
                travailleEnCeMomentComme(perso, metiersEnum.batelier),
        },
    ],
    probaParDefaut: 5,
};