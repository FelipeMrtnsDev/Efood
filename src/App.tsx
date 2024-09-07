import { GlobalStyle } from './styles/index'
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
        <Rotas />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
