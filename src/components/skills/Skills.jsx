import dataFront from '../../data/dataFront.json'
import dataBackend from '../../data/dataBackend.json'
import dataVersions from '../../data/dataVersions.json'
import useTheme from '../../hooks/useTheme';

const Skills = () => {

    const { darkTheme } = useTheme();

    return (
        <section className={`skills-container ${darkTheme && ' text-white'}`} id='skills'>
            <h3>SKILLS</h3>
            <div className="border-bottom-ligth"></div>

            <p>Front-End</p>

            <div className='content-card-skill'>
                {dataFront.map(img => (
                    <div className={`card-skill  border-${darkTheme ? 'dark' : 'ligth'}`} key={img.name}>
                        <img src={`../assets/${img.image}`} alt="" />
                        <p>{img.name}</p>
                    </div>
                ))
                }
            </div>
            <p>Back-End</p>

            <div className='content-card-skill'>
                {dataBackend.map(img => (
                    <div className={`card-skill  border-${darkTheme ? 'dark' : 'ligth'}`} key={img.name}>
                        <img src={`../assets/${img.image}`} alt="" />
                        <p>{img.name}</p>
                    </div>
                ))
                }
            </div>
            <p>Control de versiones</p>

            <div className='content-card-skill'>
                {dataVersions.map(img => (
                    <div className={`card-skill  border-${darkTheme ? 'dark' : 'ligth'}`} key={img.name}>
                        <img src={`../assets/${img.image}`} alt="" />
                        <p>{img.name}</p>
                    </div>
                ))
                }
            </div>
        </section>
    )
}

export default Skills
