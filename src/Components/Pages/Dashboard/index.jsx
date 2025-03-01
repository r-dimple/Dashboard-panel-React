import {useState, useEffect} from 'react';
import { getOrders , getRevenue} from "../API";
import {Typography, Space,Card, Statistic ,Table} from "antd";
import {getOrder, getCustomer, getInventory} from "../API";
import { ShoppingCartOutlined ,ShoppingOutlined, UserOutlined ,DollarCircleOutlined} from "@ant-design/icons"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function Dashboard(){

  const [order,setOrder] = useState(0)
  const [customer,setCustomer] = useState(0)
  const [inventory, setInventory] = useState(0)
  const [revenue, setRevenue] = useState(0)

  useEffect(()=>{
      getOrder().then((res)=>{
        setOrder(res.total);
        setCustomer(res.total);
        setInventory(res.total);
        setRevenue(res.discountedTotal)
      })
  },[])

    return(
    <Space size={20} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
            <DashboardCard icon={<ShoppingCartOutlined style={{color:"green",
                                                                backgroundColor:"rgba(0,255,0,0.5)",
                                                                borderRadius:12, 
                                                                fontSize:24, 
                                                                padding:8, }}/>} 
                title={"Orders"} value={order}>
            </DashboardCard>
            <DashboardCard icon={<ShoppingOutlined style={{color:"purple",
                                                    backgroundColor:"rgba(0,255,255,0.25)",
                                                    borderRadius:12,
                                                     fontSize:24, 
                                                    padding:8, }}/>}
                 title={"Inventory"} value={inventory}>
            </DashboardCard>
            <DashboardCard icon={<UserOutlined  style={{color:"blue",
                                                    backgroundColor:"rgba(0,255,0,0.25)",
                                                    borderRadius:12,
                                                     fontSize:24, 
                                                    padding:8, }}/>} 
                    title={"Customer"} value={customer}>
            </DashboardCard>
            <DashboardCard icon={<DollarCircleOutlined style={{color:"red",
                                                    backgroundColor:"rgba(255,0,0,0.25)",
                                                    borderRadius:12,
                                                     fontSize:24, 
                                                    padding:8, }}/>}
                     title={"Revenue"} value={revenue}>
            </DashboardCard>
        </Space>
        <Space>
                <RecentOrders />
                <DashboardChart />
        </Space>
    </Space>
    )
}

function DashboardCard({icon, title, value}){
    return(
        <Card>
            <Space direction = "horizontal">
                {icon}
                <Statistic title ={title} value={value} />
            </Space>
        </Card>
    )
}

function RecentOrders(){

    const [dataSource,setDataSource] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getOrders().then(res=>{
            setDataSource(res.products.splice(0,3))
            setLoading(false)
        })
    },[])
    

    return <>
    <Typography.Text>Recent Orders</Typography.Text>
    <Table columns={[
        {
        title:'Title',
        dataIndex:'title'
        },
        {
        title:' Quantity',
        dataIndex:'quantity'
        },
        {
        title:'Price',
        dataIndex:'price'
        },
    ]}
    dataSource={dataSource}
    loading={loading}
    pagination={false}
    >
        
    </Table>
    </>
}

function DashboardChart(){

  const [revenueData,setRevenueData] = useState({
    labels:[],
    datasets:[]
  })

    useEffect(()=>{
      getRevenue().then(res=>{
        const labels = res.carts.map((cart)=>{
            return `User=${cart.userId}`
        } );
        const data = res.carts.map((cart)=>{
            return cart.discountTotal;
        });

        const dataSource = {
          labels,
          datasets: [
            {
              label: 'Revenue',
              data: data,
              backgroundColor: 'rgba(255,0,0,1)',
            },
            
          ],
        };
  
        setRevenueData(dataSource)
      })
    },[])

     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: 'Order Revenue',
          },
        },
      };

      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

      
      return(
        <Card style={{width:400, height:250}}>
         <Bar options={options} data={revenueData} />;
      </Card>
      )
    
     
}
export default Dashboard;