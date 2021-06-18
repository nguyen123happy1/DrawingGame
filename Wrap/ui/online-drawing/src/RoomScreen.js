import React from 'react';
import Rooms from './components/rooms/Rooms';
import {Layout, Input, List,Breadcrumb, Menu } from 'antd';
// import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

function RoomScreen(){
    return(
        <Rooms></Rooms>
    );
}
export default RoomScreen;