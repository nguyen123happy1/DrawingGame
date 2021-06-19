import React from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import './style.css';
import 'antd/dist/antd.css';
import {Layout, Input, Typography, List, Select, Avatar, Drawer, Button, InputNumber, Row } from 'antd';
import {TrophyTwoTone, SmileTwoTone, UserOutlined, PlusCircleTwoTone} from '@ant-design/icons';

const onSearch = value => console.log(value);

const {Option} = Select
const { Search } = Input;
const {Title} = Typography;
const { Header, Content, Footer } = Layout;
var title_name= localStorage.getItem("name")? localStorage.getItem("name"): "User";
var title_id= localStorage.getItem("user_id")? localStorage.getItem("user_id"): "User_id";
const onChangeCap = (values)=>{
  this.setState({capacity:values});
}
const data = [];
 axios.get("http://localhost:5000/room/getroom").then(res=>{
  for (let i = 0; i < res.data.length; i++) {
    data.push({
      key: i,
      id: `${i}`,
      name: res.data[i].name,
      capacity: res.data[i].capacity,
      points: res.data[i].points
    });
  }
 })


// for (let i = 0; i < 100; i++) {
//     data.push({
//       key: i,
//       id: `${i}`,
//       name: `Room ${i}`,
//       capacity: i,
//       points: 100
//     });
//   }

class Rooms extends React.Component{

  state = { visible: false,capacity:''};

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false, 
    });
  };

  onSubmit = () => {

    axios.post("http://localhost:5000/room/addroom",{roomName:document.getElementById("roomName").value,capacity:document.getElementById("players").value,points: document.getElementById("points").value }).then(res=>{
          if (res.data.success==true){
          window.location.href = "/roomscreen";
          }
    })
  }
  

  logout(e){
    localStorage.removeItem("user_id");
    localStorage.removeItem("name");
    window.location.href = "/";
  }


    render(){
      return(
        <Layout>
          <div>
                <Header style = {{backgroundColor:'gray'}}>
                  <Avatar size="large" icon={<UserOutlined/>} style={{float: 'left', marginTop:'10px'}} />
                  <Title level={4} style = {{color:'blue', marginTop: '15px'}}>{title_name}<h6>{title_id}</h6></Title>
                  <button onClick={this.logout}>Log Out</button>
                </Header>

                <Content>
                  <div style = {{backgroundColor: 'green', width: '80%', position:'absolute', left: '50%', transform: 'translate(-50%)', borderRadius: '20px', textAlign:'center'}}>
                    
                    <div style = {{height: '13%'}}>

                      <div style={{backgroundColor:'white', float:'left', marginLeft: '50px', marginTop: '30px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Select style={{width:'120px'}}>
                          <Option >Room name</Option>
                          <Option >Room ID</Option>
                        </Select>
                        <Search placeholder="search..." style={{ width: '150px' }} allowClear onSearch={onSearch} />
                      </div>

                      <center><h4 style ={{fontSize: '50px', color: 'olive', textAlign:'center', width:'50%', fontFamily:'Comic Sans MS'}}><b> Rooms </b></h4> </center>
                    </div>

                    <List dataSource={data} style={{width:'100%', height:'370px', background:'#5879c7', borderRadius:'60px', overflowY:'scroll', margin:'0 auto'}} renderItem={ item => (
                      
                        <div id='listItem' style={{display:'flex', justifyContent:'center', alignItems:'center', width:'30%', marginRight:'15px', float:'left'}}>
                          <a href='/PlayingScreen' style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', margin:'0 auto'}}>
                            
                            <div style ={{fontFamily:'Comic Sans MS', display:'flex', width: '90%', height: '80px', fontSize: '30px',color:'gray'}}>
                              <div style={{fontSize:'30px', width:'50%', height:'90%'}}> {item.name} </div>
                              <div style={{fontSize:'17px', margin:'0 auto'}}>
                                RoomID: {item.id} <br/>
                                <SmileTwoTone twoToneColor='#52c41a'/> {item.capacity} <br/>
                                <TrophyTwoTone twoToneColor= 'gold' /> {item.points}
                              </div>
                            </div>

                          </a>
                        </div>
                    )} />

                    <button onClick={this.showDrawer} style ={{backgroundColor: 'yellow', width:'20%', height:'50px', display:'inline-block'}}> <PlusCircleTwoTone /> New room </button>

                    <Drawer title='Create new room' width={720} onClose={this.onClose} visible={this.state.visible} bodyStyle={{ paddingBottom: 80 }} footer={
                        <div style={{ textAlign: 'right'}}>
                          <Button onClick={this.onClose} style={{ marginRight: 8 }}> Cancel </Button>
                          <Button onClick={this.onSubmit} type="primary"> Submit </Button>
                        </div>
                    }>
                      <Row> Room Name: <Input name='roomName'id='roomName'/> </Row>
                      <Row>
                          <UserOutlined /> Players
                          {/* <Select defaultValue='5' onChange={onChangeCap}>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                            <Option value="15">15</Option>
                            <Option value="20">20</Option>
                            <Option value="30">30</Option>
                            <Option value="50">50</Option>
                          </Select> */}
                          <Input name='players'id='players'/>
                      {/* </Row>
                      <Row>  */}
                          <TrophyTwoTone twoToneColor= 'gold' /> Points 
                          {/* <Select style={{width:'50px'}} id = "pointsValue">
                            <Option>100</Option>
                            <Option>120</Option>
                            <Option>150</Option>
                            <Option>180</Option>
                            <Option>200</Option>
                          </Select> */}
                          <Input name='points'id='points'/>
                      </Row>
                    </Drawer>

                  </div>
                </Content>
          </div>
        </Layout>

    );
    }
}
export default Rooms;
