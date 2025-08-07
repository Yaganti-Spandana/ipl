import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <div className="navbar">
        <ul className="list">
            <li className="logo_img"><img src="../logo.jpg"></img></li>
            <li className="list-eles"><input type="text" placeholder='search'></input></li>
            <li className="but"><button>SEARCH</button></li>
            <Link to='/' className="list-ele"><li>HOME</li></Link>
            <Link to='/cart' className="list-ele"><li>CART</li></Link>
            <Link to='/login' className="list-ele"><li>LOGIN</li></Link>
        </ul>
        </div>
    )
}
export default Navbar;