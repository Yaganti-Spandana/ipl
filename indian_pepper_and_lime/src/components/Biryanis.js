import { Card, CardMedia } from '@mui/material'
import data from '../data/biryani&curries.json';
import { useParams,Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../navbar/Footer';
function Biryanis(){
    var pro=[];
    const {sno}=useParams()
    var product=data.biryanis
    var pro=product.filter(item=>item.sno==sno);
    return(
        <>
        <div className='class3'>
        <Navbar></Navbar>
        <div className='coming'>
        {pro.map((ret)=>(
            <div className='coming1'>
        <Link to={`/${ret.sno}/${ret.id}`}>
        <Card>
            <CardMedia
            component="img"
image={ret.img}
alt={ret.name}></CardMedia><h3>{ret.name}</h3>
        </Card></Link>
        </div>
    ))}</div>
        <Footer></Footer></div>
        </>
    )
}
export default Biryanis