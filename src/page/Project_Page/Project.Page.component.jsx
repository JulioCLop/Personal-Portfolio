import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";


// Module Imports
import  projects  from '../../modules/project.js';


// Component Imports
import ProjectCard from "../Project_Page/Project.Card.component";
import NavBar from "../../components/NavigationBar/NavBar.Component";
import MainFooter from "../../components/Footer/Main.Footer.Component";

// Assets
import projectImage from "../../assets/projectImage.jpg";

// Material UI imports
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import AOS from 'aos';
import 'aos/dist/aos.css';

console.log(projects)


const useStyles = makeStyles((theme) => ({
   root: {
      "&.Mui-focused": {
         color: "red",
      },
   },
   projectContainer: {
      marginTop: "100px",
      width: "100%",
      height: "25rem",
      [theme.breakpoints.down("sm")]: {
         paddingTop: "3.125rem",
         height: "31.25rem",
      },
   },
   section1Item: {
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
   },
   projectCardContainer: {
      width: "100%",
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '0.9375rem',
      margin: '0.9375rem auto',
      padding: 0,
      

   },
   '@media(max-width: 81.25rem)': {
      projectCardContainer: {
         gridTemplateColumns: '1fr 1fr 1fr'
      }
     
   },
   '@media(max-width: 60.375rem)': {
      projectCardContainer: {
         gridTemplateColumns: '1fr 1fr'
      }
     
   },
   '@media(max-width: 41.5625rem)': {
      projectCardContainer: {
         gridTemplateColumns: '1fr'
      }
     
   },
   imageProject: {
      backgroundImage: `url(${projectImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      opacity: "0.4",
      height: "70%",
      width: "80%",
      [theme.breakpoints.down("sm")]: {
         height: "100%",
         width: "60%",
      },
      [theme.breakpoints.down("xs")]: {
         height: "100%",
         width: "90%",
      },
   },
   mainTextContent: {
      height: "50%",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
         width: "90%",
      },
   },
   mainText: {
      margin: "0.625rem",
      [theme.breakpoints.down("xs")]: {
         textAlign: "center",
      },
   },
   projectBuilt: {
      width: "100%",
      height: "4.375",
      textAlign: "center",
      textTransform: "uppercase",
      [theme.breakpoints.down("sm")]: {
         marginLeft: "0",
      },
   },
   heightHelper: {
      height: "6.25rem",
   },
   inputBox: {
      width: "80%",
      margin: "0 4.5rem 3rem 4.5rem",
      "&:focus": {
         border: "none",
         color: "white",
      },
   },
}));

function ProjectPage() {
   const theme = useTheme();
   const classes = useStyles();

   // Responsive media queries
   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
   const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
   const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
   const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

   // Search box for projects
   const [filterProject, setFilterProjects] = useState([]);
   const [search, setSearch] = useState("");

   console.log(filterProject);

  
   // Search filter
   const searchFilter = filterProject.filter((project) => {
      const Results = project.projectName
         .toLowerCase()
         .includes(search.toLowerCase());

      return Results;
   });

   

   useEffect(() => {
      console.log(setFilterProjects(projects))  
     
    
   },[]);
 
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

         <Grid
            data-aos='fade-right'
            container
            direction={matchesSM ? "column-reverse" : "flex"}
            alignItems="center"
            justify="center"
            className={classes.projectContainer}>
            {/* this is the main content section*/}
            <Grid item md sm xs className={classes.section1Item}>
               <Box className={classes.mainTextContent}>
                  <Typography
                     align="center"
                     className={classes.mainText}
                     variant="h2">
                     Since Beginning My Journey
                  </Typography>
                  <Typography
                     align="center"
                     className={classes.mainText}
                     variant="h5">
                     {" "}
                     Here are a few design projects I've worked on recently.
                  </Typography>
               </Box>
            </Grid>
          
            <Grid item md sm xs className={classes.section1Item}>
              
               <Box  className={classes.imageProject}></Box>
            
            </Grid>
           
         </Grid>
         {matchesXS ? null : <div className={classes.heightHelper}></div>}

         <Grid container alignItems="center" justify="center">
            <Divider style={{ width: "50%" }} />
         </Grid>

         {matchesSM ? null : <div className={classes.heightHelper}></div>}

         <Grid container alignItems="center" justify="center">
            <Box
               sx={{
                  width: "18.75rem",
                  height: "18.75rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
               }}>
               <Typography className={classes.projectBuilt} variant="h3">
                  Projects Built:
               </Typography>
               <TextField
                  style={{ backgroundColor: "#212529" }}
                  className={classes.inputBox}
                  disableUnderline={true}
                  fullWidth
                  InputProps={{ className: classes.root }}
                  type="search"
                  color="primary"
                  label="Search"
                  variant="filled"
                  size="small"
                  onChange={(e) => setSearch(e.target.value)}
               />
            </Box>
         </Grid>

          {/* search bar and container for projects */}
          <Grid
          container
          className={classes.projectCardContainer}
          alignItems={matchesLG || matchesMD ? "flex-start" : "center"}
          justify={matchesLG || matchesMD ? "flex-start" : "center"}
          sm
          md
          lg
          xl>
            <ProjectCard  Filter={searchFilter}/>
       </Grid>
         <MainFooter />
      </React.Fragment>
   );
}

export default ProjectPage;
