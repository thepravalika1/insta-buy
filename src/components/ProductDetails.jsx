import axios from "axios";
import React, { useEffect, useState } from "react"
import { Row, Col, Button,Card } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"

export default function ProductDetails({cartItems,handleAddToCart}){
    const location=useLocation()
    const {title,images,description,price,category,id} =location.state;
    const navigate =useNavigate()
    
    const [otherProducts,setOtherProducts]=useState([])
    useEffect(()=>{
        async function getData(){
            const response=await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=20&offset=0`)
            setOtherProducts(response.data);
            console.log(response.data);

        }    
        getData();
    },[])
    
    
    return(
        <div style={{padding:30}}>
            <Row>
                <Col lg={2}>
                    <div>
                        {images.map((image,index)=>{
                            return (
                                <img key={index} src={image} width={120} style={{marginBottom:20,borderRadius:8}}/>
                            )
                        })}
                    </div>
                </Col>
                <Col> 
                <div>
                    <img src={images[0]} style={{width:300,marginBottom:20, borderRadius:8}}/>
                    <h3>{title}</h3>
                    <h3 style={{color:"#216ad9"}}>${price}</h3>
                    <div>{description}</div>
                    <Button style={{marginTop:30}} onClick={()=>{
                        if(id in cartItems){
                            const currrentItem=cartItems[id];
                            handleAddToCart({[id]: {title,price,quantity:currrentItem.quantity + 1}})
                        }else{
                            handleAddToCart({[id]:{title,price,quantity:1}})
                        }
                       // navigate('/cart')
                    }}>Add to cart</Button>
                    
                </div>
                </Col>
                <Col>
                <h2>Other Products</h2>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                    
                    {otherProducts.map((product)=>{
                        if(product.id==id) return
                        return(
                            <Card key={product.id} style={{width:'8rem',border:'none',margin:10}}>
                                <Card.Img  src={product.images[0]} />
                                <Card.Title>{product.title.split(' ')[0]}</Card.Title>
                                <Card.Text style={{color:'#216ad9'}}>${product.price}</Card.Text>
                                <Button onClick={()=>navigate(`/product/${product.id}`,{state:product})} style={{width:120}}>View Item</Button>
                            </Card>
                        )
                    })
                    }
                
                </div>
                </Col>
                
                
            </Row>
        </div>
    )
}