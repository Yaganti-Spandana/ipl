import { Card, CardMedia } from '@mui/material'
import data from '../data/biryani&curries.json';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../navbar/Footer';
import { UseCart } from '../cart/Cartcontext';
function Biryanisingle(){
    const {addToCart}=UseCart()
    var pros=[];
    const {id}=useParams()
    var products=data.biryanis
    var pros=products.filter(item=>item.id==id);
    return(
        <>
        <Navbar></Navbar>
        <div className='coming2'>
        {pros.map((retur)=>(
            <>
            <div className='coming1'>
       <Card>
            <CardMedia
            component="img"
image={retur.img}
alt={retur.name}></CardMedia><h3>{retur.name}</h3>
        </Card><h3>{retur.price}</h3>
        </div><button onClick={()=>addToCart(retur)}>Add To Cart</button></>
    ))}</div>
        <Footer></Footer>
        </>
    )
}
export default Biryanisingle