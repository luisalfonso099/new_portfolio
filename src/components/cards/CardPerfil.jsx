import profileImage from '../../assets/images/img-perfil.png'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import linkedinDark from '../../assets/icons/linkedin-dark.svg'
import githubDark from '../../assets/icons/github-dark.svg'

import useTheme from '../../hooks/useTheme';
import { useEffect, useState } from 'react'


const CardPerfil = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { darkTheme } = useTheme();

    const checkScrollTop = () => {
        if (!isSticky && window.pageYOffset > 100) {
            setIsSticky(true);
        } else if (isSticky && window.pageYOffset <= 100) {
            setIsSticky(false);
        } else if (isSticky && window.pageYOffset > 800) {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => window.removeEventListener('scroll', checkScrollTop)
    }, []);


  return (
    <div className={`card-profile-container ${isSticky ? 'sticky' : ''} border-${darkTheme ? 'dark' : 'ligth'}`}>
        <div className='bg-[--color-primario] h-[300px] p-0 flex justify-center rounded-[5px] overflow-hidden'>
            <img className='max-w-prose' src={ profileImage} alt="" />
        </div>

        <div className='flex justify-center gap-5'>
            <img className={`w-9 my-5 rounded-full p-2 cursor-pointer hover:bg-[--color-primario] border-${darkTheme ? 'dark' : 'ligth'}`} src={darkTheme ? linkedin : linkedinDark} />
            <img className={`w-9 my-5 rounded-full p-2 cursor-pointer hover:bg-[--color-primario] border-${darkTheme ? 'dark' : 'ligth'}`} src={!darkTheme ? github : githubDark} />
        </div>
        <p className={darkTheme ? 'text-white' : ''}>luisalfonso099@gmail.com</p>
    </div>
  )
}

export default CardPerfil
