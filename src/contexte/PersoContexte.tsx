import {useState} from "react";
import {Perso} from "../types/Perso.ts";
import {jeuneHommeEnVoyageEnCampanie} from "../donnees/persos/persos_pregens.ts";
import { PersoContexte } from "./ContexteTypes.ts";

export const PersoContexteProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [perso, setPerso] = useState<Perso>(jeuneHommeEnVoyageEnCampanie);

    return (
        <PersoContexte.Provider value={{ perso, setPerso }}>
            {children}
        </PersoContexte.Provider>
    );
};

export default PersoContexteProvider;