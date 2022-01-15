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
import AboutPageCustomSection from "../../components/Main_Section/Main_section";
import AboutSectionHeaders from "../../components/custom_components/Header/Section.Header.component";





const useStyles = makeStyles((theme) => ({
   mainAboutContainer: {
      padding: ' 0 6rem 6rem 6rem',
      color: '#c9c9c9',
      height: "100%",
      width: "100%",
   },
   quoteContainer: {

      height: "25rem",
      [theme.breakpoints.down("xs")]: {
        width:'100%'
      },
   },
   IntroContainer: {
      heigth: '28.125rem',
     
   },
   quoteItem: {
      backgroundColor: 'rgba(0, 0, 0, 0.501)',
      boxShadow: '0px 2px 2px rgba(0,0,0,0.8)',
      borderRadius: '6px',
      width: '100%',
      height: '15rem',
      [theme.breakpoints.down("sm")]: {
        
      },
   },
   quoteBox: {
      display: 'flex',
      alignItems: 'center',
      height: "100%",
      width: "100%",
      padding: '2rem',
      [theme.breakpoints.down("sm")]: {
         padding: '1rem'
      },
      [theme.breakpoints.down("xs")]: {
       
      },
   },
   quoteText: {
      color: 'white',
      fontWeigth: '700',
      fontSize: '2rem',
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
       
      },
      [theme.breakpoints.down("sm")]: {
       fontSize: "1.5rem"
      },
      [theme.breakpoints.down("xs")]: {
       
      },
   },

   
   itemIntro: {
      height: "300px",
      [theme.breakpoints.down("xs")]: {
         marginBottom: "50px",
      },
   },
   boxIntro: {
     
      
    
   },
   BoxIntroImage: {
      height: '23.4375rem',
      width: '23.4375rem',
      ojbjectFit: 'cover',
      borderRadius: '6px',
      boxShadow: '0px 2px 2px rgba(0,0,0,0.8)',
      filter: "grayscale(50%) "
   },
   
   
   small: {
      color: "#c9c9c9",
      fontSize: '1rem'
   },
   spanWhite: {
      color: "rgba(0, 0, 0, 0.501)",
      fontSize: '1.6rem'
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
      marginLeft: '0.5rem'

   },
   schoolHeader: {
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
      height: "100%",
      width: "100%",
   },
   resumeItem: {
      color: 'white',
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
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      borderRadius: "6px",
   },
   resumeBtn: {
      color: "white",
      borderRadius: '50px',
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
      fontSize: '17px',
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      fontFamily: 'inherit',
      backgroundColor: 'black',
      border: 'none',
      borderRadius: '19px',
      height: "300px",
      "&:hover": {
      
      },
      "&:focus": {
     
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
   IntroSectionOne: {
      width: "40%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   IntroSectionTwo: {
      width: "60%",
      height: '375px',
      padding: '2.2rem'
     
   },
   IntroSectionTwoInner: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around'
   },
   IntroSectionTwoInnerBoxOne: {
      fontFamily: "GFS Didot,serif",
      height: '30%'
   },
   IntroSectionTwoInnerBoxTwo: {
      fontSize: '1.3rem',
      textAlign: 'justify',
      height: '70%'
   },
   letTalk: {
      marginLeft: '0.5rem'
   },
   BoxTwoContent: {
      lineHeight: '1.6rem',
   },
   IntroHeader: {
      width: '100%'
   },
   IntroHeader_h3: {
      fontFamily: 'inherit',
      margin: ' 4rem 0',
      borderBottom: '2px solid white',
      width: '20%'
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
      <Box className={classes.variableBox}>
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
      <React.Fragment>
      <NavBar />
      <div style={{padding: '0 6rem 6rem 6rem'}}>
       
      
         {/* steve job quote*/}
         <div >
       
         <AboutPageCustomSection>  
         <AboutSectionHeaders>
            A Little About Me..</AboutSectionHeaders>
         <Grid
         container
         alignItems="center"
         justify="center"
         className={classes.quoteContainer}>   
            <Box className={classes.quoteBox}>
               <h5 className={classes.quoteText}
                 >
                  &ldquo; When something is important enough, you do it, even
                  if the odds are not in your favor. &rdquo;{" "}
                  <header-quote>
                     <small className={classes.small}>-Elon Musk-</small>
                  </header-quote>
               </h5>
            </Box>
      
      </Grid>
        </AboutPageCustomSection>
            {/* Intro */}
           
           
            <AboutPageCustomSection>
            <Grid
            container
            className={classes.IntroContainer}
            alignItems="center"
            direction={matchesSM ? 'column' : 'row'}
            
            >
               {/* animated image */}
              
            <Grid
               className={classes.IntroSectionOne}
               item
               data-aos='fade-up-right'
                 >
                     <div className={classes.boxIntro}>
                     <img className={classes.BoxIntroImage} src={IntroImage} alt=""/>
                     </div>
            </Grid>
            {/* first animated section */}
            <Grid
               item
               className={classes.IntroSectionTwo}
               >
               <div className={classes.IntroSectionTwoInner} >
                  <div
                  
                     className={classes.IntroSectionTwoInnerBoxOne}>
                     <h3>
                        Hello!
                        <span
                           className={classes.letTalk} > 
                   Let's Talk...
               </span>
            </h3>
                  </div>
               <div className={classes.IntroSectionTwoInnerBoxTwo}>
                  <p className={classes.BoxTwoContent}>
                     I am a <span className={classes.spanWhite}> UI React Developer</span>. But,
                     still exploring other technologies that spike my interest.
                     I work on builds and maintenance for a variety of client
                     requests. Attentive to UI/UX details and high quality and
                     maintainable code. My current toolset includes React,
                     Redux, Hooks, and other various frameworks, libraries, and
                     technologies related to them. Open to evolving in Java,
                     Python, and many more. if you're looking for a developer to
                     add to your team, I'd love to hear from you!
                  </p>
               </div>
               </div>
            </Grid>  
         </Grid>
            </AboutPageCustomSection>
            {/*a little more about me*/}
            <AboutPageCustomSection>
            {!More ? variableButton : littleMore1}
            </AboutPageCustomSection>
         
            {/* Where I worked */}
            <AboutSectionHeaders>
            Where I'v Worked...
            </AboutSectionHeaders>
        <AboutPageCustomSection>
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
               </AboutPageCustomSection>
            {/* resume section*/}
            <AboutSectionHeaders>
            Check out my resume...
            </AboutSectionHeaders>
            <AboutPageCustomSection>
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
               <h5>
                  Learn More About Me...
               </h5>
               <h6 >Check Out My CV</h6>
               <Button
                  className={classes.resumeBtn}
                  size="md"
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
            </AboutPageCustomSection>
            </div>
     
      </div>
      <MainFooter />
      </React.Fragment>
   );
}

export default AboutPage;
