import React, { useState } from "react";

// React Router
import { Link } from "react-router-dom";

// Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@material-ui/core/Box";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Animation
import Spin from 'react-reveal/Spin';
import HeadShake from 'react-reveal/HeadShake';

// Assets
import newLogo from "../../assets/newLogo.png";

//  Component Import 
import TransitionsModal from "../custom_components/Contact_Modal/contactModal";








const useStyles = makeStyles((theme) => ({
   mainNavContainer: {
      backgroundColor: "black",
      color: "white",
      height: "100%",
      width: "100%",
   },
   navGridItems: {
      width: "33.33%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 25px 0 25px",
   },
   navGridItems2: {
      display: "flex",
      alignItems: "center",

      justifyContent: "space-around",
   },
   logoImage: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   IconArrow: {
      fontSize: "32px",
      color: "white",
      margin: "0 10px 3px 0",
   },
   aboutButton: {
      height: "50px",
      width: "50px",
      color: "white",
      position: "relative",
      margin: "15px",
      background: "none",
      boxShadow: "none",
      zIndex: "2",
      "&::before": {
         content: '""',
         zIndex: "4",
         position: "absolute",
         width: "100px",
         height: "2px",
         bottom: "24px",
         left: "-15px",
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
         boxShadow: "none",
      },
      "&:focus": {
         outline: "none",
         border: "none",
      },
      "&:hover": {
         color: theme.palette.common.white,
      },
   },
   exploreBoxImage: {
      position: "absolute",
   },
   projectsButton: {
      height: "50px",
      width: "50px",
      color: "white",
      position: "relative",
      margin: "15px",
      background: "none",
      boxShadow: "none",
      zIndex: "2",
      "&::before": {
         content: '""',
         zIndex: "4",
         position: "absolute",
         width: "100px",
         height: "2px",
         bottom: "24px",
         left: "-15px",
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
         boxShadow: "none",
      },
      "&:focus": {
         outline: "none",
         border: "none",
      },
      "&:hover": {
         color: theme.palette.common.white,
      },
   },
   returnButton: {
      color: "white",
      position: "relative",
      background: "none",
      boxShadow: "none",
      zIndex: "2",
      "&::before": {
         content: '""',
         zIndex: "4",
         position: "absolute",
         width: "137px",
         height: "2px",
         bottom: "20px",
         left: "42px",
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
         boxShadow: "none",
      },
      "&:focus": {
         outline: "none",
         border: "none",
      },
      "&:hover": {
         color: theme.palette.common.white,
      },
   },
  

   toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "2.0rem",
      [theme.breakpoints.down("sm")]: {
         marginBottom: "2.2rem",
      },
      [theme.breakpoints.down("xs")]: {
         marginBottom: "2.6rem",
      },
   },
   mainHead: {
      height: "130px",
   },
   buttonContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      margin: "0 40px",
   },
   button: {
      ...theme.typography.button,
      minWidth: 12,
      marginLeft: "25px",
      borderRadius: 0,
      borderLeft: "1px solid white",
      borderBottom: "2px solid white",
      "&:hover": {
         color: `${theme.palette.common.black} !important`,
         backgroundColor: "transparent",
      },
   },
   
   imgIcon: {
      ...theme.mainShadow,
      width: "35px",
      height: "35px",
      borderRadius: "35px",
      filter: "grayscale(10%)",
      backgroundColor: theme.palette.common.white,
      "&:hover": {
         boxShadow: "0px 1px 1.3px 0.5px #696464",
      },
      " &:active": {
         transition: "transform 300ms ease",
         boxShadow: "none",
      },
      [theme.breakpoints.down("lg")]: {
         marginLeft: "17px",
      },
      [theme.breakpoints.down("xl")]: {
         marginLeft: "10px",
      },
   },
   drawerIconContainer: {
      marginLeft: "auto",
      marginRight: "2rem",
      "&:hover": {
         backgroundColor: "transparent",
      },
      "&:focus": {
         outline: "none !important",
      },
   },
   menuIcon: {
      height: "40px",
      width: "40px",
   },
   drawer: {
      backgroundColor: "#e1e1e1 ",
      padding: "0 20px 20px 15px",
      margin: "0 36px 0 36px",
      borderRadius: "0 0 8px 8px",
      [theme.breakpoints.down("sm")]: {
         margin: "0 175px 0 175px",
      },
      [theme.breakpoints.down("xs")]: {
         margin: "0",
      },
   },
   listItemTextBtn: {
      fontSize: "17.5px",
      textTransform: "upperCase",
      background: "transparent !important",
      textAlign: "center",
      color: theme.palette.common.mainGray,
      "&:hover": {
         backgroundColor: theme.palette.common.white,
         color: "black",
      },
   },
   h6: {
      color: theme.palette.common.white,
      margin: "20px",
      width: "100px",
      fontSize: "13.5px",
      [theme.breakpoints.down("sm")]: {
         marginTop: "20px",
         margin: "0 auto",
      },
   },
}));

