import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import GrainOverlay from "../../components/GrainOverlay";
import SmoothScroll from "../../components/SmoothScroll";
import CustomCursor from "../../components/CustomCursor";

const Main = () => {
    return (
        <div className="scroll-smooth">
            <SmoothScroll />
            <CustomCursor />
            <GrainOverlay />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
