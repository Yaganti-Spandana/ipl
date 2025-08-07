

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
</Card><p className='head'>{dat.name}</p><p className='head'>Starting at {dat.price}</p>
    </div>
    )
}
export default Imagenav