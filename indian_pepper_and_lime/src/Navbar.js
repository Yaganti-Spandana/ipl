import { Link } from 'react-router-dom';
import { UseCart } from './cart/Cartcontext';
function Navbar(){
    const {count}=UseCart();
    return(
        <div className="navbar">
        <ul className="list">
            <li className="logo_img"><img src="../logo.jpg"></img></li>
            <li className="list-eles"><input type="text" placeholder='search'></input></li>
            <button className="but">SEARCH</button>
            <Link to='/' className="list-ele"><li>HOME</li></Link>
            <Link to='/cart' className="list-ele"><li>CART</li></Link><h6>{count}</h6>
            <li className="list-ele">LOGIN</li>
        </ul>
        </div>
    )
}
export default Navbar;