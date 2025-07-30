import Image from "./Image"
function Corousal({data,title}){

    return(
        <>
        <h1 className="head1">{title}</h1>
        <div className="cor">
        {data.map((da)=>(
            <div className="corou">
            <Image content={da}></Image></div>
        ))}</div>
        </>
    )
}
export default Corousal