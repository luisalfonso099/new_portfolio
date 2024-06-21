import useTheme from "../../hooks/useTheme";
import dataProjects from '../../data/projects.json'
import flechaDark from '../../assets/images/derecha-dark.png'
import flecha from '../../assets/images/derecha-ligth.png'
const Projects = () => {
  const { darkTheme } = useTheme();

  return (
    <section className={"projects-container rounded-md " + (darkTheme ? 'text-white' : '')} id="portfolio">
      <h2 className="text-3xl">PORTFOLIO</h2>
      <div className="border-bottom-ligth"></div>
      <div className="lg:flex gap-5 text-center mt-12">
        {
          dataProjects.map(project => (
            <a key={project.image} className="cursor-pointer md:w-1/2 " href={project.url} target="_blank" rel="noreferrer">
              <div className="card-project" >
                <div className="rounded-lg md:max-h-72 sm:h-52 h-auto md:min-h-52 flex justify-center p-5 w-full" style={{ background: project.color }}>
                  <img className="sm:w-8/12 w-full" src={`../assets/${project.image}`} alt="" />
                </div>
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
