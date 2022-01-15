import React, { useState, useContext } from "react";

// React Router
import { Link } from "react-router-dom";

// Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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
import NavbarCustomButton from "../custom_components/Button/NavBar_Button/Navbar.button.component";


// Context API
import { ThemeContext } from "../../contexts/Theme.Contexts";









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
      padding: "0 1.5625rem 0 1.5625rem",
   },
   logoImage: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   IconArrow: {
      fontSize: "2rem",
      color: "white",
      margin: "0 0.625rem 0.1875rem 0",
   },
   exploreBoxImage: {
      position: "absolute",
   },
  
   returnButton: {
      color: "white",
      position: "relative",
      fontWeigth: 'bold',
      fontFamily: 'inherit',
      borderRadius: '3.125rem',
      backgroundColor: 'gray',
      padding: '0.5rem',
      zIndex: "2",
      "&::before": {
         content: '""',
         zIndex: "4",
         position: "absolute",
         width: "7.3125rem",
         height: "0.0625rem",
         bottom: "1.6rem",
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
         color: theme.palette.common.white,
         backgroundColor: "rgb(63, 59, 59)"
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
      height: "8.125rem",
   },
   buttonContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      margin: "0 2.5rem",
   },
   button: {
      ...theme.typography.button,
      minWidth: 12,
      marginLeft: "2.5rem",
      borderRadius: 0,
      borderLeft: "0.0625rem solid white",
      borderBottom: "1.25rem solid white",
      "&:hover": {
         color: `${theme.palette.common.black} !important`,
         backgroundColor: "transparent",
      },
   },
   
   imgIcon: {
      ...theme.mainShadow,
      width: "2.1875rem",
      height: "2.1875rem",
      borderRadius: "2.1875rem",
      filter: "grayscale(10%)",
      color: 'white',
      backgroundColor: "white",
      "&:hover": {
         boxShadow: "0px 1px 1.3px 0.5px #696464",
      },
      " &:active": {
         transition: "transform 300ms ease",
         boxShadow: "none",
      },
      [theme.breakpoints.down("lg")]: {
         marginLeft: "1.0625rem",
      },
      [theme.breakpoints.down("xl")]: {
         marginLeft: "0.625rem",
      },
   },
   drawerIconContainer: {
      color: 'white',
      marginRight: "2rem",
      "&:hover": {
         backgroundColor: "transparent",
      },
      "&:focus": {
         outline: "none !important",
      },
   },
   menuIcon: {
      height: "2.5rem",
      width: "2.5rem",
   },
   drawer: {
      backgroundColor: "#e1e1e1 ",
      padding: "0 1.25rem 1.25rem 0.9375rem",
      margin: "0 2.25rem 0 2.25rem",
      borderRadius: "0 0 0.5rem 0.5rem",
      [theme.breakpoints.down("sm")]: {
         margin: "0 10.9375rem 0 10.9375rem",
      },
      [theme.breakpoints.down("xs")]: {
         margin: 0,
      },
   },
   listItemTextBtn: {
      fontSize: "1.09375rem",
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
      margin: "1.25rem",
      width: "6.25rem",
      fontSize: "0.84375rem",
      [theme.breakpoints.down("sm")]: {
         marginTop: "1.25rem",
         margin: "0 auto",
      },
   },
   navGridItemsContainer: {
      "& #linethrough": {
         "&::before": {
            width: "65px",
          
         }
      },
      "& #linethrough2": {
         "&::before": {
            width: "77px",
          
         }
      }
     
   }

}));

function NavBar(props) {

   const { open, setOpen } = useContext(ThemeContext);

   console.log(open)

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
                  className={classes.navGridItemsContainer}>
                  <Grid item   container justifyContent='center' alignItems='center'  >
                        <NavbarCustomButton id='linethrough'  toPath="/about">
                           About
                        </NavbarCustomButton>
                     <NavbarCustomButton id='linethrough2' toPath="/projects">
                    project
                     </NavbarCustomButton>
                     <NavbarCustomButton id='linethrough'  toPath="/explore">
                     explore
                  </NavbarCustomButton>
                     <TransitionsModal/>
                  </Grid>
               
                  {/* this is the explore button*/}
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
               >
                  <Box style={{width: '100%'}} onClick={() => setOpen(true)}>
                  <ListItemText
                     className={classes.listItemTextBtn}
                   
                     disableTypography>
                     Contact
                  </ListItemText>
                  </Box>
                 
               </ListItem>
            </List>
         </Drawer>
         <Grid
            container alignItems='flex-start' justifyContent='flex-start'>
         <Box style={{display: 'flex',alignItems:'center',justifyContent: 'center',marginLeft: '2rem'}} component="div">
            <img src={newLogo} width="130" alt="logo" />
         </Box>
         </Grid>
         <IconButton
            focusable="false"
            color='primary'
            className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple>
            <MenuIcon  className={classes.menuIcon} />
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
