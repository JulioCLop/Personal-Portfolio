import { createTheme } from '@mui/material/styles';


const mainBlack = "#000";
const mainGray = "#dedee6ba";
const mainBorderColor = "#e6e6e6"



export default createTheme({
    palette: {
        common: {
            black: `${mainBlack}`,
            white: `${mainGray}`,
            lightGray: `${mainBorderColor}`,
        },
        primary: {
            main: `${mainGray}`
        },
        secondary: {
            main: `${mainBlack}`
        }
    },
    typography: {
        fontFamily: "GFS Didot, serif !important",
        fontSize: '0.95em',
        button: {
            fontFamily: "GFS Didot, serif",
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: '2px',
            fontSize: "15px",
           
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: 'white',
                fontSize: '1rem',

            }
        },
        MuiInput: {
            input: {
                color: 'white',
                "::input-placeholder": {
                    color: 'red'
                }
        },
        underline: {
            "&:before": {
            borderBottom: '2px solid white'
            },
            "&:hover:not($disabled):not($focused):not($error):before": {
                borderBottom: '2px solid white'
            },
            "&:hover": {
                borderBottom: `2px solid ${mainGray}`
            }
        },
        multiline: {
            width: '330px',

         
        }
     }
    }
});
  