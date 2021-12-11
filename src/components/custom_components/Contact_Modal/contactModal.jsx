import React, { useState } from "react";


// Assets
import ImagePhone from '../../../assets/contactImage1.jpg';

// Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from "@mui/icons-material/Send";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MessageIcon from "@material-ui/icons/Message";

import CustomButton from "../Button/Homepage_Button/button.component";



const useStyles = makeStyles((theme) => ({
   mainModelContainer: {
      position: "absolute",
      backgroundColor: "gray",
      height: "80%",
      padding: "20px",
      width: "50%",
      borderRadius: "8px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
      [theme.breakpoints.down("sm")]: {
         width: "70%",
         height: "90%",
      },
      [theme.breakpoints.down("xs")]: {
         width: "90%",
         height: "80%",
      },
   },
   GridOneContainer1: {
      width: "100%",
   },
   GridTwoContainer2: {
      width: "100%",
      height: "67%",
      [theme.breakpoints.down("xs")]: {
         height: "65%",
      },
   },
   GridThreeContainer3: {
      width: "100%",
     
   },
   imagephone: {
      borderRadius: "50%",
      height: "130px",
      width: "130px",
   },
  
   TextFieldGridItem: {
      marginTop: "5px",
      width: "60%",
   },
   messageBox: {
      width: "50%",
      border: "2px solid white",
      marginTop: "1em",
      borderRadius: "4px",
   },
   contactButton: {
      color: 'black',
      letterSpacing: '2px',
      backgroundColor: 'gray',
      width: '12.5rem',
      boxShadow: '2px 1px 3px 1px rgba(0,0,0,0.5)',
      padding: '1rem 2rem',
      position: "relative",
      margin: "0.9375rem",
      zIndex: "2",
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
         background: "none",
         color: theme.palette.common.white,
      },
      "&:hover $messageIcon": {
         color: "white"
      }
   },
   messageIcon: {
      color: 'black',
   },
   icons: {
      fontSize: "37px !important",
      borderRadius: "3px",
      padding: "1px",
      width: "20px",
      height: "20px",
      boxShadow: "1px 0px 2px 1px rgba(0,0,0,0.4)",
      "&:hover": {
         transform: "scale(95%)",
         color: `${theme.palette.common.white}`,
      },
      " &:active": {
         boxShadow: "none",
      },
   },
   socialLinks: {
      color: `${theme.palette.common.black} `,
      "&:hover": {
         color: "transparent",
      },
   },
   linkIcons: {
      display: "flex",
      height: "50px",
      width: "50%",
      alignItems: "baseline",
      justifyContent: "space-around",
   },
   submitBtn: {
      color: `${theme.palette.common.white} !important `,
      border: ` 2px solid ${theme.palette.common.white} !important `,
      marginBottom: "15px !important",
      "&:hover": {
         background:
            "linear-gradient(to left, #fff, #333 98%, #333 85%) !important",
      },
      [theme.breakpoints.down('sm')]: {
         height: 40,
         width: 200
      }
   },
   sendicon: {
      transform: 'rotate(-25deg)',
      marginLeft: '10px',
      marginBottom: '5px'
   }
}));

