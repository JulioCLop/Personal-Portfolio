import React from "react";

//Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    sectionHeader: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.5)',
        textTransform: 'uppercase',
        width: '100%',
        height: '100px',
        fontFamily: 'inherit',
        borderRadius: '3px',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white'
     },
     sectionHeaderInnerContainer: {
        width: '100%'
     },
     HeaderText:{
        fontSize: '1.55rem',
        width: '100%',
        fontWeigth: 'bold',
     }
}));


export default function AboutSectionHeaders(props) {
  const classes = useStyles();

  return (
    <>
      <section className={classes.sectionHeader}>
        <div className={classes.sectionHeaderInnerContainer}>
          <h3 className={classes.HeaderText}>{props.children}</h3>
        </div>
      </section>
    </>
  );
}
