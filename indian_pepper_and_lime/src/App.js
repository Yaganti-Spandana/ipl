import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Biryanis from './components/Biryanis';
import Biryanisingle from './singles/Single';
import Cart from './cart/Cart';
import Login from './Login';
import Placeorder from './Placeorder';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/:sno' element={<Biryanis></Biryanis>}></Route>
      <Route path='/:sno/:id' element={<Biryanisingle></Biryanisingle>}></Route>
      <Route path='/order' element={<Placeorder></Placeorder>}></Route>
    </Routes>
    </BrowserRouter></>
  );
}

export default App;
