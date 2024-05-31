import { NavLink, useLocation } from "react-router-dom";
import Hamburguer from "./Hamburguer";
import { useMemo, useState } from "react";


export default function Header() {
  const {pathname} = useLocation();
  //to know the location of the page, if it's home or result
  const isHomeOrResult = useMemo(() => pathname === '/' || pathname === '/resultado', [pathname])


  return (
    <header className={isHomeOrResult ? 'bg-orange-500 flex justify-between items-center p-4 absolute w-screen' : 'bg-orange-500 flex justify-between items-center p-4'}>
        <NavLink to="/faq" className={({isActive}) => isActive ? 'font-bold text-black' : 'font-bold text-white'}>FAQ</NavLink>

        <div className="flex items-center gap-2">
            <span className="font-bold text-white">¡Bienvenido!</span>
            <Hamburguer/>
        </div>

        
    </header>
  )
}
