import React from 'react';

// React Router
import { Link } from "react-router-dom";




//  Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Import Styles
import './Button.component.css';





const useStyles = makeStyles((theme) => ({
   customButton: {
        color: 'black',
        letterSpacing: '2px',
        backgroundColor: 'gray',
        fontFamily: "inherit",
        width: '12.5rem',
        boxShadow: '2px 1px 3px 1px rgba(0,0,0,0.5)',
        padding: '1rem 2rem',
        position: "relative",
        margin: "0.9375rem",
        zIndex: "2",
        "&::before": {
           content: '""',
           margin: '0 auto',
           zIndex: "4",
           position: "absolute",
           width: "5.8rem",
           height: "0.125rem",
           bottom: "1.75rem",
           left: "3rem",
           backgroundColor: "#fff",
           visibility: "hidden",
           transition: "all 0.3s ease-in-out",
           transform: "scaleX(0)",
        },
        "&:hover:before": {
           visibility: "visible",
           transform: "scaleX(1)",
        },
        "&:active": {
           background: "none",
           boxShadow: '2px 1px 3px 1px rgba(0,0,0,0.1)',
        },
        "&:focus": {
           outline: "none",
           border: "none",
        },
        "&:hover": {
           background: "none",
           color: theme.palette.common.white,
        },
     }
}))



const CustomButton = (props) => {
   const classes = useStyles();
   const { toPath } = props;
  
 
   
     
      
   
   

  

    return (
        <>
            <Button
             className={classes.customButton}
             onMouseEnter={ props.onMouseEnter} 
             onMouseLeave={props.onMouseLeave}
             disableTouchRipple={true}
             component={Link}
             to={toPath}
        >
        {props.children}
         </Button>
        </>
    )
};


export default CustomButton;
