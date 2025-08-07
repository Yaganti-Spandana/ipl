import { UseCart, useCart} from "./cart/Cartcontext";
import Navbar from "./Navbar";
import Footer from "./navbar/Footer";


function placeorder(){
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = UseCart()
    return(
        <>
        <Navbar></Navbar>
        <form className="place-order">
            <div className="place-order-left">
                <p className="title"> Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name"></input>
                    <input type="text" placeholder="Second Name"></input>
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Email Address"></input>
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Street"></input></div>
                <div className="multi-fields">
                    <input type="text" placeholder="City"></input>
                    <input type="text" placeholder="State"></input>
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zipcode"></input>
                    <input type="text" placeholder="Country"></input>
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Phone"></input>
                </div>
            </div>
            <div className="place-order-right">
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
          <button className="checkout-button" >Proceed to Payment</button>
            </div>
        </form>
        <Footer></Footer>
        </>
    )
}
export default placeorder