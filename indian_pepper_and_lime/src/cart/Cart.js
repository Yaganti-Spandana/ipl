import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar"
import Footer from "../navbar/Footer"
import { UseCart } from "./Cartcontext"
import { Card,CardMedia } from "@mui/material"
function Cart(){
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = UseCart();
    const handleIncrement = (id, currentQty) => {
    updateQuantity(id, currentQty + 1);
  };

  const handleDecrement = (id, currentQty) => {
    if (currentQty > 1) {
      updateQuantity(id, currentQty - 1);
    }
  };
  const navigate=useNavigate()
    return(
        <>
        <Navbar></Navbar>
        <div className="maina1">
        <div className="about"><h1 className='text'>ADDED ITEMS</h1></div>
          <div className="maina2">
            <div className="cart-items-titles">
              <p className="des">ITEM</p>
              <p className="des">PRICE</p>
              <p className="des">QUANTITY</p>
              <p className="des">TOTAL</p>
              <p className="des">BUY NOW</p>
              <p className="des">REMOVE</p>
            </div>
            <hr></hr><hr></hr>
        {cartItems.length === 0 ? (
        <p className="cart-head">Your cart is empty.</p>
      ) : (
        
        cartItems.map((item)=>(
            <>
            <div className="cart-items-titles cart-items-item">
              <img src={item.img}></img>
<p className="des">{item.name}- ${item.price }</p>
<div>
<button className="des2" onClick={() => handleDecrement(item.id, item.quantity)}>-</button>
<span>{item.quantity}</span>
<button className="des1" onClick={() => handleIncrement(item.id, item.quantity)}>+</button></div>
<p className="des">Total: ${(item.price* item.quantity)}</p>
<button className="des" onClick={()=>removeFromCart(item)}>Buy Now</button>
<button className="des" onClick={()=>removeFromCart(item)}>Remove</button>
</div><hr></hr>
</>
        )))}
        </div>
        <hr></hr>
        <div className="total-amount">
          <form className="cart-form">
          <p className="cart1">If you have promo code enter here!</p>
          <input type="text" placeholder="Enter Code" className="cart-input"></input>
          <button>submit</button></form>
          <div>
            <p className="cart2">Cart Totals</p>
            <hr className="hr1"></hr>
          <div className="amount-grid">
            <p className="cart-par">Sub Total</p>
            <p className="cart-par">${(totalPrice).toFixed(2)}</p></div><hr className="hr2"></hr>
            <div className="amount-grid">
            <p className="cart-par">Discount</p>
            <p className="cart-par">${totalPrice===0?0:2}</p></div><hr className="hr2"></hr>
            <div className="amount-grid">
            <p className="cart-par">Total</p>
            <p className="cart-par">${totalPrice===0?0:(totalPrice-2).toFixed(2)}</p>
          </div>
          <button className="checkout-button" onClick={()=>navigate('/order')}>Proceed to checkout</button>
          </div>
        </div>
      </div>
        <Footer></Footer>
        </>
    )
}
export default Cart
