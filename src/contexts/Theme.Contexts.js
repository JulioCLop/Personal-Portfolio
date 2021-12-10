import React, { createContext } from 'react';
import useToggle from '../hooks/useNavToggle';



export const ThemeContext = createContext();


export function ThemeProviders(props) {

    
    const [isDarkMode, toggleTheme] = useToggle(true);
    const [open, setOpen] = useToggle(true);
  
        return (
            <ThemeContext.Provider
                value={{
                    isDarkMode,
                    toggleTheme,
                    open,
                    setOpen,
                  
                }}>
                {props.children}
            </ThemeContext.Provider>
        );
    
  }



