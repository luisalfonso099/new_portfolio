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
                    Hola, soy <span className="text-[--color-primario] ">Luis Laguado</span>,<br className=""/>
                    Front-end Developer.
                </h1>
                <div className={`flex justify-center sm:justify-start items-center gap-4 mt-20 flex-wrap ${darkTheme ?  'text-white font-thin' : 'font-extralight '}`} >
                    <span className="text-4xl sm:text-6xl font-semibold">+4</span>
                    <p className="text-sm sm:text-xl">Años <br />de experiencia</p>
                    {/* <button className={`mx-10 btn-dwonload border-${darkTheme ? 'dark text-white' : 'ligth'}`}>Dwonload C.V</button> */}
                </div>
                <div className={`mt-14 ${darkTheme ?  'text-white font-thin' : 'font-extralight '}`}>
                    <p className="sm:text-xl leading-7">Soy desarrollador front-end con experiencia en una variedad de tecnologías modernas. Me especializo en crear aplicaciones web de alta calidad, con enfoque pixel perfect y completamente adaptables a cualquier dispositivo.</p>
                    <p className="sm:text-xl leading-7 my-7">Me siento afortunado de trabajar en lo que me apasiona, y eso se refleja en la calidad de mi trabajo. La responsabilidad y el compromiso son pilares fundamentales en mi desarrollo profesional, y han sido clave para alcanzar mis metas y seguir creciendo continuamente.</p>
                </div>
                <Experience />
                <Skills />
            </div>
        </section>
    )
}

export default Precentation
