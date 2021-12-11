import React from "react";


// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
   mainContainer: {
      background: "black",
      height: "105px",
      width: "100%",
   },
   builtBy: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      width: "23%",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
         width: "50%",
         paddingBottom: "10px",
      },
      [theme.breakpoints.down("xs")]: {
         width: "70%",
         paddingBottom: "10px",
      },
   },
   nameFooter: {
      margin: "0 40px 30px 0",
      color: "white",
   },
   spanNameFooter: {
      color: "rgba(46, 49, 49, 1)",
      marginLeft: "8px",
   },
}));

function MainFooter() {
   const classes = useStyles();

   return (
       <footer style={{
           width: "100%",
           

       }}>
         <Grid
            container
            justify="flex-end"
            alignItems="flex-end"
            className={classes.mainContainer}>
            <Grid item sx className={classes.builtBy}>
               <Typography className={classes.nameFooter}>
                  Built by
                  <span className={classes.spanNameFooter}>Julio Lopez</span>
               </Typography>
            </Grid>
         </Grid>
      </footer>
   );
}

export default MainFooter;
