import Main from './components/main/Main';
import { ThemeProvider } from './helpers/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <Main/>
    </ThemeProvider>
  )
}

export default App
