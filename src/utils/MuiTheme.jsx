import { createTheme } from "@mui/material";

const night = {
    main: '#0C0C0C'
}

const buff = {
    main: '#E59F71'
}

const sinopia = {
    main: '#BA5A31'
}

export const theme = createTheme({
    palette: {
        primary: night,
        secondary: buff,
        tertiary: sinopia
    },
    typography: {
        fontFamily: ['Raleway']
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "white",
                    fontWeight: 700,
                    minWidth: "1rem"
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    '&.Mui-selected': {
                        backgroundColor: "rgba(229, 159, 113, 0.5)", 
                    },
                    '&:hover': {
                        backgroundColor: "#BA5A31",
                        color: "white"
                    },
                    '&:focus': {
                        backgroundColor: '#E59F71',
                        color: "white"
                    }
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                },
            },
        },
    },
});