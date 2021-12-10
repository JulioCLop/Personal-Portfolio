import React from "react";

import { LoadColor, LoadInfo } from "../../modules/loadpage.js";




import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";




const useStyles = makeStyles((theme) => ({
   containerLoader: {
      backgroundColor: "black",
      height: "100vh",
      fontWeight: "700",
      color: "white",
      [theme.breakpoints.down("xs")]: {
         overflow: "hidden",
      },
   },
   innerContainer: {
      height: "200px",
      overflow: "hidden",
      width: "200px",
      backgroundImage: `url(${LoadColor()})`,
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      color: "#fff",
      animation: "3s $rotation infinite linear ",
   },
   typographyPos: {
      display: "flex",
      flexDirection: "column",
      margin: "10px",
      fontSize: "19px",
   },
   "@keyframes rotation": {
      from: {
         transform: "rotateY(0deg)",
         transition: "3s all",
      },
      to: {
         transform: "rotateY(359deg)",
      },
   },
}));

function Loading() {
   const classes = useStyles();

   return (
      <Grid
         container
         direction="column"
         justify="center"
         alignItems="center"
         className={classes.containerLoader}>
         <Box component="div">
            <div className={classes.innerContainer}></div>
         </Box>
         <Box component="div" item className={classes.typographyPos}>
            <Box>
               <Typography>{`Good ${LoadInfo()}`}</Typography>
            </Box>
         </Box>
      </Grid>
   );
}

export default Loading;
