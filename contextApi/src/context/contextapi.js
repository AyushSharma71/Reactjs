import { createContext,useContext } from "react";


export const ThemeContext = createContext({   //for creating the context
    themeMode : "light",
    lightMode:()=>{},
    darkMode:() =>{},
})

export const Themeprovider = ThemeContext.Provider; //using provider 

export default function themeContextProvider(){   //usecontext to use the value 
    return useContext(ThemeContext);
}
