import Navbar from "../Navbar"
import Footer from "../navbar/Footer"
import { UseCart } from "./Cartcontext"
import { Card,CardMedia } from "@mui/material"
function Cart(){
    const {cartItems,addToCart,removeFromCart}=UseCart()
    return(
        <>
        <Navbar></Navbar>
        <div className="about"><h1 className='text'>ADDED ITEMS</h1></div>
        <div className='maina1'>
        {cartItems.map((item)=>(
            <>
            <Card className="card1" >
     <CardMedia
component="img"
image={item.img}
alt={item.des}
/>
<div className="cur">
<h3 className="des">{item.name}</h3>
<h3 className="des">price:{item.price}</h3>
<button className='button1' onClick={()=>removeFromCart(item)}>Buy Now</button>
<button className='button1' onClick={()=>removeFromCart(item)}>Remove</button>
</div>
</Card><br></br></>
        ))}
        </div>
        <Footer></Footer>
        </>
    )
}
export default Cart