import useTheme from "../../hooks/useTheme";
import dataServices from "../../data/dataServices.json"

function Services() {
  const { darkTheme } = useTheme();



  return (
    <section className={"services-container " + (darkTheme ? 'text-white' : '')} id="services">
      <h2>SERVICES</h2>
      <div className="border-bottom-ligth"></div>

      <div className="content-card-services">
        {
          dataServices.map(service => (
              <div className={`card-services border-${darkTheme ? 'dark text-white' : 'ligth'}` } key={service.title.trim()}>
                  <img src={`../assets/${service.image[darkTheme ? 'dark' : 'ligth']}.png`} alt="" />
                  <h3>{service.title}</h3>
                  <p className={darkTheme ? 'font-thin' : 'font-extralight'}>{service.description}</p>
              </div>
          ))
        }

      </div>

    </section>
  )
}

export default Services
