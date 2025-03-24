import {createContext} from "react";
import {Perso} from "../types/Perso.ts";

export type PersoContexteType = {
    perso: Perso;
    setPerso: (perso: Perso) => void;
};

export const PersoContexte = createContext<PersoContexteType | null>(null);