import { NavLink } from "react-router-dom";


export default function LoginPage() {
  return (
    <div>
        <div className="relaltive">
            <NavLink to="/"><img className="absolute mt-4 ml-4 h-10" src="_ZipLink_.svg" alt="zipLinkLogo" /></NavLink>
        </div>

        <div className="flex flex-col justify-center h-screen items-center">
            <h2 className="font-bold text-xl">Inicia sesión</h2>
            <p className="text-center m-3">Ingresa tu correo eléctronico para comenzar</p>

            <form className="flex flex-col w-1/3">
                <label htmlFor="email">Correo:</label>
                <input id="email" type="email" className="border rounded w-full mb-2 px-2 py-1" placeholder="email@domain.com"/>
                <label htmlFor="password">Contraseña:</label>
                <input id="password" type="password" className="border rounded w-full px-2 py-1" placeholder="ingresa tu contraseña"/>

                <input type="submit" className="bg-slate-900 px-2 py-1 text-white rounded-md mt-4 w-full whitespace-normal" value="Ingresa con tu correo"/>
            </form>

            <p className="font-semibold text-slate-400 my-4">O continua con</p>
        </div>
    </div>
  )
}
