import React from "react";

// Assets
import tower from "../../assets/yash.jpg";
import newLogo from "../../assets/newLogoNoBackround.png";

// Material UI Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


// Component Imports
import CustomButton from "../../components/custom_components/Button/Homepage_Button/button.component";


const useStyles = makeStyles((theme) => ({
   ...theme.palette.common.typography,
   MainHeaderSection: {
      marginTop: '30px',
      height: "200px",
   },
   mainContainer: {
      backgroundColor: "rgba(0,0,0,0.1)",
      color: "#fff",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      
   },
   MainHeaderSectionItems1: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "350px",
      height: "200px",
   },
   MainHeaderSectionBox1: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
         height: "200px",
         width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
         padding: "15px",
         marginLeft: "10px"
      },
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("lg")]: {
         padding: "15px",
      },
   },
   MainHeaderSectionItems2: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      width: "100%",
      height: "100%",
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},

      [theme.breakpoints.down("xs")]: {
         width: "100%",
         justifyContent: "center",
         alignItems: "center",
         marginTop: "0px",
         height: "100px",
         textAlign: "center",
      },
   },
   logo: {
      backgroundImage: `url(${newLogo})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      height: "250px",
      width: "250px",
      borderRadius: "200px",
      [theme.breakpoints.down("xs")]: {},
   },

   mainHeaderText: {
      letterSpacing: "1.5px",
      margin: '5px 0',
      fontWeigth: '300px',
      fontFamily: 'inherit',
      width: "400px",
      textTransform: "uppercase",
      zIndex: "3",
      [theme.breakpoints.down("sm")]: {
         fontSize: "21px",
         width: "100%",
      },
      [theme.breakpoints.down("xs")]: {
         fontSize: "19px",
         width: "100%",
      },
   },
   buttonBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "center",
      marginRight: "5%",
      width: "100%",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
         marginRight: "6%",
         alignItems: "flex-end",
      },
   },
   contactButton: {
      color: "white",
      height: "100%",
      width: "100%",
      [theme.breakpoints.down("xl")]: {
         display: "flex",
         flexDirection: "column",
         alignItems: "flex-end",
         justifyContent: "flex-end",
         margin: "0 2em 2em 0",
      },

      [theme.breakpoints.down("lg")]: {
         display: "flex",
         flexDirection: "column",
         alignItems: "flex-end",
         justifyContent: "flex-end",
         margin: "0 2em 2em 0",
      },
      [theme.breakpoints.down("md")]: {
         display: "flex",
         flexDirection: "column",
         alignItems: "flex-end",
         justifyContent: "flex-end",
         margin: "0 2em 2em 0",
      },
      [theme.breakpoints.down("sm")]: {
         display: "flex",
         flexDirection: "column",
         alignItems: "flex-end",
         justifyContent: "flex-end",
         margin: "0 2em 2em 0",
      },
      [theme.breakpoints.down("xs")]: {
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
         margin: "0",
      },
   },
   secBoxItem: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "center",
      height: "13%",
      width: "100%",
   },
   mainHomePageImage: {
      backgroundImage: `url(${tower})`,
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      objectFit: 'cover',
      zIndex: "-4",
      height: "100%",
      width: "100%",
      position: "absolute",
      margin: "0 auto",
      filter: "grayscale(80%) opacity(6%)",
   },

   
}));

function HomePage() {
   const theme = useTheme();
   const classes = useStyles();
   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
   const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
   const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  

   const secondaryXsNav = (
      <React.Fragment>
         <Grid item>
            <CustomButton
               toPath="/explore">
               EXPLORE
            </CustomButton>
         </Grid>
         <Grid item>
            <CustomButton
               toPath="/projects">
               PROJECTS
            </CustomButton>
         </Grid>
         <Grid item>
            <CustomButton
               toPath="/about">
               ABOUT ME
            </CustomButton>
         </Grid>
      </React.Fragment>
   );

   return (
      <Grid container className={classes.mainContainer}>
         {/* 1st container includes main header and contact button*/}
         <Grid
            sx={{ height: "50%" }}
            container
            justifyContent={matchesMD ? 'center' : ''}
            alignItems={matchesMD ? 'center' : ''}
            className={classes.MainHeaderSection}>
            <Grid
               item
               
               className={classes.MainHeaderSectionItems1}>
               <Box className={classes.MainHeaderSectionBox1}>
                  <div className={classes.logo}></div>
                  <Typography variant="h6" className={classes.mainHeaderText}>
                     Julio Lopez
                  </Typography>
                  <Typography variant="h5" className={classes.mainHeaderText}>
                     React Developer
                  </Typography>
               </Box>
            </Grid>
         </Grid>
         {/* 2nd container for single button*/}
         <Grid
            sx={{ height: "70%" }}
            container
            direction={ matchesSM ? "column" : "flex"}
            alignItems="center"
            justify={matchesXS   ? "flex-start" : "center"}>
            {matchesXS ? (
               secondaryXsNav
            ) : (
               <React.Fragment>
                     <Grid item >
                     <CustomButton
                     toPath="/about">
                     ABOUT Me
                  </CustomButton>
                  </Grid>
                  <Grid item>
                     <CustomButton
                        toPath="/projects">
                        PROJECTS
                        </CustomButton>
                        <CustomButton
                        toPath="/explore">
                        EXPLORE
                     </CustomButton>
                  </Grid>
                  <Grid item>
                  
                  </Grid>
               </React.Fragment>
            )}
         </Grid>
        
         {/* 3rd he main button container for navigation */}
         <div className={classes.mainHomePageImage}></div>
      </Grid>
   );
}

export default HomePage;