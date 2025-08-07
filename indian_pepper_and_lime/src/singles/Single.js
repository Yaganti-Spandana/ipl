import { Card, CardMedia } from '@mui/material'
import data from '../data/biryani&curries.json';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../navbar/Footer';
import { UseCart}from '../cart/Cartcontext';
function Biryanisingle(){
    const {addToCart}=UseCart()
    var pros=[];
    const {id}=useParams()
    var products=data.biryanis
    var pros=products.filter(item=>item.id==id);
    return(
        <>
        <div className='di'>
        <Navbar></Navbar>
        <div className='coming2'>
        {pros.map((retur)=>(
            <>
            <div className='coming1'>
       <Card>
            <CardMedia
            component="video"
image={retur.vid}
alt={retur.name}
autoPlay
muted
controls
className='vido'
></CardMedia><p className='head'>{retur.name}</p><p className='head'>Price:${retur.price}</p>
        </Card>
        </div><button onClick={()=>addToCart(retur)}><p>Add To Cart</p></button></>
    ))}</div>
        <Footer></Footer></div>
        </>
    )
}
export default Biryanisingle