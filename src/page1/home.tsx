import Content from "../component/content/content";
import Dropdown from "../component/dropdown/dropdown";
// import Footer from "../component/footer/footer";
// import Header from "../component/header/header";
import Slider from "../component/slider/slider";

function Home(){
    return(
        <div>
            {/* <Header/> */}
            <Slider/>
            <Dropdown/>
            <Content/>
            {/* <Footer/> */}
        </div>
    );
}
export default Home;