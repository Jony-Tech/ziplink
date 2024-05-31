import { useState } from "react"
import { NavLink } from "react-router-dom";


export default function Hamburguer() {
    
    const [isOpen, setIsOpen] = useState(false);
    //function to change the state of "isOpen" for the hamburguer menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className="relative flex m-2">
        <button onClick={toggleMenu}>
            <img className="h-10 rounded-full" src="https://www.iconbunny.com/media/catalog/product/1/2/1270.10-user-icon-iconbunny.jpg?width=50&store=icons&image-type=small_image" alt="" />
        </button>
        {isOpen && (
            <div className="absolute right-0 mt-11 bg-white border rounded shadow-xl">
                <div className="p-4 font-semibold flex flex-col items-start">
                    <NavLink to="/login" className="hover:bg-slate-200 p-2 rounded whitespace-nowrap w-full">Inicia sesión</NavLink>
                    <NavLink to="/signup" className="hover:bg-slate-200 p-2 rounded whitespace-nowrap">Crea tu cuenta</NavLink>
                    <button onClick={toggleMenu} className="px-2 py-1 font-medium hover:bg-slate-200 rounded duration-150">X</button>
                </div>
            </div>
        )}
    </div>
  );
};
