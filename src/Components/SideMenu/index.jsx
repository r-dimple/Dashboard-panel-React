import {Menu} from "antd";
import {useNavigate} from "react-router-dom";
import {useState,useEffect} from 'react';
import {AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";

function SideMenu(){
    const navigate = useNavigate();
    const [selectedKeys,setSelectedKeys] = useState('/')

    useEffect(()=>{
        const pathName=location.pathname
        setSelectedKeys(pathName)
    },[location.pathName])

    return <div className="SideMenu">
            <Menu className="sidemenuvertical"
                mode="vertical"
                onClick={(items)=>{
                    navigate(items.key)
                }}
                selectedKeys={[selectedKeys]}
                items={[
                    {
                        label:"Dashboard",
                        icon: <AppstoreOutlined />,
                        key:"/"
                    },
                    {
                        label:"Inventory",
                        icon:<ShopOutlined />,
                        key:"/inventory"
                    },
                    {
                        label:"Orders",
                        icon: <ShoppingCartOutlined />,
                        key:"/order"
                    },
                    {
                        label:"Customers",
                        icon: <UserOutlined />,
                        key:"/customer"
                    }
                ]} 
            >

            </Menu>
        </div>
}

export default SideMenu;
