import {GroupeEvts} from "../../../types/Evt.ts";
import {Perso} from "../../../types/Perso.ts";
import {metiersEnum} from "../../../types/metiers/metiers.ts";
import {dieuAleatoire} from "../../dieux/dieux.ts";
import {Dieu} from "../../../types/Dieu.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testCarac} from "../../../fonctions/des.ts";
import {TypeCarac} from "../../../types/caracs/Caracs.ts";
import {talents} from "../../talents.ts";
import {commencerCarriere, neSuitPasUneCarriereDe} from "../../../types/metiers/metiersUtils.ts";

export const evts_pretres: GroupeEvts = {
    evts: [
        {
            id: "evts_pretres1",
            description: (perso: Perso): string => {
                const dieu:Dieu = dieuAleatoire();
                let texte: string = `Un jour où vous entrez dans le temple de ${dieu.id} il vous semble sentir sa présence. Une mise à l'épreuve peut-être ? `
                const resTest:ResultatTest = testCarac(perso, {carac: TypeCarac.fm, bonusMalus: 20});
                texte += resTest.resume;
                if (resTest.reussi) {
                    let metierEnum: metiersEnum = metiersEnum.initie_pretre;
                    if (Math.random() > 0.5) {
                        metierEnum = metiersEnum.novice;
                    }
                    commencerCarriere(perso, metierEnum, '');
                    perso.dieu = dieu;
                    perso.talents.push(talents.beni);
                    texte += `Vous êtes frappé par la révélation de ${dieu.id} et sentez que ${dieu.id} a un destin pour vous et répond à vos prières. ` +
                        `À partir de ce jour vous ne rêvez plus que de servir ${dieu.id} et parvenez à vous faire accepter comme ${metierEnum.toString()}. `
                } else {
                    texte += `Malheureusement la sensation passe aussi vite qu'elle est arrivée. Avez vous échoué ? Vous êtes vous imaginé des choses ? `;
                }
                return texte;
            },
            conditions: (perso: Perso): boolean =>
                neSuitPasUneCarriereDe(perso, metiersEnum.initie_pretre)
                && neSuitPasUneCarriereDe(perso, metiersEnum.novice)
                && neSuitPasUneCarriereDe(perso, metiersEnum.pretre)
                && neSuitPasUneCarriereDe(perso, metiersEnum.moine),
            proba: 0.1,
        },
    ],
    probaParDefaut: 10,
};