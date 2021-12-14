import React from "react";

// Component Imports
import NavBar from "../../components/NavigationBar/NavBar.Component";
import Footer from '../../components/Footer/Main.Footer.Component'


// Material UI
import { useTheme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";





const useStyles = makeStyles((theme) => ({
   uxContainer: {},
   uxResource: {
      padding: " 0.46875rem 0 0 0.9375rem",
      
      height: "100%",
      width: "100%",
   },
   links: {
      color: "white",
      textDecoration: "none",
      backgroundColor: 'gray',
      padding: "1rem",
      borderRadius: "80px",
      boxShadow: '0px 2px 2px rgba(0,0,0,0.8)',


      "&:hover ": {
         textDecoration: "none",
         boxShadow: '0px 1px 1px rgba(0,0,0,0.8)',
         Transition: '1s all ease-in-out',
        color: "#c9c9c9"
      },
   },
   images: {
      filter: "grayscale(60%)",
      objectFit: 'cover',
      boxShadow: '0px 2px 4px 2px rgba(0,0,0,0.8)'
   },
  titles: {
     textAlign: 'justify',
     margin: '0.1rem 0 2.5rem 0',
     color: '#c9c9c9'
   },
   dateHead: {
      color: "#c9c9c9",
      margin: '0',
     
   },
   mainExploreHeader: {
      margin: '1.5625rem 0'

   },
   mainContainerContent: {
      color: 'white',
      marginBottom: "5rem"
   }
}));

export default function ExplorePageComponent() {
   const classes = useStyles();
   const theme = useTheme();
   const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <React.Fragment>
         <NavBar />
         <Grid
            container
            alignItems="center"
            justify="center"
         className={classes.mainContainerContent}>
            <Grid
            container
               style={{
               margin: '4.6875rem 0'
            }}
               alignItems='center'
               justifyContent='center'>
            <Grid item>
               <Typography className={classes.mainExploreHeader} variant='h3'> Explore These Great Article</Typography>
            </Grid>
         </Grid>
            <Grid
               item
               alignItems="center"
               justify="center"
               style={{marginBottom: '4rem'}}
               className={classes.uxContainer}
               container>
               <Grid item>
                  <Grid item>
                     <img
                        className={classes.images}
                        src="https://cdn.dribbble.com/uploads/27370/original/8d5a5ae5fc55a7b8757cb448013b83af.png?1630447484"
                        width="500"
                        alt="ux/ui design"
                     />
                  </Grid>
               </Grid>
               <Grid
                  item
                  style={{
                     height: "25rem",
                     margin: ' 0 1rem 0 2rem',
                     display: "column",
                     alignItems: "flex-start",
                     justifyContent: "flex-start",
                  }}>
                  <Grid
                     item
                     container
                     className={classes.uxResource}
                     direction="column"
                     alignItems={matchesMD ? "center" : "start-flex"}
                     justify={matchesMD ? "center" : "start-flex"}>
                     <Grid>
                        <Box>
                       <p className={classes.dateHead}><small>SEP 7, 2021 </small> - UX/UI Design Article</p>   
                        </Box>
                     </Grid>
                     <Grid>
                        <Box>
                           <h3 className={classes.titles}>
                              10 fundamental UI design principles you need to
                              know
                           </h3>
                        </Box>
                     </Grid>
                     <Grid>
                        <Box>
                           <a
                              className={classes.links}
                              rel="noreferrer"
                              href="https://dribbble.com/stories/2021/09/07/10-fundamental-ui-design-principles-you-need-to-know"
                              target="_blank">
                              {" "}
                              Read the article{" "}
                           </a>
                        </Box>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
            <Grid
               style={{
                  marginTop: '1.875rem'
               }}
               container
               item
               direction='row-reverse'
               alignItems="center"
               justify="center"
               className={classes.hookArticleContainer}
              >
               <Grid
                  style={{
                     marginLeft: '3em'
                  }}
                  item>
                  <Grid
                     style={{
                       
                     }}
                     item>
                     <img
                        className={classes.images}
                        src="https://cdn.sanity.io/images/oneb1r22/production/ff5bc871ad4770ab9e5db0975228ad163bfa6cb6-980x500.jpg?auto=format&q=98&w=1080"
                        width="500"
                        height='375'
                        alt="hook article"
                     />
                  </Grid>
               </Grid>
               <Grid
                  item
                  style={{
                     height: "25rem",
                     display: "column",
                     alignItems: "flex-start",
                     justifyContent: "flex-start",
                  }}>
                  <Grid
                     item
                     container
                     className={classes.uxResource}
                     direction="column"
                     alignItems={matchesMD ? "center" : "start-flex"}
                     justify={matchesMD ? "center" : "start-flex"}>
                     <Grid>
                        <Box >
                         <p className={classes.dateHead}><small>SEP 7, 2021 </small> - Hooks Article</p> 
                        </Box>
                     </Grid>
                     <Grid>
                        <Box>
                           <h3 className={classes.titles}>
                           React Hooks and What They Mean for Designers
                           </h3>
                        </Box>
                     </Grid>
                     <Grid>
                        <Box>
                           <a
                              className={classes.links}
                              rel="noreferrer"
                              href="https://www.framer.com/blog/posts/react-hooks/"
                              target="_blank">
                              {" "}
                              Read the article{" "}
                           </a>
                        </Box>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
         <Footer/>
      </React.Fragment>
   );
}
