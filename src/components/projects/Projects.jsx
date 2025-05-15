import useTheme from "../../hooks/useTheme";
import dataProjects from '../../data/projects.json'
import flechaDark from '../../assets/images/derecha-dark.png'
import flecha from '../../assets/images/derecha-ligth.png'
import './projects.css'
const Projects = () => {
  const { darkTheme } = useTheme();

  return (
    <section className={"projects-container rounded-md " + (darkTheme ? 'text-white' : '')} id="portfolio">
      <h2 className="text-3xl">PORTFOLIO</h2>
      <p>Aquí puedes explorar algunos de los proyectos en los que he trabajado desde su concepción hasta su finalización, aplicando las mejores prácticas de desarrollo y asegurando diseños completamente adaptables tanto para dispositivos móviles como de escritorio.</p>
      <div className="border-bottom-ligth"></div>
      <div className="lg:flex gap-5 text-center mt-12">
        {
          dataProjects.map(project => (
            <a key={project.image} className="cursor-pointer md:w-1/2 " href={project.url} target="_blank" rel="noreferrer">
              <div className="card-project rounded-lg md:max-h-72 h-auto md:min-h-52 flex justify-center p-5 w-full relative" style={{ background: project.color }}>
                <img className="w-full h-40" src={`../assets/${project.image}`} alt="" />
                <p className="text-left text-xs p-4 absolute top-0 h-full opacity-0 transition-all ease-in hover:opacity-95 bg-black/90 rounded-lg">{project.description}</p>
              </div>
              <div className="link-card-project">
                <h3 className={darkTheme ? 'text-white' : ''}>{project.name}</h3>
                <img className="arrow" src={darkTheme ? flecha : flechaDark} alt="" />
              </div>
            </a>
          ))
        }
      </div>
    </section>
  )
}

export default Projects
