import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
              
    </div>
  )
}

export default App
