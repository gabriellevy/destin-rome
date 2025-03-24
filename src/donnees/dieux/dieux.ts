import {Dieu} from "../../types/Dieu.ts";

export function dieuAleatoire(): Dieu {
    return dieux[Math.floor(Math.random() * dieux.length)];
}

// TODO : ajouter les autres dieux ? Classer en plusieurs "niveaux" ? cf Imperator p160
// + description
// + dieux non romains ?

export const dieux: Dieu[] = [
    {
        id: "Apollon"
    },
    {
        id: "Bacchus"
    },
    {
        id: "Cérès"
    },
    {
        id: "Diane"
    },
    {
        id: "Janus"
    },
    {
        id: "Junon"
    },
    {
        id: "Jupiter"
    },
    {
        id: "Mars"
    },
    {
        id: "Minerve"
    },
    {
        id: "Mercure"
    },
    {
        id: "Neptune"
    },
    {
        id: "Pluton"
    },
    {
        id: "Saturne"
    },
    {
        id: "Vénus"
    },
    {
        id: "Vesta"
    },
    {
        id: "Vulcain"
    },
]