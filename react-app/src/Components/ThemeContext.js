import React, {createContext, useContext, useState} from 'react'

const ThemeContext = createContext();
const ThemeUpdate = createContext();

//Custom hooks to easily give us access to the values
export function useTheme(){
    return useContext(ThemeContext)
}

export function useUpdateTheme(){
    return useContext(ThemeUpdate)
}

export function ThemeProvider({children}) {

    //creating the state
    const [theme, setTheme]=useState(true)

    //Updating the state
    function toggle(){
        setTheme(prevTheme => !prevTheme)
    }

  return (

    //persisting the values in the children
    <ThemeContext.Provider value={theme}>
        <ThemeUpdate.Provider value = {toggle}>
            {children}
        </ThemeUpdate.Provider>

    </ThemeContext.Provider>
  )
}
