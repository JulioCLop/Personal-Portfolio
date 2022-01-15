import React, { useState, useEffect } from "react";


// Module Imports
import  projects  from '../../modules/project.js';


// Component Imports
import ProjectCard from "../Project_Page/Project.Card.component";
import NavBar from "../../components/NavigationBar/NavBar.Component";
import MainFooter from "../../components/Footer/Main.Footer.Component";
import SectionHeader from '../../components/custom_components/Header/Section.Header.component';
import MainSection from '../../components/Main_Section/Main_section';
// Assets
import projectImage from "../../assets/projectImage.jpg";
import TicTacToe from '../../assets/TicTacToe.png';

// Material UI imports
import TextField from "@material-ui/core/TextField";

// Amination
import AOS from 'aos';
import 'aos/dist/aos.css';

// Styles Import 
import './Projects.Page.styles.css';



   
   
   
function ProjectPage(props) {
   const [filterProject, setFilterProjects] = useState([]);
   const [search, setSearch] = useState("");

   console.log(filterProject);

   const searchFilter = filterProject.filter((project) => {
      const Results = project.projectName
         .toLowerCase()
         .includes(search.toLowerCase());

      return Results;
   });

   

   useEffect(() => {
      setFilterProjects(projects)
     
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
      <div className="MainProjectContainer">
         <SectionHeader>A Little About My Projects...</SectionHeader>
         <section className="MainContainerSection">
            <section className="JourneySection1">
            <div>
            <h3>Since Beginning My Journey</h3>
            <h5> Here are a few design projects I've worked on recently.</h5>
            <a href="https:google.com">Visit GitHub</a> 
            </div>
            </section>
            <section className="JourneySection2">
           <div>
              <img src={projectImage } alt=""/>
           </div>
            </section>
         </section>
         <SectionHeader>Most Recent Work</SectionHeader>
         <main>
            <section className="Most-Recent">
               <div className="Most-Recent-Inner">
                  <div className="Most-Recent-Containers">
                  <div>
                  <img  src={TicTacToe} alt="tic tac toe"/>
                  <h2>Tic, Tac, Toe App</h2>
                  <small>HTML, CSS, JS</small>
                    <a href="https://julioclop.github.io/Tic-Tac-Toe-Game/">PLAY</a>
                  </div>
                  </div>
                  <div className="Most-Recent-Containers">
                  <div>
                  <img alt=""/>
                  <h1>Face Recognition</h1>
                  <small></small>
                  </div>
                  </div>
               </div>
            </section>
         </main>
         <SectionHeader>Project</SectionHeader>
         <MainSection>
         <div>
         <div>
         <h3>Projects Built:</h3>
         </div>
         <div> 
         <TextField
                  style={{ backgroundColor: "#212529" }}
                  className="InputBox"
                  disableUnderline={true}
                  fullWidth
                  type="search"
                  color="primary"
                  label="Search"
                  variant="filled"
                  size="small"
                  onChange={(e) => setSearch(e.target.value)}
               />
               </div>
         </div>
         </MainSection>
         <section
          style={{
             display: 'grid',
             gridTemplateColumns: '1fr 1fr 1fr 1fr'
             }}>
         <ProjectCard  Filter={searchFilter}/>
         </section>
        
      </div>
      <MainFooter />
      </React.Fragment>
   );
}

export default ProjectPage;
