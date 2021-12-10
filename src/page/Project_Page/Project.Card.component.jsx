import React, { useState } from "react";



// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
   projectsCardItem: {
      margin: "0.2rem auto",
   },
   boxProject: {
      width: "18.75rem",
      height: "18.75rem",
   },
   box: {
      height: "100%",
   },
   card: {
      height: "100%",
      width: "100%",
      position: "relative",
      "&:hover span": {
         opacity: 0,
      },
   },
   cardContent: {
      opacity: 1,
      fontFamily: "inherit",
      color: "white",
      background: "rgba(0,0,0,0.8) ",
      height: "18.75rem",
      width: "100%",
      textUnderline: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.9s",
      zIndex: "2",
      textAlign: "center",
      "&:hover": {
         opacity: 0,
         transition: "all 1s",
      },
   },
   
}));




function ProjectCard({ Filter }) {
  
   const classes = useStyles();
   const [view, setView] = useState(true);

console.log(Filter)
   return (
    
      Filter.map((card) => (
         <Grid item className={classes.projectsCardItem}>
            <Paper data-aos='flip-left' elevation={3} className={classes.boxProject}>
               <Link
                  sx={{ textDecoration: "none" }}
                  className={classes.link}
                  component={Link}
                  href={card.projectLink}
                  target="_blank">
                  <Box className={classes.box}>
                     <Card
                        className={classes.card}
                        onMouseEnter={() => setView(true)}
                        sx={{
                           minWidth: 300,
                           backgroundImage: `url(${card.projectImage})`,
                           backgroundPosition: "center",
                           backgroundSize: "cover",
                           backgroundRepeat: "no-repeat",
                           
                        }}>
                        {view ? (
                           <CardContent className={classes.cardContent}>
                              <Typography
                                 className={classes.projectName}
                                 variant="h4">
                                 {card.projectName}
                              </Typography>
                           </CardContent>
                        ) :
                           null}
                     </Card>
                  </Box>
               </Link>
            </Paper>
            </Grid>
         )
      )

     )
}

export default ProjectCard;
