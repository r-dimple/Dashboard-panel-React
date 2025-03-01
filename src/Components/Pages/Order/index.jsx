import {Typography, Space, Table, Avatar, Rate} from "antd";
import {getOrder} from "../API";
import {useState, useEffect} from 'react';

function Order(){
    const [loading,setLoading] =useState(false)
    const [dataSource,setDataSource] = useState([])

    useEffect(()=>{
        setLoading(true);
        getOrder().then((res)=>{
        setDataSource(res.products);
        setLoading(false);
        });
    },[]);

    return(
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Order</Typography.Title>
            <Table loading={loading} columns={[
                {
                title:'Title',
                dataIndex:'title'
                },
                {
                title:'Price',
                 dataIndex:'price',
                 render:(value)=>
                    <span>${value}</span>
                },
                {
                title:'DiscountPercentage',
                dataIndex:'discountPercentage',
                render:(value)=><span>${value}</span>
                },
                {
                title:'Quantity',
                dataIndex:'quantity',
                 },
                 {
                    title:'Total',
                    dataIndex:'total'
                    },
        ]}
        dataSource={dataSource}
        pagination={{
            pageSize:5,
        }}></Table>
        </Space>
    )
}

export default Order;