import {Box, Button, List, ListItem, ListItemText, Typography} from '@mui/material';
import {age, joursToAnnees} from "../types/Date.ts";
import {getCompValue, TypeCompetence} from "../types/comps/Comps.ts";
import {useContext} from "react";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteTypes.ts";
import {Carriere, metiersEnum} from "../types/metiers/metiers.ts";
import {JOURS_PAR_AN} from "../donnees/dates/calendrier.ts";
import {Perso} from "../types/Perso.ts";

interface CaracProps {
    primaryText: string,
    perso: Perso,
    competenceType: TypeCompetence,
}

const Carac = ({primaryText, perso, competenceType}:CaracProps) => {
    return (
        <ListItem sx={{padding: '0px'}}>
            <ListItemText
                primary={
                    <Typography
                        component="span"
                        variant="body1"
                        style={{ display: 'inline', fontSize: '13px' }}
                    >
                        {primaryText}
                    </Typography>
                }
                secondary={
                    <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                        style={{ display: 'inline', marginLeft: '10px', fontSize: '13px' }}
                    >
                        {getCompValue(perso, competenceType)}
                    </Typography>
                }
                sx={{margin: '0px', fontSize: '5px'}}
            />
        </ListItem>
    );
};

export default function AffichagePerso() {
    const { perso } = useContext(PersoContexte) as PersoContexteType;

    const exporter = () => {
        const persoStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(perso));
        const baliseTelechargement = document.createElement('a');
        baliseTelechargement.setAttribute("href", persoStr);
        baliseTelechargement.setAttribute("download", "character.json");
        document.body.appendChild(baliseTelechargement);
        baliseTelechargement.click();
        baliseTelechargement.remove();
    };

    const affichageCarriere = (carriere: Carriere) => {
        let intituleMetier: string = carriere.metier.intitule(perso, carriere);
        if (carriere.guilde) {
            intituleMetier += ' ('+carriere.guilde+')';
        }
        const dureeCarriere: string = carriere.duree >= JOURS_PAR_AN ?
            `(${joursToAnnees(carriere.duree)} années)` : `(${carriere.duree} jours)`;

        // TODO : afficher niveau de compétence dans ce métier

        return (carriere.metier && carriere.actif &&
            <ListItem>
                <ListItemText primary={intituleMetier} secondary={dureeCarriere}/>
            </ListItem>
        );
    }

    return (
        <Box component="nav" sx={{ flexGrow: 1 }}>
            <List dense>
                <ListItem>
                    <Typography variant="h5" gutterBottom>
                        <ListItemText primary={`${perso.prenom} ${perso.nom} ${perso.cognomen}`} secondary={`${age(perso)} ans`}/>
                    </Typography>
                </ListItem>
                {
                    Array.from(perso.carrieres).map(([key, value]: [metiersEnum, Carriere]) => {
                        return (key && value &&
                            affichageCarriere(value)
                        );
                    })
                }
                <ListItem>
                    <ListItemText primary="Maîtrises" secondary={perso.maitrises.join(', ')}/>
                </ListItem>
            </List>
            <List>
                <Carac
                    primaryText="Armes de corps à corps"
                    perso={perso}
                    competenceType={TypeCompetence.armeCaC}
                />
                <Carac
                    primaryText="Bagarre"
                    perso={perso}
                    competenceType={TypeCompetence.bagarre}
                />
                <Carac
                    primaryText="Charme"
                    perso={perso}
                    competenceType={TypeCompetence.charme}
                />
                <Carac
                    primaryText="Dextérité"
                    perso={perso}
                    competenceType={TypeCompetence.dexterite}
                />
                <Carac
                    primaryText="Endurance"
                    perso={perso}
                    competenceType={TypeCompetence.endurance}
                />
                <Carac
                    primaryText="Force"
                    perso={perso}
                    competenceType={TypeCompetence.force}
                />
                <Carac
                    primaryText="Intelligence"
                    perso={perso}
                    competenceType={TypeCompetence.intelligence}
                />
                <Carac
                    primaryText="Mouvement"
                    perso={perso}
                    competenceType={TypeCompetence.mouvement}
                />
                <Carac
                    primaryText="Réflexes"
                    perso={perso}
                    competenceType={TypeCompetence.reflexes}
                />
                <Carac
                    primaryText="Tir"
                    perso={perso}
                    competenceType={TypeCompetence.tir}
                />
                <Carac
                    primaryText="Volonté"
                    perso={perso}
                    competenceType={TypeCompetence.volonte}
                />
            </List>
            {
                perso.corruption > 0 && (
                    <ListItem>
                        <ListItemText primary="Corruption" secondary={perso.corruption}/>
                    </ListItem>
                )
            }
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={exporter} size="small">
                    Exporter le perso
                </Button>
            </Box>
        </Box>
    );
}
