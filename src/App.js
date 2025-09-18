
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Archive } from './Pages/Archive/Archive';
import { Important } from './Pages/Important/Important';
import { Delete } from './Pages/Delete/Delete';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/archive' element={<Archive/>} />
        <Route path='/important' element={<Important />} />
        <Route path='/delete' element={<Delete />} />
      </Routes>
    </>
  );
}

export default App;
