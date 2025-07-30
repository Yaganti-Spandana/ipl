import Corousal from "./corousal";
import Navbar from "./Navbar";
import data2 from './data/biryani&curries.json';
import Footer from "./navbar/Footer";
import data1 from './data/menu.json';
import Corousalnav from "./navbar/Corousalnav";
function Home(){
    return(
        <>
        <Navbar></Navbar>
        <Corousalnav dat={data1.menu}></Corousalnav>
        <Corousal data={data2.comp} title="Available Items"></Corousal>
        <Footer></Footer>
        </>
    )
}
export default Home;