import './Main/Main.css';
import './Header/Header.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { LoadedPages } from './Component/LoadedPages';

function App() {
  return (
    <Routes>
      <Route  path="*" element={<Home/>} />
      <Route path='/:id' element={<LoadedPages/>} />
    </Routes>
  );
}

export default App;
