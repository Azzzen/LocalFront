import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        green: Palette['primary'];
    }

    interface PaletteOptions {
        green?: PaletteOptions['primary'];
    }

    interface Palette {
        gray: Palette['primary'];
    }

    interface PaletteOptions {
        gray?: PaletteOptions['primary'];
    }

    interface Palette {
        gray2: Palette['primary'];
    }

    interface PaletteOptions {
        gray2?: PaletteOptions['primary'];
    }

    interface Palette {
        white: Palette['primary'];
    }

    interface PaletteOptions {
        white?: PaletteOptions['primary'];
    }
    interface Palette {
        beige: Palette['primary'];
    }

    interface PaletteOptions {
        beige?: PaletteOptions['primary'];
    }
}

let theme = createTheme({
    palette: {
        primary: {
            main: '#789833'
        },
        secondary: {
            main: '#6D7A65'
        },
        green: {
            light: '#D9E0D8',
            main: '#789833',
            dark: '#6D7A65',
        },
        gray: {
            main: '#414141',
            dark: '#575757',
            light: '#C7C7C7',
        },
        beige: {
            main: '#FCF9F7'
        },
        white: {
            light: '#F6F6F6',
            main: '#FFFEFC',
            dark: '#EDEDED'
        },
        gray2: {
            main: '#8C8C8C'
        },
    },
    typography: {
        "fontFamily": 'Poppins',
        "fontSize": 15,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#504D4D',
                },
            },
        },
    },
});

theme = createTheme(theme, {
    typography: {
        h1: {
            fontSize: 35,
            color: theme.palette.gray.dark
        },
        h2: {
            fontSize: 25,
            color: theme.palette.gray.dark
        },
        h3: {
            fontSize: 18,
            color: theme.palette.gray.dark
        },
        h4: {
            fontSize: 15,
            color: theme.palette.gray.dark
        },
        h5: {
            fontSize: 12,
            color: theme.palette.gray.dark
        },
        body2: {
            fontSize: 35,
        },
        button: {
            fontSize: 18,
            fontWeight: '500',
            textTransform: 'none'
        }
    }
})

export default theme;