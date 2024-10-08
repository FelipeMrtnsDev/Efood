import { GlobalStyle } from './styles/index'
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <GlobalStyle />
          <Rotas />
          <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
