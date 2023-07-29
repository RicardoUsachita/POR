import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
