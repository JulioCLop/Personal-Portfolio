import React from "react";

// React Router 
import { NavLink } from "react-router-dom";

// Styles Import 
import "./Main.Nav.style.css";




function MainNav() {

   return (
     <nav className="Main-Nav-Container">
           <NavLink 
              className="Main-Nav-Link btn_1"
              activeClassName="Main-Nav-Link-Active"
              exact
              to="/about">
              <i className="fa fa-user"></i>
              About Me
              <span className="project-span"/>
           </NavLink>
           <NavLink
              className="Main-Nav-Link btn_1"
              activeClassName="Main-Nav-Link-Active"
              exact
              to="/projects">
              <i className="fa fa-code"></i>
              <span>Projects</span> 
            <span className="project-span"/>
           </NavLink>
     </nav>
     
   
      );
   }


export default MainNav;
