import useTheme from "../../hooks/useTheme";
import CardPerfil from "../cards/CardPerfil"
import Experience from "../experience/Experience";

import Skills from "../skills/Skills";

const Precentation = () => {
    const { darkTheme } = useTheme();

    return (
        <section className="precentacion-container" id="home">
            <CardPerfil />
            <div className="content-text-precentation p-7">
                <h1 className={`sm:text-4xl text-3xl lg:text-6xl leading-normal text-center lg:text-left ${darkTheme && ' text-white'}`}>
                    Hola, soy <span className="text-[--color-primario]">Luis Laguado</span>,<br className=""/>
                    Full-satck Developer.
                </h1>
                <div className={`flex justify-center sm:justify-start items-center gap-4 mt-20 flex-wrap ${darkTheme ?  'text-white font-thin' : 'font-extralight '}`} >
                    <span className="text-4xl sm:text-6xl font-semibold">+3</span>
                    <p className="text-sm sm:text-xl">Años <br />de experiencia</p>
                    <button className={`mx-10 btn-dwonload border-${darkTheme ? 'dark text-white' : 'ligth'}`}>Dwonload C.V</button>
                </div>
                <div className={`mt-14 ${darkTheme ?  'text-white font-thin' : 'font-extralight '}`}>
                    <p className="sm:text-xl leading-7">Cuento con experiencia en una variedad de tecnologías tanto front-end como back-end. Mi objetivo principal es construir aplicaciones web que mejoren y transformen la experiencia del usuario.</p>
                    <p className="sm:text-xl leading-7 my-7">Estoy feliz de trabajar en lo que me gusta, y eso se refleja en mi trabajo. La responsabilidad y el compromiso son dos valores que me han ayudado a alcanzar mis metas y continuar evolucionando como profesional.</p>
                    <p className="sm:text-xl leading-7">¡Ten un buen dia!</p>                
                </div>
                <Experience />
                <Skills />
            </div>
        </section>
    )
}

export default Precentation
