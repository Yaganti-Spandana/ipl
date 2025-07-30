

import {Card, CardHeader, CardMedia} from '@mui/material'
function Imagenav({dat}){
    return(
        <div className='car'>
        <Card>
            <div>
            <CardMedia
component="img"
image={dat.img}
alt={dat.name}
className='cardimg'
/></div>
</Card><h4 className='head'>{dat.name}</h4><h4 className='head'>Starting at {dat.price}</h4>
    </div>
    )
}
export default Imagenav