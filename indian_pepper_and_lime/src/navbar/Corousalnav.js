import Imagenav from "./Imagenav"
function Corousalnav({dat}){
    return(
        <>
        <div className='nav'>
        {dat.map((dats)=>(
            <Imagenav dat={dats}></Imagenav>
        ))}</div>
        </>
    )
}
export default Corousalnav