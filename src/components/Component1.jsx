import { useContext, useState } from "react";
import { ThemeContext } from '../assets/context/context';
export const Component1 = () =>{
  const {theme, setTheme} = useContext(ThemeContext)
  document.documentElement.setAttribute('data-theme', theme)
  const handletoggle=()=>{
    setTheme(theme === "dark" ? "light" : "dark")
    document.documentElement.setAttribute('data-theme', theme)
  }
  const UppercaseTheme = theme.toUpperCase()
  return(
    <>
<div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">React bank</a>
  </div>
  <div className="flex gap-2">
        <div className="navbar-end">
          <a onClick={handletoggle}><input type="checkbox" defaultChecked className="toggle toggle-sm checked:" /></a>  
        </div>
  </div>
</div>
    </>
  )
}