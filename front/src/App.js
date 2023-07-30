import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import EntradasComponent from './Components/EntradasComponent';
import SalidaComponent from './Components/SalidaComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/entrada" element={<EntradasComponent />} />
          <Route path="/salida" element={<SalidaComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
