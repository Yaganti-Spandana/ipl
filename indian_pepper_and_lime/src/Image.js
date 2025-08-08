import {Card, CardHeader, CardMedia} from '@mui/material'
import { Link } from 'react-router-dom'
function Image({content}){
    return(
        <>
        <Link to={`/${content.sno}`}>
        <Card className='class31'>
            <CardMedia
component="img"
image={content.img}
alt={content.name}
height='50%'
/><p className='head2'>{content.name}</p>
</Card></Link>
    </>
    )
}
export default Image