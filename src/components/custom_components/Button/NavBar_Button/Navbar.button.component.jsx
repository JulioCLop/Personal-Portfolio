import React from 'react';

// React Router
import { Link } from "react-router-dom";

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    navbarButton: {
        fontFamily: "inherit",
        TextTransform: "uppercase",
        color: 'white',
        leterSpacing: '0.1875rem',
        position: "relative",
        background: "none",
        boxShadow: "none",
        fontSize: "1rem",
        zIndex: "2",
        "&::before": {
           content: '""',
           zIndex: "4",
           position: "absolute",
           width: "5.1875rem",
           height: "0.0625rem",
           bottom: "1.3125rem",
           left: "0.3125rem",
           backgroundColor: "#fff",
           visibility: "hidden",
           transition: "all 0.6s ease-in-out",
            transform: "scaleX(0)",
        },
        "&:hover:before": {
           visibility: "visible",
           transform: "scaleX(1)",
        },
        "&:active": {
           background: "none",
           boxShadow: "none",
        },
        "&:focus": {
           outline: "none",
           border: "none",
        },
        "&:hover": {
            color: theme.palette.common.white,
            transition: 'all 1.1s ease-in-out',
            backgroundColor: 'rgb(93, 93, 93)'
        },
     },

}))



const NavbarCustomButton = (props) => {

    const classes = useStyles();
    const { toPath,id } = props;
   

    return (
        <>
        <Button
           disableTouchRipple={true}
            component={Link}
            id={id}
           to={toPath}
           className={classes.navbarButton}>
             {props.children}
       </Button> 
        </>
    )
}


export default NavbarCustomButton;
