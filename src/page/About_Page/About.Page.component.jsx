import React, { useState, useEffect } from "react";

// Asssets
import Logo from "../../assets/newLogoNoBackround.png";
import UC from "../../assets/university_of_cincinnati-logo.png";
import IntroImage from "../../assets/introImage.jpg";
import resumeImage from "../../assets/resumeImage.jpg";

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

// Material UI
import { makeStyles,useTheme } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import Button from "@material-ui/core/Button";
import GetAppIcon from '@material-ui/icons/GetApp';
import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from '@material-ui/icons/Close';

// Component Import 
import NavBar from "../../components/NavigationBar/NavBar.Component";
import MainFooter from "../../components/Footer/Main.Footer.Component";
import WorkHistoryComponent from "../../components/custom_components/Work_History_Card/workHistory.Component";




const useStyles = makeStyles((theme) => ({
   mainAboutContainer: {
      height: "100%",
      width: "100%",
      background: "black",
   },
   mainBoxContentText: {
      textAlign: 'justify'
   },
   quoteContainer: {
      width: "100%",
      height: "400px",
      [theme.breakpoints.down("xs")]: {
         height: "300px",
      },
   },
   quoteItem: {
      width: "50%",
      [theme.breakpoints.down("xs")]: {
         width: "100%",
      },
   },
   quoteBox: {
      height: "100%",
      width: "100%",
      [theme.breakpoints.down("xs")]: {
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
      },
   },
   quoteText: {
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
         width: "400px",
      },
   },
   mainIntroContainer: {
      height: "100%",
      width: "100%",
   },
   itemIntro: {
      height: "300px",
      [theme.breakpoints.down("xs")]: {
         marginBottom: "50px",
      },
   },
   boxIntro: {
      backgroundImage: `url(${IntroImage})`,
      background: "white",
      margin: "0 auto",
      height: "100%",
      width: "350px",
      padding: "30px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      filter: "grayscale(3%) ",
   },
   introh3: {
      color: "white",
      margin: "10px",
      width: "100%",

      textAlign: "center",
   },
   introh5: {
      textAlign: "center",
      width: "100%",
   },
   small: {
      color: "white",
   },
   small2: {
      textAlign: "center",
      width: "100%",
      padding: "0px 40px 0 40px",
   },
   introBox2: {
      width: "100%",
      marginBottom: "50px",
   },

   // class Helper
   heightHelper: {
      height: "50px",
   },
   mainBoxContent: {
      padding: "0px 40px 0 40px",
   },
   spanWhite: {
      color: "white",
   },
   alittleMore: {
      height: "100%",
      width: "100%",
   },
   aLittleMoreItem: {
      margin: "20px",
      width: "100%",
   },
   mainBackgroundImage: {
      position: "relative",
      height: "500px",
      width: "100%",
   },
   imageEducationFloat: {
      backgroundImage: `url(${UC})`,
      margin: "35px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "150px",
      width: "150px",
      zIndex: "10",
      top: 0,
      position: "absolute",
   },
   dropDownBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "50px",
   },
   languageBox: {
      paddingTop: "30px",
   },
   boxTechAnimation: {
      animation: "$languageBox-Animation 2s ease-in 5s ",
      overflow: "hidden",
      "&:hover": {},
   },
   "@keyframes languageBox-Animation": {
      "100%, 0%": {
         height: "100px",
      },
      "100%": {
         height: "250px",
      },
   },
   schoolContainer: {
      background: "red",
      height: "400px",
   },
   workContainer: {
      height: "100%",
   },
   schoolHeader: {
      width: "100%",
      textAlign: "center",
      padding: " 30px",
   },
   workHeader: {
      width: "100%",
      textAlign: "center",
      padding: " 30px",
   },

   workCard: {
      background: "rgba(46, 49, 49, 0.4)",
   },
   americanItem: {
      height: "100%",
      width: "50%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   cincinnatiItem: {
      height: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
   },
   resumeContainer: {
      height: "900px",
      width: "100%",
   },
   resumeItem: {
      width: "400px",
      height: "300px",
      backgroundImage: `url(${resumeImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      filter: "grayscale(100%)",
      border: "3px solid white",
      borderRadius: "5px",
   },
   resumeBtn: {
      color: "white",
      border: "1px solid",
      transition: "all  1s",
      "&:hover": {
         borderColor: "white",
      },
   },
   downloadI: {
      "&:hover": {
         color: "black !important",
      },
   },
   subheader: {
      color: "inherit !important",
      fontSize: "18px !important",
   },
   variableBtn: {
      width: "300px",
      height: "300px",
      transition: "transform 3s",
      transform: "scale(1)",
      "&:hover": {
         background: "inherit",
         transform: "scale(0.95)",
      },
      "&:focus": {
         outline: "none",
         border: "none",
      },
   },
   variableBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   "@keyframes variable-animation": {
      to: {
         opacity: 1,
         background: "gray",
      },
      from: {
         opacity: 0,
         background: "red",
      },
   },
   closeFull: {
      cursor: "pointer",

      transform: "scale(140%)",
      "&:hover": {
         color: "white",
      },
   },
}));

function AboutPage() {

   const classes = useStyles();
   const [open1, setOpen1] = React.useState(true);
   const [open2, setOpen2] = React.useState(true);
   const theme = useTheme();
   const betweenSm_Md = useMediaQuery(theme.breakpoints.down("md"));
   const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

   const [More, setMore] = useState();
   const handleClick = () => {
      setOpen1(!open1);
   };

   const handleClick2 = () => {
      setOpen2(!open2);
   };
   const variableButton = (
      <Box data-aos='fade-left' className={classes.variableBox}>
         <Button
            className={classes.variableBtn}
            color="inherit"
            onClick={() => setMore(true)}
            variant="outlined">
            Education And More...
            <br /> Check it out!
         </Button>
      </Box>
   );

   const littleMore1 = (
      <Grid
         container
         direction={betweenSm_Md ? "column" : "flex"}
         alignItems={betweenSm_Md ? "center" : null}
         justify={betweenSm_Md ? "center" : null}
         style={{
            marginTop: matchesSM ? "5em" : "",
         }}
         className={classes.alittleMore}>
         <Grid
            item
            direction={betweenSm_Md ? "flex" : "column"}
            container
            style={{
               marginLeft: "50px",
            }}
            justify="flex-start"
            alignItems="center">
            {matchesXS || betweenSm_Md ? (
               <Grid item>
                  <CloseIcon
                     className={classes.closeFull}
                     color="inherit"
                     onClick={() => setMore(false)}
                  />
               </Grid>
            ) : null}
         </Grid>

         {matchesXS || betweenSm_Md ? (
            <Grid item sm={12} md={6} className={classes.aLittleMoreItem}>
               <Typography align="center" variant={matchesXS ? "h4" : "h3"}>
                  School Attended
               </Typography>
               <Grid
                  container
                  direction={matchesXS ? "column" : "flex"}
                  justify="center"
                  alignItems="center"
                  className={classes.mainBackgroundImage}>
                  <div className={classes.imageEducationFloat} />
                  <Grid item className={classes.cincinnatiItem}>
                     <Typography
                        style={{
                           marginTop: matchesSM || betweenSm_Md ? "100px" : "",
                        }}
                        align="center"
                        variant={betweenSm_Md ? "h5" : "h6"}>
                        University of Cincinnati
                     </Typography>
                  </Grid>
                  <Divider style={{ width: "50%" }} />
               </Grid>
               {matchesXS ? (
                  <Typography align="center" variant="h5">
                     A Little More About Me
                  </Typography>
               ) : null}
            </Grid>
         ) : (
            <Grid item sm md className={classes.aLittleMoreItem}>
               <CloseIcon
                  className={classes.closeFull}
                  color="inherit"
                  onClick={() => setMore(false)}
               />
               <Box className={classes.dropDownBox} component="div">
                  <List
                     sx={{
                        width: "100%",
                        maxWidth: 300,
                        bgcolor: "transparent",
                     }}
                     component="nav"
                     subheader={
                        <ListSubheader
                           className={classes.subheader}
                           sx={{
                              fontSize: "1.5em",
                              background: "transparent",
                              color: "white",
                           }}
                           component="div"
                           id="nested-list-subheader">
                           Top Personal Skills:
                        </ListSubheader>
                     }>
                     <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                           <img src={Logo} width="60" alt='logo' />
                        </ListItemIcon>
                        <ListItemText primary="Ambitious" />
                        {open1 ? <ExpandLess /> : <ExpandMore />}
                     </ListItem>
                     <Collapse in={!open1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                           <ListItem button
                              sx={{
                                 pl: 4,
                              }}>
                              <ListItemIcon>
                                 <FiberManualRecordRoundedIcon
                                    fontSize="extrasmall"
                                    sx={{ color: "white" }}
                                 />
                              </ListItemIcon>
                              <ListItemText primary="Communication" />
                           </ListItem>
                           <ListItem button
                              sx={{
                                 pl: 4,
                              }}>
                              <ListItemIcon>
                                 <FiberManualRecordRoundedIcon
                                    fontSize="extrasmall"
                                    sx={{ color: "white" }}
                                 />
                              </ListItemIcon>
                              <ListItemText primary="Team player" />
                           </ListItem>
                        </List>
                     </Collapse>
                  </List>
               </Box>
               <Box style={{}} className={classes.dropDownBox} component="div">
                  <List
                     sx={{
                        width: "100%",
                        maxWidth: 300,
                        bgcolor: "transparent",
                     }}
                     component="nav"
                     subheader={
                        <ListSubheader
                           className={classes.subheader}
                           sx={{ background: "transparent", color: "white" }}
                           component="div"
                           id="nested-list-subheader">
                           I Can Help You With:
                        </ListSubheader>
                     }>
                     <ListItem button onClick={handleClick2}>
                        <ListItemIcon>
                           <img src={Logo} width="60" alt='logo' />
                        </ListItemIcon>
                        <ListItemText primary="Bilingual: Spanish/English" />
                        {open2 ? <ExpandLess /> : <ExpandMore />}
                     </ListItem>
                     <Collapse in={!open2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                           <ListItem button sx={{ pl: 4 }}>
                              <ListItemIcon>
                                 <FiberManualRecordRoundedIcon
                                    fontSize="extrasmall"
                                    sx={{ color: "white" }}
                                 />
                              </ListItemIcon>
                              <ListItemText primary="Co-developing the front-end" />
                           </ListItem>
                           <ListItem button sx={{ pl: 4 }}>
                              <ListItemIcon>
                                 <FiberManualRecordRoundedIcon
                                    fontSize="extrasmall"
                                    sx={{ color: "white" }}
                                 />
                              </ListItemIcon>
                              <ListItemText primary="Estimating tasks" />
                           </ListItem>
                           <ListItem button sx={{ pl: 4 }}>
                              <ListItemIcon>
                                 <FiberManualRecordRoundedIcon
                                    fontSize="extrasmall"
                                    sx={{ color: "white" }}
                                 />
                              </ListItemIcon>
                              <ListItemText primary="Researching possible techs" />
                           </ListItem>
                        </List>
                     </Collapse>
                  </List>
               </Box>
            </Grid>
         )}

         {!matchesXS && !betweenSm_Md ? (
            <Grid item sm md className={classes.aLittleMoreItem}>
               <Typography variant="h3" sx={{ textAlign: "center" }}>
                  Schools Attended
               </Typography>

               <Grid
                  container
                  direction={matchesXS ? "column" : "flex"}
                  justify="center"
                  alignItems="center"
                  className={classes.mainBackgroundImage}>
                  <div className={classes.imageEducationFloat} />
                  <Grid item className={classes.cincinnatiItem}>
                     <Typography variant="h5">
                        University of Cincinnati
                     </Typography>
                  </Grid>
               </Grid>
            </Grid>
         ) : (
            <Grid item sm md className={classes.aLittleMoreItem}>
               <Box className={classes.dropDownBox} component="div">
                  <List
                     sx={{
                        width: "100%",
                        maxWidth: 300,
                        bgcolor: "transparent",
                     }}
                     component="nav"
                     aria-labelledby="nested-list-subheader"
                     subheader={
                        <ListSubheader
                           className={classes.subheader}
                           sx={{ background: "transparent", color: "white" }}
                           component="div"
                           id="nested-list-subheader">
                           Top Personal Skills:
                        </ListSubheader>
                     }>
                     <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                           <img src={Logo} width="60" alt='logo' />
                        </ListItemIcon>
                        <ListItemText primary="Ambitious" />
                        {open1 ? <ExpandLess /> : <ExpandMore />}
                     </ListItem>
                     <Collapse in={!open1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                           <ListItem buttton sx={{ pl: 4 }}>
                              <ListItemIcon>
                                 <FiberManualRecordRoundedIcon
                                    fontSize="extrasmall"
                                    sx={{ color: "white" }}
                                 />
                              </ListItemIcon>
                              <ListItemText primary="Communication" />
                           </ListItem>
                           <ListItem button sx={{ pl: 4 }}>
                              <ListItemIcon>
                                 <FiberManualRecordRoundedIcon
                                    fontSize="extrasmall"
                                    sx={{ color: "white" }}
                                 />
                              </ListItemIcon>
                              <ListItemText primary="Team player" />
                           </ListItem>
                        </List>
                     </Collapse>
                  </List>
               </Box>
               <Box className={classes.dropDownBox} component="div">
                  <List
                     sx={{
                        width: "100%",
                        maxWidth: 300,
                        bgcolor: "transparent",
                     }}
                     component="nav"
                     aria-labelledby="nested-list-subheader"
                     subheader={
                        <ListSubheader
                           className={classes.subheader}
                           sx={{ background: "transparent", color: "white" }}
                           component="div"
                           id="nested-list-subheader">
                           I Can Help You With:
                        </ListSubheader>
                     }>
                     <ListItem button onClick={handleClick2}>
                        <ListItemIcon>
                           <img src={Logo} width="60" alt='logo' />
                        </ListItemIcon>
                        <ListItemText primary="Bilingual: Spanish/English" />
                        {open2 ? <ExpandLess /> : <ExpandMore />}
                     </ListItem>
                     <Collapse in={!open2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                           <ListItem button sx={{ pl: 4 }}>
                              <ListItemIcon>
                                 <FiberManualRecordRoundedIcon
                                    fontSize="extrasmall"
                                    sx={{ color: "white" }}
                                 />
                              </ListItemIcon>
                              <ListItemText primary="Co-developing the front-end" />
                           </ListItem>
                           <ListItem button sx={{ pl: 4 }}>
                              <ListItemIcon>
                                 <FiberManualRecordRoundedIcon
                                    fontSize="extrasmall"
                                    sx={{ color: "white" }}
                                 />
                              </ListItemIcon>
                              <ListItemText primary="Estimating tasks" />
                           </ListItem>
                           <ListItem button sx={{ pl: 4 }}>
                              <ListItemIcon>
                                 <FiberManualRecordRoundedIcon
                                    fontSize="extrasmall"
                                    sx={{ color: "white" }}
                                 />
                              </ListItemIcon>
                              <ListItemText primary="Researching possible techs" />
                           </ListItem>
                        </List>
                     </Collapse>
                  </List>
               </Box>
            </Grid>
         )}
         <Grid item sm md className={classes.aLittleMoreItem}>
            <Grid item container justify="center" alignItems="center">
               <Grid
                  item
                  style={{
                     width: "350px",
                  }}>
                  <Box component="div" className={classes.languageBox}>
                     <Typography align="left" variant="h5">
                        Programming Language:
                     </Typography>
                     <ul>
                        <li>Javascript</li>
                        <li>Python</li>
                     </ul>
                  </Box>
               </Grid>
            </Grid>
            <Grid item container alignItems="center" justify="center">
               <Grid
                  item
                  style={{
                     width: matchesXS ? "350px" : null,
                  }}>
                  <Box className={classes.languageBox} component="div">
                     <Typography variant="h5">
                        Technologies I've Worked With:
                     </Typography>
                     <Box className={classes.boxTechAnimation}>
                        <ul>
                           <li>HTML</li>
                           <li>CSS3</li>
                           <li>Big Commerce</li>
                           <li>SQL</li>
                           <li>React</li>
                           <li>Express.js</li>
                           <li>Next.js</li>
                           <li>Redux</li>
                           <li>Hooks</li>
                           <li>Context</li>
                        </ul>
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );

   // animated scrolling
   useEffect(() => {
      AOS.init({
         duration: 2000,
         once: false,
      });
      AOS.refresh({

      });
    })
   return (
      <Grid container direction="column" className={classes.mainAboutContainer}>
         <NavBar />

         {/* steve job quote*/}

         <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.quoteContainer}>
            <Grid
               item
               style={{
                  width: betweenSm_Md ? "100%" : "",
               }}
               className={classes.quoteItem}>
               <Box className={classes.quoteBox}>
                  <Typography
                     className={classes.quoteText}
                     style={{
                        width: betweenSm_Md ? "500px" : null,
                        margin: betweenSm_Md ? "0 auto" : "",
                     }}
                     variant={matchesXS ? "h6" : "h5"}>
                     &ldquo; When something is important enough, you do it, even
                     if the odds are not in your favor. &rdquo;{" "}
                     <header-quote>
                        <small className={classes.small}>-Elon Musk-</small>
                     </header-quote>
                  </Typography>
               </Box>
            </Grid>
         </Grid>

         {matchesSM ? "" : <div className={classes.heightHelper}></div>}

         {/* Intro */}
         <Grid
            container
            justify="space-evenly"
            alignItems="center"
            className={classes.mainIntroContainer}>
            <Grid md={4} item className={classes.itemIntro}>
               {/* animated image */}
                  <Grid
                  data-aos='fade-up-right'
               style={{ height: "100%", width: "100%" }}
               item
               container
               alignItems="center"
               justify="center">
               <Grid style={{ height: "100%", width: "100%" }}>
                  <Box className={classes.boxIntro}></Box>
               </Grid>
            </Grid>
            </Grid>
            {/* first animated section */}
            <Grid
               item
               style={{
                  marginTop: matchesSM ? "5em" : null,
               }}
               md>
               <div data-aos='fade-right'>
               <Box className={classes.introBox2}>
                  <Typography
                     className={classes.introh3}
                     variant={matchesXS ? "h4" : "h3"}>
                     Hello!{" "}
                     <Typography
                        component="span"
                        variant="h5"
                        sx={{ color: theme.palette.common.white }}
                        className={classes.introh5}>
                        My name is Julio.
                     </Typography>
                  </Typography>

                  <Typography className={classes.small2}>
                     I am a UX Engineer that aims to work with small
                     businesses to bring a successful asset and a team player.
                  </Typography>
               </Box>
               <Box className={classes.mainBoxContent}>
                  <Typography className={classes.mainBoxContentText}>
                     I am a React Developer with a focus on the{" "}
                     <span className={classes.spanWhite}>UX Engineer</span>. But,
                     still exploring other technologies that spike my interest.
                     I work on builds and maintenance for a variety of client
                     requests. Attentive to UI/UX details and high quality and
                     maintainable code. My current toolset includes React,
                     Redux, Hooks, and other various frameworks, libraries, and
                     technologies related to them. Open to evolving in Java,
                     Python, and many more. if you're looking for a developer to
                     add to your team, I'd love to hear from you!
                  </Typography>
               </Box>
               </div>
            </Grid>  
         </Grid>

         <Box
            component="div"
            sx={{
               height: matchesXS ? "100px" : "230px",
            }}></Box>

         <Divider sx={{ width: "30%", margin: "0 auto" }} variant="middle" />
         {/* A little more About me  */}
         <Box
            component="div"
            sx={{
               height: matchesXS ? "100px" : "150px",
            }}></Box>
         {!More ? variableButton : littleMore1}
         <div className={classes.heightHelper}></div>
         <div className={classes.heightHelper}></div>

         <Divider sx={{ width: "30%", margin: "0 auto" }} variant="middle" />

         {/* Where I worked */}
         <Box component="div" sx={{ height: "70px" }}></Box>
         <Typography
            className={classes.workHeader}
            variant={matchesXS ? "h4" : "h3"}>
            Where I'v Worked
         </Typography>

         {matchesXS ? null : (
            <Box component="div" sx={{ height: "50px" }}></Box>
         )}
         <div className={classes.heightHelper}></div>
         <Grid
            container
            direction={matchesSM ? "column" : "flex"}
            lg={12}
          
            alignItems="center"
            justify="center"
            className={classes.workContainer}>
            <WorkHistoryComponent WorkName="UpWork" />
            <WorkHistoryComponent WorkName="CCS Supply Store" />
            <WorkHistoryComponent WorkName="Orlando Spencer LLC" />
            <WorkHistoryComponent WorkName="Halen" />
         </Grid>
         <div className={classes.heightHelper}></div>
         {matchesXS ? null : (
            <React.Fragment>
               <div className={classes.heightHelper}></div>

               <div className={classes.heightHelper}></div>
               <div className={classes.heightHelper}></div>
            </React.Fragment>
         )}

         {/* resume section*/}
         <Divider sx={{ width: "30%", margin: "0 auto" }} variant="middle" />
         <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.resumeContainer}
            direction="column">

            <Grid
               item
               style={{
                  width: matchesXS ? "300px" : null,
               }}
            >
               <Box
               className={classes.resumeItem}
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
               <Typography sx={{ color: "white" }} variant="h5">
                  Learn More About Me...
               </Typography>
               <Typography sx={{ color: "white" }}>Check Out My CV</Typography>
               <Button
                  className={classes.resumeBtn}
                  size="small"
                  sx={{ color: "white" }}
                  disableFocusRipple={true}
                  startIcon={
                     <GetAppIcon
                        className={classes.downloadI}
                        sx={{ color: "white" }}
                     />
                  }
                  href="Resume_2021.pdf"
                  target="_blank"
                  color="secondary"
                  variant="outlined">
                  Download
               </Button>
               </Box>
            </Grid>
         </Grid>
         <MainFooter />
      </Grid>
   );
}

export default AboutPage;
