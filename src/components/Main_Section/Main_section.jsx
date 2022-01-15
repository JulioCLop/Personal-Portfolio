import React from 'react';

// Material UI
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles( theme => ({
section: {
    height: '100%',
    padding: '5rem',
    width: '100%'
}
}));




export default function AboutPageCustomSection(props) {

    const classes = useStyles();
   
    return (
        <>
            <section className={classes.section}>
               {props.children}
            </section>
        </>
    )
}
