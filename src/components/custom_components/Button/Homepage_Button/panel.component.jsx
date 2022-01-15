import React, {useState} from  'react';

// Material UI
import Grid from "@material-ui/core/Grid";

// Import components
import CustomButton from './button.component';

// Import Styles
import './panel.styles.css';

const imageList = [
    'https://greencityforce.org/wp-content/uploads/2020/10/HHM-Map-Graphic.jpg',
    'https://images.unsplash.com/photo-1531030874896-fdef6826f2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1553782749-5ab8693a5f4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80'
 ];

 

 



export default function PanelComponent(props) {

    const [activeAbout, setActiveAbout] = useState(false);
    const [activeExplore, setActiveExplore] = useState(false);
    const [activeProject, setActiveProject] = useState(false);


    const AboutBtnHandler = ()=> {
        setActiveAbout(true)
    }
    const ProjectBtnHandler = ()=> {
        setActiveProject(true)
    }
    const ExploreBtnHandler = ()=> {
        setActiveExplore(true)
    }
    
   
    return (
        <div >
        <div  className='panel-container'>
        <div
         className={activeAbout ? `panel active` : `panel`} 
         style={{backgroundImage:` url(${imageList[0]})`}} 
        >
        <p>"Integrity, Goals, Motivation"</p>
         <h3>About Me</h3>
         </div>
        <div
         className={activeProject ? `panel active` : `panel`} 
         style={{backgroundImage:` url(${imageList[1]})`}}>
          <p>Take a look at some examples</p>
         <h3>Projects</h3>
         </div>
        <div
         className={activeExplore ? "panel active" : "panel"} 
         style={{backgroundImage:` url(${imageList[2]})`}}>
          <p>Let me know what you think.</p>
         <h3>Explore</h3>
         </div>
        </div>

                     <Grid container >
                     <CustomButton
                     toPath="/about"
                     onMouseEnter={ AboutBtnHandler } 
                     onMouseLeave={()=> setActiveAbout(false)}
                     >
                     ABOUT Me
                  </CustomButton>
                     <CustomButton
                      onMouseEnter={ ProjectBtnHandler } 
                      onMouseLeave={()=> setActiveProject(false)}
                      toPath="/projects"
                        >
                        PROJECTS
                        </CustomButton>
                        <CustomButton
                          onMouseEnter={ ExploreBtnHandler } 
                          onMouseLeave={()=> setActiveExplore(false)} 
                          toPath="/explore"
                          >
                        EXPLORE
                     </CustomButton>
                  </Grid>
               </div>
    )
}
