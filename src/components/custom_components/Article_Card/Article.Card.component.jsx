import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';





const useStyles = makeStyles(theme => ({
  cardContent: {
    [theme.breakpoints.down('md')]: {
      width: '300px',
     
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  articleBtn: {
    border: 'none !important',
      color: 'black !important',
      boxShadow: "-1px 2px 3px 0px rgba(0,0,0,0.75)",
      "&:hover": {
         boxShadow: 'none',
         backgroundColor: '#d1d3d2 !important'
      },
      "&:focus": {
         outline: 'none'
      }
  }

}))  





function ArticleCard() {
    // const { isDarkMode } = useContext(ThemeContext);
    const classes = useStyles();
   
    
    
  return (
    <React.Fragment>
      <Grid item className={classes.cardContent} >
      <Paper elevation={3}>
    <Card >
    <Grid container direction="column" alignItems='center' justify="center">
    <CardContent>
        <Typography variant='h6'>
        10 fundamental UI design principles you need to know
              </Typography>
              <small>By:Renee Fleck </small>
        <Typography>
       "Will help you create a seamless user experience."
        </Typography>
       
      </CardContent>
      <CardActions>
      <Button className={classes.articleBtn} target="_blank" href='https://dribbble.com/stories/2021/09/07/10-fundamental-ui-design-principles-you-need-to-know' variant='outlined' size="small">Learn More</Button>
      </CardActions>
    </Grid>
    </Card>
    </Paper>
  </Grid>
      <Grid item className={classes.cardContent}>
        <Paper elevation={3}>
        <Card >
        <Grid   container direction="column" alignItems='center' justify="center">
        <CardContent>
            <Typography variant='h6'>
            Mistakes Junior React Developers Make
                  </Typography>
                  <small>By: Malcolm</small>
            <Typography>
                "Always live and learn from out mistakes!"
            </Typography>
           
          </CardContent>
          <CardActions>
          <Button className={classes.articleBtn} target="_blank" href="https://frontend-digest.com/mistakes-junior-react-developers-make-c546b1af187d" variant='outlined' size="small">Learn More</Button>
          </CardActions>
        </Grid>
        </Card>
        </Paper>
  </Grid>
      
      </React.Fragment>
     
           
        )
    
}

export default ArticleCard;