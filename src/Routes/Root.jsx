import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const Root = () => {
    return (
        <div className="  p-5  ">
            <div className="container mx-auto">
            <Header></Header>
           <div className="p-5">
           <Outlet></Outlet>
           </div>
            </div>
           
            
        </div>
    );
};

export default Root;