function NavBar(props) {
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("sm"));

   const [openDrawer, setOpenDrawer] = useState(false);
   const [rotate, setRotate] = useState(false);
   const MainNav = (
      <React.Fragment>
         {/* This is the main navbar */}
         <Grid
            container
            justify="space-between"
            className={classes.mainNavContainer}>
            {/* this is the home button*/}
            <Grid item className={classes.navGridItems}>
               <Box>
                  <Button
                     disableTouchRipple={true}
                     component={Link}
                     onMouseEnter={()=> setRotate(true)}
                     to="/"
                     className={classes.returnButton}>

                     <Spin spy={rotate} >
                     <ArrowBackIcon className={classes.IconArrow} />
                     </Spin>
                     <HeadShake spy={rotate}>
                     Return home
                     </HeadShake>
                  </Button>
               </Box>
            </Grid>
            {/* this is the log item/container*/}
            <Grid item className={classes.navGridItems}>
               <Box className={classes.logoImage} component="div">
                  <img src={newLogo} width="130" alt="logo" />
               </Box>
            </Grid>
            {/* this is the about button*/}
            <Grid item className={classes.navGridItems}>
               {/* main inner container for buttons*/}
               <Grid
                  container
                  className={classes.navGridItemsContainer}
                  justify="space-around"
                  alignItems="baseline">
                  <Grid item sm={3} className={classes.aboutLinkItem}>
                     <Box>
                        <Button
                           disableTouchRipple={true}
                           component={Link}
                           to="/about"
                           className={classes.aboutButton}>
                           About
                        </Button>
                     </Box>
                  </Grid>
                  {/* this is the explore button*/}
                  <Grid
                     id="explore"
                     item
                     sm={3}
                     className={classes.exploreLinkItem}>
                     <Box>
                        <Button
                           disableTouchRipple={true}
                           component={Link}
                           to="/projects"
                           className={classes.projectsButton}>
                           Projects
                        </Button>
                     </Box>
                  </Grid>
                  {/* this is the contact modal button*/}
                  <Grid item sm={3} className={classes.contactLinkItem}>
                     <Box>
                        <TransitionsModal />
                     </Box>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </React.Fragment>
   );
   const drawer = (
      <React.Fragment>
         <Drawer
         style={{
            backgroundColor: 'transparent'
            }}
            hideBackdrop={true}
            open={openDrawer}
            onClose={() => setOpenDrawer()}
            onOpen={() => setOpenDrawer(true)}
            anchor="top">
        
            <List
            className={classes.drawer}
            >
               <ListItem
                  onClick={() => setOpenDrawer(false)}
                  divider
                  button
                  component={Link}
                  to="/">
                  <ListItemText
                     className={classes.listItemTextBtn}
                     disableTypography>
                     Home
                  </ListItemText>
               </ListItem>
               <ListItem
                  onClick={() => setOpenDrawer(false)}
                  divider
                  button
                  component={Link}
                  to="/about">
                  <ListItemText
                     className={classes.listItemTextBtn}
                     disableTypography>
                     About
                  </ListItemText>
               </ListItem>
               <ListItem
                  onClick={() => setOpenDrawer(false)}
                  divider
                  button
                  component={Link}
                  to="/projects">
                  <ListItemText
                     className={classes.listItemTextBtn}
                     disableTypography>
                     Project
                  </ListItemText>
               </ListItem>

               <ListItem
                  onClick={() => setOpenDrawer(false)}
                  divider
                  button
                  component={Link}
                  to="/projects">
                  <ListItemText
                     className={classes.listItemTextBtn}
                     disableTypography>
                     <TransitionsModal />
                  </ListItemText>
               </ListItem>
            </List>
         </Drawer>
         <IconButton
            focusable="false"
            className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple>
            <MenuIcon color="primary" className={classes.menuIcon} />
         </IconButton>
      </React.Fragment>
   );

   return (
      <React.Fragment>
         <AppBar
            className={classes.mainHead}
            position="fixed">
           
            <Toolbar style={{ height: "100%", background: 'black' }} disableGutters>
               {matches ? drawer : MainNav}
            </Toolbar>
         </AppBar>

         <div className={classes.toolbarMargin} />
      </React.Fragment>
   );
}

export default NavBar;