export default function ContactModal() {
   const classes = useStyles();
   const theme = useTheme();
    
  
   const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
   const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [emailHelper, setEmailHelper] = useState('')
   const [phone, setPhone] = useState("");
   const [phoneHelper, setPhoneHelper] = useState('')
   const [message, setMessage] = useState("");
   
   const [isopen, setIsOpen] = useState(false);
  
   
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const onChange = event => {

      let valid;
      switch (event.target.id){
         case 'email':
            setEmail(event.target.value);
            valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
            if (!valid) {
               setEmailHelper('Invalid email')
            } else {
               setEmailHelper('')
            }

            break;
         case 'phone':
            setPhone(event.target.value);
            valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
            if (!valid) {
               setPhoneHelper('Invalid number')
            } else {
               setPhoneHelper('')
            }
            break;

         default:
            break;
      }
   }





   return (
      <div>
         {matchesXS && matchesSM ? (
           <Button  disableTouchRipple={true} onClick={handleOpen} className={classes.contactButton}>
           <MessageIcon  className={classes.messageIcon} />
           </Button>

          
         ) : (
            <Button
               color="primary"
               disableTouchRipple={true}
               onClick={handleOpen}
               className={classes.contactButton}>
               Contact
            </Button>
         )}

         <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}>
            <Fade in={open}>
               <Box className={classes.mainModelContainer}>
                  {/* Grid one - contains image and intro */}

                  <Grid
                     container
                     spacing={1}
                     className={classes.GridOneContainer1}>
                     <Grid
                        item
                        container
                        alignItems="center"
                        justifyContent="space-evenly">
                        <Grid
                           item
                           xs={12}
                           md={6}
                           style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                           }}>
                           <img
                              className={classes.imagephone}
                              src={ImagePhone}
                              alt='contact'
                           />
                        </Grid>
                        <Grid item xs={12} md={6}>
                           {!matchesSM ? (
                              <Typography
                                 align="center"
                                 variant={matchesXS && matchesSM ? "h6" : "h3"}>
                                 Contact
                              </Typography>
                           ) : (
                              ""
                           )}
                        </Grid>
                     </Grid>
                  </Grid>

                  {/* Grid two - contains detail and inputs + message */}
                  <Grid
                     container
                     style={{
                        height: matchesXS ? "" : null,
                     }}
                     alignItems="center"
                     justifyContent="space-evenly"
                     spacing={1}
                     className={classes.GridTwoContainer2}>
                     <Grid item md={6}>
                        {" "}
                        <Typography
                           align="center"
                           variant={matchesSM && matchesMD ? "h6" : "h5"}>
                           Have any questions?
                           <br />
                           Send me message, and let's get talking!
                        </Typography>
                     </Grid>
                     <Grid
                        item
                        container
                        style={{
                           maxWidth: !matchesSM && !matchesXS ? "50%" : "100%",
                        }}
                        justifyContent="center"
                        alignItems="center"
                        md={6}>
                        <Box style={{ width: "90%" }}>
                           
                           
                           {/* form fields */}

                           <Grid item>
                              <Box
                                 style={{ width: "100%" }}
                                 className={classes.TextFieldGridItem}>
                                 <TextField
                                    fullWidth
                                    label="Name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                 />
                              </Box>
                           </Grid>
                           <Grid item>
                              <Box
                                 style={{ width: "100%" }}
                                 className={classes.TextFieldGridItem}>
                                 <TextField
                                    fullWidth
                                    label="Email"
                                    error={emailHelper.length !== 0}
                                    helperText={emailHelper}
                                    id="email"
                                    value={email}
                                    onChange={onChange}
                                 />
                              </Box>
                           </Grid>
                           <Grid item>
                              <Box
                                 style={{ width: "100%" }}
                                 className={classes.TextFieldGridItem}>
                                 <TextField
                                    fullWidth
                                    label="Phone"
                                    error={phoneHelper.length !== 0}
                                    helperText={phoneHelper}
                                    id="phone"
                                    value={phone}
                                    onChange={onChange}
                                 />
                              </Box>
                           </Grid>
                           <Grid item>
                              <Box
                                 style={{ width: "100%" }}
                                 className={classes.messageBox}>
                                 <TextField
                                    placeholder=" Send me a message"
                                    InputProps={{ disableUnderline: true }}
                                    multiline
                                    rows={5}
                                    value={message}
                                    id="message"
                                    onChange={(e) => setMessage(e.target.value)}
                                 />
                              </Box>
                           </Grid>
                        </Box>
                     </Grid>
                  </Grid>

                  {/* Grid three - contains links and button */}
                  <Grid
                     style={{}}
                     container
                     direction={matchesSM ? "column-reverse" : ""}
                     justify={matchesXS && matchesMD ? "center" : ""}
                     alignItems={matchesXS ? "baseline" : "center"}
                     className={classes.GridThreeContainer3}>
                     <Grid
                        style={{
                           width: matchesSM || matchesXS ? "90%" : "50%",
                           marginTop: matchesSM || matchesXS ? "10px" : "",
                        }}
                        item
                        md={6}
                        className={classes.linkIcons}>
                        <Box style={{ height: "100%" }}>
                           <a
                              className={classes.socialLinks}
                              rel="noreferrer"
                              href="https://www.facebook.com/julioclopezDev/"
                              target="_blank">
                              <FacebookIcon className={classes.icons} />
                           </a>
                        </Box>
                        <Box style={{ height: "100%" }}>
                           <a
                              className={classes.socialLinks}
                              rel="noreferrer"
                              href="https://www.linkedin.com/in/juliolopezdev/"
                              target="_blank">
                              <LinkedInIcon className={classes.icons} />
                           </a>
                        </Box>
                        <Box style={{ height: "100%" }}>
                           <a className={classes.socialLinks}  rel="noreferrer" href="mailto: joeyclopez88@gmail.com">
                              <EmailIcon className={classes.icons} />
                           </a>
                        </Box>
                        <Box style={{ height: "100%" }}>
                           <a
                              className={classes.socialLinks}
                              rel="noreferrer"
                              href="https://github.com/JulioCLop">
                              <GitHubIcon className={classes.icons} />
                           </a>
                        </Box>
                     </Grid>
                     <Grid item md={6}>
                        <Grid
                           item
                           container
                           justify="center"
                           alignItems="center">

                           {/* send button */}

                           <Grid item>
                              <Button
                                 disabled={
                                    name.length === 0 ||
                                    message.length === 0 ||
                                    phoneHelper.length !== 0 ||
                                    emailHelper.length !== 0
                                 }
                                 className={classes.submitBtn}
                                 color="primary"
                                 disableTouchRipple={true}
                                 variant="outlined"
                                 onClick={ ()=> setIsOpen(true)}
                              >
                                 Send Message <SendIcon className={classes.sendicon} />
                              </Button>
                           </Grid>
                           {/* confirmation dialog */}
                           <Dialog open={isopen} onClose={() => setIsOpen(false)}
                              PaperProps={{
                                 style: {
                                    background: 'gray',
                                    paddingTop: '2em',
                                    paddingLeft: matchesXS ? '1em' : '5em ',
                                    paddingRight: matchesXS ? '1em' : '5em ',
                                 }
                              }}>
                              <DialogContent style={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center'
                              }}>
                                 <Grid container j direction='column'>
                                    <Grid item>
                                    <Typography variant='h4' gutterBottom> Confirm Message</Typography>
                                    </Grid>
                                    
                                    <Grid item>
                                    <Box
                                       style={{ width: "100%" }}
                                       className={classes.TextFieldGridItem}>
                                       <TextField
                                          fullWidth
                                          label="Name"
                                          id="name"
                                          value={name}
                                          onChange={(e) => setName(e.target.value)}
                                       />
                                    </Box>
                                 </Grid>
                                 <Grid item>
                                    <Box
                                       style={{ width: "100%" }}
                                       className={classes.TextFieldGridItem}>
                                       <TextField
                                          fullWidth
                                          label="Email"
                                          error={emailHelper.length !== 0}
                                          helperText={emailHelper}
                                          id="email"
                                          value={email}
                                          onChange={onChange}
                                       />
                                    </Box>
                                 </Grid>
                                 <Grid item>
                                    <Box
                                       style={{ width: "100%" }}
                                       className={classes.TextFieldGridItem}>
                                       <TextField
                                          fullWidth
                                          label="Phone"
                                          error={phoneHelper.length !== 0}
                                          helperText={phoneHelper}
                                          id="phone"
                                          value={phone}
                                          onChange={onChange}
                                       />
                                    </Box>
                                 </Grid>
                                 <Grid item>
                                    <Box
                                       style={{ width: "100%" }}
                                       className={classes.messageBox}>
                                       <TextField
                                          placeholder=" Send me a message"
                                          InputProps={{ disableUnderline: true }}
                                          multiline
                                          rows={5}
                                          value={message}
                                          id="message"
                                          onChange={(e) => setMessage(e.target.value)}
                                       />
                                    </Box>
                                    </Grid>
                                    <Grid style={{
                                       marginTop: '30px'
                                    }} item container direction={matchesSM ? 'column': 'row'} alignItems='center'>
                                       <Grid item>
                                          <Button style={{
                                             color: 'black',
                                             background: 'none',
                                             marginBottom: '15px'
                                          }} onClick={() => setIsOpen(false)}>Cancel</Button>
                                       </Grid>

                                       <Grid item>
                                          <Button
                                            
                                       onClick={ ()=> setOpen(false)}
                                       disabled={
                                          name.length === 0 ||
                                          message.length === 0 ||
                                          phoneHelper.length !== 0 ||
                                          emailHelper.length !== 0
                                       }
                                       className={classes.submitBtn}
                                       color="primary"
                                       disableTouchRipple={true}
                                       variant="outlined">
                                       Send Message <SendIcon className={classes.sendicon} />
                                    </Button>
                                    </Grid>
                                    </Grid>
                                    </Grid>
                              </DialogContent>
                           </Dialog>
                        </Grid>
                     </Grid>
                  </Grid>
               </Box>
            </Fade>
         </Modal>
      </div>
   );
}