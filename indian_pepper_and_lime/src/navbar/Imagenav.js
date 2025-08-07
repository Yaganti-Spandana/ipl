

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
<<<<<<< HEAD
</Card><p className='head'>{dat.name}</p><p className='head'>Starting at {dat.price}</p>
=======
</Card><h2 className='head'>{dat.name}</h2><h2 className='head'>Starting at {dat.price}</h2>
>>>>>>> 7c1a5fe3674bcacb794d99bcac1d2393ce957dbf
    </div>
    )
}
export default Imagenav
