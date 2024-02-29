import './App.css';
import MyApp from './components/MyApp/MyApp';
import { NavbarProvider } from './context/NavbarContext';
import { HashRouter as BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarProvider>
          <MyApp/>
        </NavbarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;