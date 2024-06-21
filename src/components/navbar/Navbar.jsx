import { useEffect } from 'react';
import iconDev from '../../assets/icons/dev-icon.svg';
import iconDevClaro from '../../assets/icons/dev-icon-claro.svg';
import useTheme from '../../hooks/useTheme';

const Navbar = () => {
  const { darkTheme } = useTheme();

  const navItems = [
    {
      name: 'HOME',
      link: '#home',
    },
    {
      name: 'ABOUT',
      link: '#about',
    },
    // {
    //   name: 'SERVICES',
    //   link: '#services',
    // },
    {
      name: 'SKILLS',
      link: '#skills',
    },
    {
      name: 'PORTFOLIO',
      link: '#portfolio',
    },
    {
      name: 'CONTACT',
      link: '#contact',
    },
  ];

  const handleNavClick = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navContainer = document.querySelector('.nav-container');
      if (window.pageYOffset > 5) {
        navContainer.style.backdropFilter = 'blur(30px)';
        navContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.01)';
        navContainer.style.borderBottom = '1px solid rgba(255, 255, 255, 0.09)';
      } else {
        navContainer.style.backdropFilter = 'none';
        navContainer.style.backgroundColor = 'transparent';
        navContainer.style.borderBottom = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`nav-container`}>
      <div className="content-nav">
        <div className="name-nav">
          <img src={darkTheme ? iconDev : iconDevClaro} alt="Icono de desarrollador" />
        </div>
        <input type="checkbox" id="btn-menu" />
        <label htmlFor="btn-menu" className="btn-menu-content">
          <div className="uno"></div>
          <div className="dos"></div>
          <div className="tres"></div>
        </label>
        <nav className={`menu ${darkTheme && 'fondo-custom-menu-dark'}`}>
          <ul className="list-nav">
            {navItems.map(route => (
              <li key={route.link}>
                <a href={route.link} className={darkTheme && 'text-white'} onClick={(e) => handleNavClick(e, route.link)}>
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
