import moon from '../../assets/images/moon.png'
import sol from '../../assets/images/sol.png'
import  useTheme  from '../../hooks/useTheme';



const Tools = () => {
    const { darkTheme, toggleTheme } = useTheme();
    const changeTheme = () => {
        const bg = document.querySelector('#bg-cus');
        bg.classList.remove();
        bg.className = darkTheme ? 'bg-custom-ligth' : 'bg-custom-dark';
        toggleTheme(!darkTheme);
    }

    return (
        <button className="tool-container" onClick={changeTheme}>
            <img src={darkTheme ? sol :moon} className='icon-ajustes' />
        </button>
    )
}

export default Tools
