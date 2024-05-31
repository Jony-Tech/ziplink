import { NavLink } from "react-router-dom";
import LinkTable from "../components/LinkTable";
import { useState } from "react";


export default function IndexPage() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  return (
      <div className="h-screen flex flex-grow flex-col justify-center items-center">
          
        <img src="/_ZipLink_.svg" className="h-30 pb-5" alt="" />

        <p className="text-slate-500 font-semibold pb-5">¡Pega tu enlace aquí!</p>

          <form className="flex sm:flex-row flex-col gap-2 pb-5">
            <input type="text" className="border rounded-md px-2 py-1"
              placeholder="https://www.ziplinks.com"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
            /><NavLink to="/resultado" className="bg-slate-900 px-2 py-1 text-white rounded-md">Acortar</NavLink>
          </form>

          <LinkTable/>
      </div>
  )
}
