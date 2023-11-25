import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import { Menu } from './Component/Menu';

function App() {
  return (
    <div className="wrapper">
      <Menu />
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
