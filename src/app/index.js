import { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main';
import Country from './country';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Main />} />
        <Route path='/' element={<Main />}/>
        <Route path='country/*' element={<Country />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default memo(App);
