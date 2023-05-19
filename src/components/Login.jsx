import { useState } from "react";
import {Row, Col, Form, Button}  from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginImg from '../assets/2.png'
export default function Login({setUser}){
    const[email,setEmail]=useState('Pravalika123@gmail.com')
    const navigate=useNavigate();
    const handle=()=>{
        localStorage.setItem('userEmail',email)
        let e=email.length
        setUser(email)
        if(e<=0){
            alert('please enter email and password')
            navigate('/login')
        }
        else{
        navigate('/products')
        }
     }
     
    
    

    return(
    
        <div style={{backgroundColor:'#216ad9'}}>
            <Row style={{padding:75}}>
                <Col style={{padding:100}}>
                <div>
                    <h1 style={{color:'white'}}>InstaBuy!</h1>
                    <h3 style={{color:'white'}}>One Place for all products</h3>
                    <Form>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Form.Group style={{width:'48%'}} className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" value={email}  onChange={(e)=>setEmail(e.currentTarget.value)} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group style={{width:'48%'}} className="mb-3" controlId="formBasicPassword">
                        <Form.Control value='12345' type="password" placeholder="Password" />
                    </Form.Group>
                    </div>
                    <Button onClick={() =>{
                        handle()
                    }} style={{width:'99%',marginBottom:26, backgroundColor:'#216ad9',borderWidth:1,borderColor:'white',color:'white'}} variant="outline-primary" type="submit">
                    Start Shopping
                    </Button>
                    <div style={{color:'white'}}>
                        Join the club, <a style={{color:'white'}} onClick={()=>navigate("/signup")}>Click here!</a>
                    </div>
                    
                    </Form>
                    
                </div>
                </Col>
                <Col>
                <img src={LoginImg} style={{height:'80vh'}}/>
                </Col>
            </Row>
        </div>
    )
}