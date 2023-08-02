import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import EntradasComponent from './Components/EntradasComponent';
import SalidaComponent from './Components/SalidaComponent';
import ReporteComponent from './Components/ReporteComponent';
import {QueryClient, QueryClientProvider} from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/entrada" element={<EntradasComponent />} />
          <Route path="/salida" element={<SalidaComponent />} />
          <Route path="/reporte" element={<ReporteComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
    </QueryClientProvider>
  );
}

export default App;
