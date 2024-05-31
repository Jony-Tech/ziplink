import { NavLink } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export default function ResultLinkPage() {

    const [shortenLink, setShortenLink] = useState("Hello world");
    const [copied, setCopied] = useState(false)

  return (
    <div className="h-screen flex flex-grow flex-col justify-center items-center">
          
        <img src="/_ZipLink_.svg" className="h-30 pb-5" alt="" />

        <p className="text-slate-500 font-semibold pb-5">¡Enlace acortado!</p>

        <div className="flex gap-2">
            <span className="border rounded py-2 px-4">resultado</span>
            <CopyToClipboard 
                text={shortenLink}
                onCopy={() => setCopied(true)}
            >
                <button className={copied ? 'bg-slate-400 p-2 rounded' : 'bg-slate-200 p-2 rounded'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>

                </button>
            </CopyToClipboard>
        </div>

        <NavLink className="bg-slate-900 px-2 py-1 text-white rounded-md mt-4" to="/">Acorta otro enlace</NavLink>
      </div>
  )
}
