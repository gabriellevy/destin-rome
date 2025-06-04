import {Controller, useFormContext} from "react-hook-form";
import {Perso} from "../../types/Perso.ts";
import {FormControl, Grid2, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {metalStatutOptions} from "../../types/statut_social/Statut.ts";
import {Option} from "../../types/lieux/Lieu.ts";
import {classeSocialOptions} from "../../types/statut_social/ClasseSociale.ts";

export default function SelectionStatut() {
    const { control, formState: { errors } } = useFormContext<Perso>();

    return (
        <>
            <Grid2 size={4}>
                <Controller
                    control={control}
                    name="classeSociale"
                    render={({ field }) => (
                        <FormControl margin="normal" error={!!errors.classeSociale}
                                     fullWidth>
                            <InputLabel>Classe sociale</InputLabel>
                            <Select {...field}>
                                {Object.values(classeSocialOptions).map((classeSociale: Option) => (
                                    <MenuItem value={classeSociale.value} key={classeSociale.value}>
                                        {classeSociale.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
            </Grid2>
            <Grid2 size={4}>
                <Controller
                    control={control}
                    name="statut.metalStatut"
                    render={({ field }) => (
                        <FormControl margin="normal" error={!!errors.statut?.metalStatut}
                                     fullWidth>
                            <InputLabel>Statut</InputLabel>
                            <Select {...field}>
                                {Object.values(metalStatutOptions).map((metalOption: Option) => (
                                    <MenuItem value={metalOption.value} key={metalOption.value}>
                                        {metalOption.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
            </Grid2>
            <Grid2 size={4}>
                <Controller
                    name="statut.rang"
                    control={control}
                    rules={{ required: "Rang de statut obligatoire", min: 0, max: 10 }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Rang de statut"
                            type="number"
                            fullWidth
                            margin="normal"
                            error={!!errors.statut?.rang}
                            helperText={errors.statut?.message}
                        />
                    )}
                />
            </Grid2>
        </>
    );
}