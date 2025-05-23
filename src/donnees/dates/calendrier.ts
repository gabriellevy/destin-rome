export const JOURS_PAR_AN = 400;
export const JOURS_PAR_SEMAINE = 8;

export enum enumMois {
    MARTIUS = "Martius",
    APRILIS = "Aprilis",
    MAIUS = "Maius",
    IUNIUS = "Iunius",
    QUINTILIS = "Quintilis",
    SEXTILIS = "Sextilis",
    SEPTEMBER = "September",
    OCTOBER = "October",
    NOVEMBER = "November",
    DECEMBER = "December",
    IANUARIUS = "Ianuarius",
    FEBRUARIUS = "Februarius",
}

export const nbJoursDansMois:Record<enumMois, number> = {
    [enumMois.MARTIUS]: 31,
    [enumMois.APRILIS]: 29,
    [enumMois.MAIUS]: 31,
    [enumMois.IUNIUS]: 29,
    [enumMois.QUINTILIS]: 31,
    [enumMois.SEXTILIS]: 29,
    [enumMois.SEPTEMBER]: 29,
    [enumMois.OCTOBER]: 31,
    [enumMois.NOVEMBER]: 29,
    [enumMois.DECEMBER]: 29,
    [enumMois.IANUARIUS]: 29,
    [enumMois.FEBRUARIUS]: 28,
};

// numéro du jour du dernier jour de chaque mois (sur l'échelle de jours dans une année)
export const nbJourDuDernierJourDuMois:Record<enumMois, number> = {
    [enumMois.MARTIUS]: 1,
    [enumMois.APRILIS]: 33,
    [enumMois.MAIUS]: 66,
    [enumMois.SEPTEMBER]: 67,
    [enumMois.IUNIUS]: 100,
    [enumMois.QUINTILIS]: 133,
    [enumMois.SEXTILIS]: 166,
    [enumMois.OCTOBER]: 167,
    [enumMois.NOVEMBER]: 200,
    [enumMois.DECEMBER]: 201,
    [enumMois.IANUARIUS]: 233,
    [enumMois.FEBRUARIUS]: 266,
};