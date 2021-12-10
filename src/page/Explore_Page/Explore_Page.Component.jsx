import React from "react";

// Component Imports
import NavBar from "../../components/NavigationBar/NavBar.Component";
import Footer from '../../components/Footer/Main.Footer.Component'


// material UI
import { useTheme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";





const useStyles = makeStyles((theme) => ({
   uxContainer: {},
   uxResource: {
      padding: " 7.5px 0 0 15px",
      height: "100%",
      width: "100%",
   },
   links: {
      color: "white",
      textDecoration: "none",
      "&:hover ": {
         textDecoration: "underline",
         color: `${theme.palette.common.white}`,
      },
   },
   images: {
      filter: "grayscale(60%)",
      objectFit: 'cover'

    

   },
  titles: {
     textAlign: 'justify',
     margin: '25px 0'
   },
   dateHead: {
     margin: '0'
   },
   mainExploreHeader: {
      margin: '25px 0'

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
            style={{
               marginTop: "5em",
            }}
            alignItems="center"
            justify="center">
            <Grid
            container
               style={{
               margin: '50px'
            }}
               alignItems='center'
               justifyContent='center'>
            <Grid item>
               <Typography className={classes.mainExploreHeader} variant='h1'> Explore These Great Article</Typography>
            </Grid>
         </Grid>
            <Grid
               item
               alignItems="center"
               justify="center"
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
                     height: "400px",
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
                  marginTop: '30px'
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
                     height: "400px",
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

            {/*
                    <Grid item container>
                    <h1>hello</h1>
                </Grid>
                */}
         </Grid>
         <Footer/>
      </React.Fragment>
   );
}