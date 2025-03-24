import {Perso} from "../../../types/Perso.ts";
import {metiersEnum} from "../../../types/metiers/metiers.ts";
import {GroupeEvts} from "../../../types/Evt.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testCarac, testMetier} from "../../../fonctions/des.ts";
import {TypeCarac} from "../../../types/caracs/Caracs.ts";
import {age, anneesToJours} from "../../../types/Date.ts";
import {aUneCarriere, commencerCarriere, travailleEnCeMomentComme} from "../../../types/metiers/metiersUtils.ts";

const passageDiplomeBarbierChirurgien: (perso: Perso) => string = (perso: Perso) => {
    let texte: string =  "Vous êtes apprenti barbier chirurgien depuis des années. ";
    const resTestMetier:ResultatTest = testMetier(perso, {metier: metiersEnum.apprenti_barbier_chirurgien, bonusMalus: 20});
    texte += resTestMetier.resume;
    if (resTestMetier.reussi) {
        texte +=  "Votre maître vous juge prêt. Vous allez pouvoir devenir un barbier chirurgien à part entière.";
        commencerCarriere(perso, metiersEnum.boulanger, '');
    } else {
        texte += "Malheureusement d'après votre maître vous avez encore beaucoup à apprendre avant de pouvoir travailler seul. ";
        perso.evtsProgrammes.set(perso.date + anneesToJours(1), passageDiplomeBarbierChirurgien);
    }
    return texte;
}

export const evts_barbierChirurgien: GroupeEvts = {
    evts: [
        {
            id: "evts_barbierChirurgien1",
            description: (perso: Perso): string => {
                let texte: string = `Vous voudriez devenir barbier chirurgien. `
                const resTestInt:ResultatTest = testCarac(perso, {carac: TypeCarac.int, bonusMalus: 20});
                const resTestFm:ResultatTest = testCarac(perso, {carac: TypeCarac.fm, bonusMalus: 20});
                const resTestDex:ResultatTest = testCarac(perso, {carac: TypeCarac.dex, bonusMalus: 20});
                texte += resTestInt.resume;
                texte += resTestFm.resume;
                texte += resTestDex.resume;
                if (!resTestInt.reussi) {
                    texte += `C'est dur à avaler mais on vous fait rapidement comprendre que vous n'êtes pas assez intelligent pour faire un bon médecin. `;
                } else if (!resTestFm.reussi) {
                    texte += `Malheureusement vous vous rendez vite compte après avoir observé le médecin au travail pendant une journée complète, que vous n'avez pas l'estomac assez solide pour ce travail. `;
                } else if (!resTestDex.reussi) {
                    texte += `Malheureusement après quelques tests le barbier est sans appel : vous n'êtes pas assez habile de vos mains pour apprendre à manier le rasoir sans blesser le client. `;
                } else {
                    texte += `C'est formidable : le médecin de la ville vous juge apte à devenir son apprenti ! "
                    + "L'apprentissage est long et difficile  et durera des années mais cela en vaut la chandelle. `;
                    commencerCarriere(perso, metiersEnum.apprenti_barbier_chirurgien, '');
                    perso.evtsProgrammes.set(perso.date + anneesToJours(5), passageDiplomeBarbierChirurgien);
                }
                return texte;
            },
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Martha_Scheren.webp",
            conditions: (perso: Perso): boolean =>
                !aUneCarriere(perso)
                && age(perso) >= 14,
        },
        {
            id: "evts_barbierChirurgien2",
            description: (perso: Perso): string => {
                let texte: string = "";
                const resTestMetier:ResultatTest = testMetier(perso, {metier: metiersEnum.boulanger, bonusMalus: 0});
                texte += resTestMetier.resume;
                if (resTestMetier.reussi) {
                    texte += `VOus êtes un médecin efficace et respecté. `;
                } else {
                    texte += `Vous avez beaucoup de mal à être un bon médecin. `;
                }
                return texte;
            },
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Martha_Scheren.webp",
            conditions: (perso: Perso): boolean =>
                travailleEnCeMomentComme(perso, metiersEnum.barbier_chirurgien),
        },
    ],
    probaParDefaut: 5,
};