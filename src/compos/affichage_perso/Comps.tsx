import {Perso} from "../../types/Perso.ts";
import {List, ListItem, ListItemText, Typography} from "@mui/material";
import {getCompValue, TypeCompetence} from "../../types/comps/Comps.ts";

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

interface CompsProps {
    perso: Perso,
}

export default function Comps ({perso}:CompsProps) {

        return (<List>
            <Carac
                primaryText="Adresse"
                perso={perso}
                competenceType={TypeCompetence.adresse}
            />
            <Carac
                primaryText="Animaux"
                perso={perso}
                competenceType={TypeCompetence.animaux}
            />
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
                primaryText="Chance"
                perso={perso}
                competenceType={TypeCompetence.chance}
            />
            <Carac
                primaryText="Commandement"
                perso={perso}
                competenceType={TypeCompetence.commandement}
            />
            <Carac
                primaryText="Dextérité"
                perso={perso}
                competenceType={TypeCompetence.dexterite}
            />
            <Carac
                primaryText="Discours"
                perso={perso}
                competenceType={TypeCompetence.discours}
            />
            <Carac
                primaryText="Discrétion"
                perso={perso}
                competenceType={TypeCompetence.discretion}
            />
            <Carac
                primaryText="Endurance"
                perso={perso}
                competenceType={TypeCompetence.endurance}
            />
            <Carac
                primaryText="Évaluation"
                perso={perso}
                competenceType={TypeCompetence.evaluation}
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
                primaryText="Intimidation"
                perso={perso}
                competenceType={TypeCompetence.intimidation}
            />
            <Carac
                primaryText="Intuition"
                perso={perso}
                competenceType={TypeCompetence.intuition}
            />
            <Carac
                primaryText="Jeux"
                perso={perso}
                competenceType={TypeCompetence.jeux}
            />
            <Carac
                primaryText="Marchandage"
                perso={perso}
                competenceType={TypeCompetence.marchandage}
            />
            <Carac
                primaryText="Mouvement"
                perso={perso}
                competenceType={TypeCompetence.mouvement}
            />
            <Carac
                primaryText="Orientation"
                perso={perso}
                competenceType={TypeCompetence.orientation}
            />
            <Carac
                primaryText="Perception"
                perso={perso}
                competenceType={TypeCompetence.perception}
            />
            <Carac
                primaryText="Ragot"
                perso={perso}
                competenceType={TypeCompetence.ragot}
            />
            <Carac
                primaryText="Réflexes"
                perso={perso}
                competenceType={TypeCompetence.reflexes}
            />
            <Carac
                primaryText="Survie"
                perso={perso}
                competenceType={TypeCompetence.survie}
            />
            <Carac
                primaryText="Tir"
                perso={perso}
                competenceType={TypeCompetence.tir}
            />
            <Carac
                primaryText="Tromperie"
                perso={perso}
                competenceType={TypeCompetence.tromperie}
            />
            <Carac
                primaryText="Vigilance"
                perso={perso}
                competenceType={TypeCompetence.vigilance}
            />
            <Carac
                primaryText="Volonté"
                perso={perso}
                competenceType={TypeCompetence.volonte}
            />
        </List>);
}