import React from "react";


// Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from '@mui/material/Box';





const useStyles = makeStyles((theme) => ({
   workItem: {
      margin: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "300px",
      width: "300px",
      border: "2px solid",
      borderRadius: "6px",
   },
}));

export default function WorkHistoryComponent(props) {
   const theme = useTheme();
   const classes = useStyles();
   const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

   return (
      <Grid
         item
         sm={4}
         md={3}
         lg={2}
         style={{
            marginBottom: matchesSM ? "5em" : matchesXS ? "2em" : "",
            border: matchesSM ? "none" : null,
            width: matchesSM ? "100%" : "300px",
            height: matchesXS ? "35px" : "300px",
         }}
         className={classes.workItem}>
         <Box data-aos='fade-down'>
         <Typography
            align="center"
            style={{
               width: 300,
            }}
            variant="h4">
            {props.WorkName}
         </Typography>
         </Box>
      </Grid>
   );
}
