import {MailOutlined, BellFilled} from "@ant-design/icons";
import {Badge,Image,Typography,Space} from "antd";

import {useEffect, useState} from 'react';

function AppHeader(){
    
    return <div className="AppHeader">

        
        <Image src="logo.jpg" width={90}></Image>
        <Typography.Title>Abhinav's Dashboard</Typography.Title>
        <Space>
            <Badge count={20} dot>
                <MailOutlined style={{fontSize:24}}/>
            </Badge>
            <Badge count={20}>
                <BellFilled style={{fontSize:24}} />
            </Badge>
        </Space>
        </div>
}

export default AppHeader;