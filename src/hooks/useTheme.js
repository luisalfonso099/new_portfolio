import { useContext } from 'react';
import { ThemeContext } from '../helpers/ThemeContext'

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;