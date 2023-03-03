import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import QR from './pages/QR';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<QR/>} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
