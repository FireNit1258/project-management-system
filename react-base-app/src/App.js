import './App.css';
import theme from './components/theme';
import { ThemeProvider } from '@emotion/react';

function App() {

  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>
  );
}

export default App;
