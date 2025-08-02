

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
</Card><h2 className='head'>{dat.name}</h2><h2 className='head'>Starting at {dat.price}</h2>
    </div>
    )
}
export default Imagenav
