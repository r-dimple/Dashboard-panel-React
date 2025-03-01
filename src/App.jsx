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
