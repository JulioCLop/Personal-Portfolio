import React, { useState, useEffect } from 'react';

// Router imports 
import { Routes, Route} from "react-router-dom";

// Pages imports
import AboutPage from './page/About_Page/About.Page.component';
import HomePage from './page/Home_Page/Home.Page.component';
import Loading from './components/loading_page/loadingPage.component';
import ProjectPage from './page/Project_Page/Project.Page.component';
import TransitionsModal from './components/custom_components/Contact_Modal/contactModal';
import ExplorePageComponent from './page/Explore_Page/Explore_Page.Component';

// Context API
import { ThemeProviders } from '../src/contexts/Theme.Contexts';

// Material UI
import { ThemeProvider } from "@mui/material/styles";
import theme from '../src/UI/theme';

// Styles
import './App.css';






function App(){
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
  setTimeout( ()=> setIsLoading(false),5000 )
},[])
  
  
  
  return (
    <ThemeProviders>
      <ThemeProvider theme={theme}>
    <React.Fragment>
    
    {isloading === false ? (
       
          
      
     <Routes>
    
    <Route  path="/" element={ <HomePage />} />
    <Route  path="/about" element={<AboutPage />} />
    <Route  path="/projects" element={<ProjectPage />} />
    <Route  path="/explore" element={ <ExplorePageComponent />} />
    <Route  path="/contact" element={<TransitionsModal />} />
   
    </Routes>
  
     
    
      )
      :
       
      
        (
        
          <Loading  />
        
        )

    }
   
     
      </React.Fragment>
      </ThemeProvider>
      </ThemeProviders>
    )
  
}

export default App;
