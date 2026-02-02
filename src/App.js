
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Archive } from './Pages/Archive/Archive';
import { Important } from './Pages/Important/Important';
import { Delete } from './Pages/Delete/Delete';
import { useState } from 'react';

function App() {
  const [open , setOpen]= useState(false) //for preventing undefine error while click inside archive or delete or imp without card also
  return (
    <>
      <Routes>
        <Route path='/' element={<Home open={open} setOpen={setOpen} />} />
        <Route path='/archive' element={<Archive open={open} setOpen={setOpen} />} />
        <Route path='/important' element={<Important open={open} setOpen={setOpen} />} />
        <Route path='/delete' element={<Delete open={open} setOpen={setOpen} />} />
      </Routes>
    </>
  );
}

export default App;
