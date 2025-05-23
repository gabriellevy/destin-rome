import {Controller, FormProvider, useForm} from 'react-hook-form';
import {
    Box,
    Button,
    FormControl,
    Grid2,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography
} from '@mui/material';
import {Perso, Sexe} from "../../types/Perso.ts";
import SelectionLieu from "./SelectionLieu.tsx";
import SelectionStatut from "./SelectionStatut.tsx";
import SelectionDates from "./SelectionDates.tsx";
import {anneesToJours} from "../../types/Date.ts";
import {d2, d400} from "../../fonctions/des.ts";
import {richeDeRome, persoVide} from "../../donnees/persos/persos_pregens.ts";
import {useContext} from "react";
import {PersoContexte, PersoContexteType} from "../../contexte/ContexteTypes.ts";
import {Ville} from "../../donnees/geographie/villes.ts";
import {vaA} from "../../types/lieux/Lieu.ts";
import {getRandomEnumValue, getRandomInt, randomStatut} from "../../fonctions/random.ts";
import {
    EMPIRE_NOMS_F,
    EMPIRE_NOMS_M1, EMPIRE_cognomen_M2,
    EMPIRE_PRENOMS_F,
    EMPIRE_PRENOMS_M
} from "../../donnees/noms/humains/empire.ts";

interface CharacterFormProps {
    setAfficherForm: (afficher: boolean) => void;
}

export default function GenPersoForm({ setAfficherForm }: CharacterFormProps) {
    const { setPerso } = useContext(PersoContexte) as PersoContexteType;
    const methods = useForm<Perso>({
        defaultValues: richeDeRome
    });
    const { reset } = methods;

    const chargerPerso = (persoCharge: Perso) => {
        setPerso({...persoCharge});
        reset({...persoCharge});
        setAfficherForm(false);
    };

    const persoAleatoire = () => {
        const persoAl: Perso = persoVide;
        // age aléatoire
        persoAl.age = 10 + Math.floor(Math.random() * 35);
        vaA(persoAl, getRandomEnumValue(Ville));
        persoAl.statut = randomStatut();
        persoAl.sexe = d2() == 1 ? Sexe.femelle : Sexe.male;
        // nom aléatoire (TODO : selon nation, race etc)
        persoAl.prenom = persoAl.sexe ?
            EMPIRE_PRENOMS_M[getRandomInt(EMPIRE_PRENOMS_M.length)] :
            EMPIRE_PRENOMS_F[getRandomInt(EMPIRE_PRENOMS_F.length)];
        persoAl.nom = persoAl.sexe ?
            EMPIRE_NOMS_M1[getRandomInt(EMPIRE_NOMS_M1.length)] :
            EMPIRE_NOMS_F[getRandomInt(EMPIRE_NOMS_F.length)];
        persoAl.cognomen = persoAl.sexe ?
            EMPIRE_cognomen_M2[getRandomInt(EMPIRE_cognomen_M2.length)] :
            '';

        reset({...persoAl});
        setAfficherForm(true);
    };

    const soumettrePerso = (data: Perso) => {
        let persoFinal: Perso = {
            ...data,
        }
        // conversions de données après soumission de perso :
        // date en jours est déduite de date en années
        if (data.anneeDeDepart) {
            const dateEnJours: number = anneesToJours(data.anneeDeDepart) + d400()-1;
            persoFinal = {
                ...persoFinal,
                date: dateEnJours,
            }
        }
        // date de naissance est déduite de l'âge
        if (data.age) {
            const dateNaissance: number = persoFinal.date - anneesToJours(data.age) - d400() + 1;
            persoFinal = {
                ...persoFinal,
                dateNaissance: dateNaissance,
            }
        }
        setPerso(persoFinal);
        setAfficherForm(false);
    };

    const handleLoadCharacter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result;
                if (typeof content === 'string') {
                    try {
                        const loadedCharacter = JSON.parse(content) as Perso;
                        methods.reset(loadedCharacter);
                        chargerPerso(loadedCharacter);
                    } catch (error) {
                        console.error('Error parsing JSON:', error);
                    }
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mt: 4, height: '100%', overflowY: 'auto' }}>
            <Box component="form" onSubmit={methods.handleSubmit(soumettrePerso)} sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
                <FormProvider {...methods}>
                    <Typography variant="h4" gutterBottom>Créer un personnage</Typography>
                    <Grid2 container spacing={1} sx={{ mb: 2 }} columns={12}>
                        <Grid2 size={3}>
                            <Controller
                                name="prenom"
                                control={methods.control}
                                rules={{ required: "Vous devez avoir un prénom" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Praenomen"
                                        margin="normal"
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid2>
                        <Grid2 size={3}>
                            <Controller
                                name="nom"
                                control={methods.control}
                                rules={{ required: "Vous devez avoir un nom" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Nomen"
                                        margin="normal"
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid2>
                        <Grid2 size={3}>
                            <Controller
                                name="cognomen"
                                control={methods.control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Cognomen"
                                        margin="normal"
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid2>
                        <Grid2 size={3}>
                            <Controller
                                name="sexe"
                                control={methods.control}
                                render={({ field }) => (
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel>Sexe</InputLabel>
                                        <Select {...field} label="Sexe">
                                            <MenuItem value={Sexe.male}>{Sexe.male}</MenuItem>
                                            <MenuItem value={Sexe.femelle}>{Sexe.femelle}</MenuItem>
                                        </Select>
                                    </FormControl>
                                )}
                            />
                        </Grid2>
                        <SelectionLieu />
                        <SelectionStatut />
                        <SelectionDates />
                        <Grid2 size={4}>
                            <Button type="submit" variant="contained" color="primary">
                                Commencer
                            </Button>
                        </Grid2>
                        <Grid2 size={4}>
                            <Button
                                component="label"
                                variant="contained"
                                color="secondary"
                            >
                                Charger un personnage
                                <input
                                    type="file"
                                    hidden
                                    accept=".json"
                                    onChange={handleLoadCharacter}
                                />
                            </Button>
                        </Grid2>
                        <Grid2 size={4}>
                            <Button
                                component="label"
                                variant="contained"
                                color="secondary"
                                onClick={persoAleatoire}
                            >
                                Personnage aléatoire
                            </Button>
                        </Grid2>
                    </Grid2>
                </FormProvider>
            </Box>
        </Paper>
    );
}
