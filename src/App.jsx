import './App.css';
import MyApp from './components/MyApp/MyApp';
import { NavbarProvider } from './context/NavbarContext';

function App() {
  return (
    <NavbarProvider>
      <MyApp/>
    </NavbarProvider>
  );
}

export default App;