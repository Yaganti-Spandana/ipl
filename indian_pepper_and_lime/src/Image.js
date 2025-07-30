import {Card, CardHeader, CardMedia} from '@mui/material'
import { Link } from 'react-router-dom'
function Image({content}){
    return(
        <>
        <Link to={`/${content.sno}`}>
        <Card>
            <CardMedia
component="img"
image={content.img}
alt={content.name}
height='70%'
/><h2 className='head2'>{content.name}</h2>
</Card></Link>
    </>
    )
}
export default Image