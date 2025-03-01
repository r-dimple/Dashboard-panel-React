import {Routes,Route} from "react-router-dom";
import Dashboard from "../Pages/Dashboard"
import Inventory from "../Pages/Inventory";
import Order from "../Pages/Order";
import Customer from "../Pages/Customer";



function AppRoutes(){
    return (
        
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/inventory" element={<Inventory/>}></Route>
                <Route path="/customer" element={<Customer />}></Route>
                <Route path="/order" element={<Order/>}></Route>
            </Routes>
    )
}

export default AppRoutes;
