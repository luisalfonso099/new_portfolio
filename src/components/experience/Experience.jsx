import { useState } from 'react';
// import flechaDark from '../../assets/images/derecha-dark.png';
// import flecha from '../../assets/images/derecha-ligth.png';
import WT from '../../assets/images/wunderman_thompson.jpg';
import alkemy from '../../assets/images/alkemy.jpg';
import Acamica from '../../assets/images/Acamica.jpg';

import useTheme from '../../hooks/useTheme';
const data = [
    {
        date: '2022 - Now',
        name: 'Wunderman Thompson',
        image: WT,
        description: {
            state: false,
            rol: 'Desarrollador web full stack',
            text: `  Responsable de la creacion de sitios web dinamicos, a peticion de clientes. 
                   usando el stack tecnologico de la compañia.`,
        },
    },
    {
        date: '2021 - 2022',
        name: 'alkemy',
        image: alkemy,
        description: {
            state: false,
            rol: '',
            text: 'Segundaaa',
        },
    },
    {
        date: '2021 - 2022',
        name: 'Acamica',
        image: Acamica,
        description: {
            state: false,
            rol: '',
            text: 'Terceraaa',
        },
    },
];


const Experience = () => {

    const { darkTheme } = useTheme();
    const [experienceData] = useState(data);

    // const showDesc = (index) => {
    //     setExperienceData((prevData) => {
    //         return prevData.map((item, i) => {
    //             if (i === index) {
    //                 return {
    //                     ...item,
    //                     description: {
    //                         ...item.description,
    //                         state: !item.description.state,
    //                     },
    //                 };
    //             }
    //             return item;
    //         });
    //     });
    // };

    return (
        <div className={'' + (darkTheme && ' text-white')} id="about">
            <h3>Experiencia</h3>
            <ul>
                {experienceData.map((item) => (
                    <li key={item.name} className={`list-none min-h-20 transition-all ${darkTheme ? ' border-bottom-ligth ' : ' border-bottom-dark'}`}>
                        <div className="flex justify-between mt-7">
                            <div className="flex items-center w-full">
                                <span className={`rounded-full p-2 text-center text-xs w-1/2 max-w-32 md:text-base border-${darkTheme ? 'dark font-thin' : 'ligth font-extralight'}`}>{item.date}</span>
                                <p className="text-xs w-1/2 md:w-full uppercase md:text-base ml-2 md:ml-12">{item.name}</p>
                            </div>
                            <div className="flex items-center">
                                <img className="empresa" src={item.image} alt="" />
                                {/* <button className={`bg-transparent border-0 transition-all cursor-pointer ${item.description.state && 'rotate-90'}`} onClick={() => showDesc(index)}>
                                    <img className="w-7 md:w-14" src={darkTheme ? flecha : flechaDark} alt="" />
                                </button> */}
                            </div>
                        </div>
                        {/* {item.description.state && (
                            <div className={`p-4 rounded-md mt-5 border-${darkTheme ? 'dark font-thin' : 'ligth font-extralight'}`}>
                                <h4>{item.description.rol}</h4>
                                <p className={`text-sm md:text-lg md:leading-7 my-7 font-extralight`}>{item.description.text}</p>
                            </div>
                        )} */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;

