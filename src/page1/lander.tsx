import Dropdown from "../component/dropdown/dropdown";
import Footer from "../component/footer/footer";
import Header from "../component/header/header";
import Slider from "../component/slider/slider";
import About from "../component/about/about";

function Lander(){
    return(
        <div>
            <Header/>
            <Slider/>
            <Dropdown/>
            <About/>
            <Footer/>
        </div>
    );
}
export default Lander;