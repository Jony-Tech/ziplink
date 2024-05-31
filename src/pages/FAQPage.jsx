import { NavLink } from "react-router-dom";

export default function FAQPage() {
  return (
    <div className="mt-5 px-10 container mx-auto">
      <NavLink to="/">
        <img src="/_ZipLink_.svg" className="pb-4" alt="ZipLinkLogo" />
      </NavLink>
      <span className="text-lg text-slate-500">Conocenos...</span>
      <p className="leading-relaxed pb-4">
        En nuestro sitio web proporcionamos una herramienta sencilla y eficiente para acortar tus enlaces largos y complicados. Nos dedicamos a facilitarte la tarea de compartir URLs de una manera más amigables y manejable.
      </p>
      <h2 className="text-orange-500 font-bold text-2xl pb-2">Qué es un acortador de enlaces?</h2>
      <p>
        Un acortador de enlaces es un servicio que convierte una URL larga en una versión más corta y fácil de compartir.
      </p>
      <p className="pb-4">Esto es especialmente útil en plataformas de redes sociales, correos eléctronicos o cualquier lugar donde el espacio para texto es limitado.</p>
      <h2 className="text-orange-500 font-bold text-2xl pb-2">Cómo funciona?</h2>
      <p>1. Ingresa tu URL larga: En nuestro formulario de entrada, pega la URL que deseas acortar</p>
      <p>2. Genera un enlace corto: Nuestro sistema procesa tu solicitud y genera un enlace corto único.</p>
      <p className="pb-4">3. Comparte el enlace corto: Usa este enlace acortado para compartir en redes sociales, correos electrónicos o cualquier otro medio. Cuando alguien haga click en el enlace corto, será redirigido a la URL original.</p>
      <h2 className="text-orange-500 font-bold text-2xl pb-2">¡Apoyanos!</h2>
    </div>
  )
}