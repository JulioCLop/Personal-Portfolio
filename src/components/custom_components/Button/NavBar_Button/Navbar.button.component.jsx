import React from 'react';

// React Router
import { Link } from "react-router-dom";

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    navbarButton: {
        backgroundColor: 'gray',
        fontFamily: "inherit",
        TextTransform: "uppercase",
        leterSpacing: '3px',
        color: "black",
        position: "relative",
        margin: "15px",
        background: "none",
        boxShadow: "none",
        fontSize: "1rem",
        zIndex: "2",
        "&::before": {
           content: '""',
           zIndex: "4",
           position: "absolute",
           width: "83px",
           height: "1px",
           bottom: "21px",
           left: "5px",
           backgroundColor: "#fff",
           visibility: "hidden",
           transition: "all 0.4s ease-in-out",
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
            transition: "all 1s"
        },
     },

}))



const NavbarCustomButton = (props) => {

    const classes = useStyles();
    const { toPath } = props;

    return (
        <>
        <Button
        disableTouchRipple={true}
        component={Link}
        to={toPath}
        className={classes.navbarButton}>
             {props.children}
       </Button> 
        </>
    )
}


export default NavbarCustomButton;
