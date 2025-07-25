import React, {createContext, ReactNode, useContext, useState } from 'react'

export const ThemeContext = createContext({
    theme:'light',
    toggleTheme:() => {}
});
type Props ={
    children:ReactNode
}
export function ThemeComponent() {
     const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <div style={{padding:"20px",backgroundColor:theme ==="light" ? "#fff":"#333",color:theme === "light" ? "#000" :"#fff"}}>
        <h2>Chế độ hiện tại: {theme}</h2>
        <button onClick={toggleTheme}>Chuyển đổi theme</button>
    </div>
  )
}
export default function Bai7({children}:Props) {
   const [theme,setTheme] = useState("light");
   const toggleTheme = () => {
    setTheme(theme === "light" ?"dark" :"light")
   }
   return(
    <ThemeContext.Provider value={{theme,toggleTheme}} >
        <div className={theme}>
            {children}
        </div>
    </ThemeContext.Provider>
   )
}
