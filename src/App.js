import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import Calculate from './pages/Calculate/Calculate';

function App() {



  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculate' element={<Calculate />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;


