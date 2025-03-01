# Admin Panel

## About the application 

An admin panel template made with react and vite. It's features are:

- Dashboard
- Inventory 
- Order
- Customer

This template can be used to create well furtioning admin panel.

## Directory Structure

- Components
  - AppHeader
    - index.jsx
  - AppFooter
    - index.jsx


## External packages

- `npm install react-router-dom`
- npm i install 

## API used:

- https://dummyjson.com/carts/1
- https://dummyjson.com/carts
- https://dummyjson.com/products
- https://dummyjson.com/users
- https://dummyjson.com/comments

## The Project 

### App.jsx

This is the main file where all the componemts are called.

```jsx
import { useState} from 'react'
import {Space} from "antd";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";

function App() {


  return (
    <>
      
    <div className="App">
      <AppHeader/>
      <Space className="sidemenuandpagecontent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter/>
    </div>

    </>
  )
}

export default App

```

### Components

#### App Header

```jsx
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
```
