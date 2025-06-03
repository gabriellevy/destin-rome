import {Perso} from "../../types/Perso.ts";
import {List, ListItem, ListItemText, Typography} from "@mui/material";
import {getCompValue, TypeCompetence} from "../../types/comps/Comps.ts";

interface CaracProps {
    primaryText: string,
    perso: Perso,
    competenceType: TypeCompetence,
}

const Comp = ({primaryText, perso, competenceType}:CaracProps) => {
    return (
        <ListItem sx={{padding: '0px',width: "auto"}}>
            <ListItemText
                primary={
                    <Typography
                        variant="body2"
                        style={{ display: 'inline', fontSize: '13px' }}
                    >
                        {primaryText}
                    </Typography>
                }
                secondary={
                    <Typography
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

        return (<List sx={{
            display: "flex",
            flexFlow: "column wrap",
            gap: "0 10px",
            height: 300,
            overflow: "auto"
        }}>
            <Comp
                primaryText="Adresse"
                perso={perso}
                competenceType={TypeCompetence.adresse}
            />
            <Comp
                primaryText="Animaux"
                perso={perso}
                competenceType={TypeCompetence.animaux}
            />
            <Comp
                primaryText="Armes de corps à corps"
                perso={perso}
                competenceType={TypeCompetence.armeCaC}
            />
            <Comp
                primaryText="Bagarre"
                perso={perso}
                competenceType={TypeCompetence.bagarre}
            />
            <Comp
                primaryText="Charme"
                perso={perso}
                competenceType={TypeCompetence.charme}
            />
            <Comp
                primaryText="Chance"
                perso={perso}
                competenceType={TypeCompetence.chance}
            />
            <Comp
                primaryText="Commandement"
                perso={perso}
                competenceType={TypeCompetence.commandement}
            />
            <Comp
                primaryText="Dextérité"
                perso={perso}
                competenceType={TypeCompetence.dexterite}
            />
            <Comp
                primaryText="Discours"
                perso={perso}
                competenceType={TypeCompetence.discours}
            />
            <Comp
                primaryText="Discrétion"
                perso={perso}
                competenceType={TypeCompetence.discretion}
            />
            <Comp
                primaryText="Endurance"
                perso={perso}
                competenceType={TypeCompetence.endurance}
            />
            <Comp
                primaryText="Évaluation"
                perso={perso}
                competenceType={TypeCompetence.evaluation}
            />
            <Comp
                primaryText="Force"
                perso={perso}
                competenceType={TypeCompetence.force}
            />
            <Comp
                primaryText="Intelligence"
                perso={perso}
                competenceType={TypeCompetence.intelligence}
            />
            <Comp
                primaryText="Intimidation"
                perso={perso}
                competenceType={TypeCompetence.intimidation}
            />
            <Comp
                primaryText="Intuition"
                perso={perso}
                competenceType={TypeCompetence.intuition}
            />
            <Comp
                primaryText="Jeux"
                perso={perso}
                competenceType={TypeCompetence.jeux}
            />
            <Comp
                primaryText="Marchandage"
                perso={perso}
                competenceType={TypeCompetence.marchandage}
            />
            <Comp
                primaryText="Mouvement"
                perso={perso}
                competenceType={TypeCompetence.mouvement}
            />
            <Comp
                primaryText="Orientation"
                perso={perso}
                competenceType={TypeCompetence.orientation}
            />
            <Comp
                primaryText="Perception"
                perso={perso}
                competenceType={TypeCompetence.perception}
            />
            <Comp
                primaryText="Ragot"
                perso={perso}
                competenceType={TypeCompetence.ragot}
            />
            <Comp
                primaryText="Réflexes"
                perso={perso}
                competenceType={TypeCompetence.reflexes}
            />
            <Comp
                primaryText="Survie"
                perso={perso}
                competenceType={TypeCompetence.survie}
            />
            <Comp
                primaryText="Tir"
                perso={perso}
                competenceType={TypeCompetence.tir}
            />
            <Comp
                primaryText="Tromperie"
                perso={perso}
                competenceType={TypeCompetence.tromperie}
            />
            <Comp
                primaryText="Vigilance"
                perso={perso}
                competenceType={TypeCompetence.vigilance}
            />
            <Comp
                primaryText="Volonté"
                perso={perso}
                competenceType={TypeCompetence.volonte}
            />
        </List>);
}