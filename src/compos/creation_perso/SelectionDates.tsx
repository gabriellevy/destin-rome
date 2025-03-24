import {Controller, useFormContext} from "react-hook-form";
import {Perso} from "../../types/Perso.ts";
import {Grid2, TextField} from "@mui/material";

export default function SelectionDates() {
    const { control } = useFormContext<Perso>();

    return (
        <>
            <Grid2 size={6}>
                <Controller
                    name="anneeDeDepart"
                    control={control}
                    rules={{ required: "Année de départ", min: 0 }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Année (depuis l'an 0 du calendrier impérial)"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
            </Grid2>
            <Grid2 size={6}>
                <Controller
                    name="age"
                    control={control}
                    rules={{ required: "Age obligatoire", min: 10 }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Âge de départ"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
            </Grid2>
        </>
    );
}