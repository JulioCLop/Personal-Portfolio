import React, { createContext } from 'react';
import useToggle from '../hooks/useNavToggle';


export const ThemeContext = createContext();


export function ModalProvider(props) {

    const [open, setOpen] = useToggle(true);
  
  
        return (
            <ThemeContext.Provider
                value={{
                    open,
                    setOpen,
                  
                }}>
                {props.children}
            </ThemeContext.Provider>
        );
    
  }



