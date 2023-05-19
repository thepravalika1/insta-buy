import  Carousel  from "react-bootstrap/Carousel"
import  Row  from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col"
import  CarouselOneImg  from "../assets/1.png"
import  CarouselTwoImg  from "../assets/4.png"
import  CarouselThreeImg  from "../assets/5.png"
import { Button } from "react-bootstrap"
import CompanyOne from "../assets/10.png"
import CompanyTwo from '../assets/11.png'
import CompanyThree from '../assets/12.png'
import CompanyFour from '../assets/13.png'
import CompanyFive from '../assets/14.png'
import CompanySix from '../assets/15.png'
import { useNavigate } from "react-router-dom"

export default function Home({user}){
    const navigate=useNavigate();
    const handleCTAClick=()=>{
        const userEmail=localStorage.getItem('userEmail')
        if(userEmail){
            navigate('/products')
            
            
        }
        else{
            alert('please login')
            navigate('/login')
        }
    }
    return(
        <div className="home-container">
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col style={{padding:100}}>
                        <div>
                            <h1 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h1>
                            <h1 style={{color:'#216ad9',fontWeight:700}}><i>STYLE</i></h1>
                            <h3 style={{marginBottom:20}}>Shop with latest trendy Products</h3>
                            <div>
                                <Button style={{width:250}} onClick={handleCTAClick}>Browse Products</Button>
                            </div>
                            <div style={{marginBottom:20}}>
                                <h4>Products Available From:</h4>
                                <img src={CompanyOne} style={{height:50}} />
                                <img src={CompanyTwo} style={{height:50}} />
                                <img src={CompanyThree} style={{height:50}} />
                                <img src={CompanyFour} style={{height:50}} />
                                <img src={CompanyFive} style={{height:50}} />
                                <img src={CompanySix} style={{height:50}} />
                                
                            </div>
                        </div></Col>
                        <Col>
                        <img 
                        src={CarouselOneImg} 
                        style={{height:'77vh'}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                    <Col style={{padding:100}}>
                        <div>
                            <h1 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h1>
                            <h1 style={{color:'#216ad9',fontWeight:700}}><i>STYLE</i></h1>
                            <h3 style={{marginBottom:20}}>Shop with layesr trendy prifdhyu</h3>
                            <div>
                                <Button style={{width:250}} onClick={handleCTAClick}>Browse Products</Button>
                            </div>
                            <div style={{marginBottom:20}}>
                                <h4>Products Available From:</h4>
                                <img src={CompanyOne} style={{height:50}} />
                                <img src={CompanyTwo} style={{height:50}} />
                                <img src={CompanyThree} style={{height:50}} />
                                <img src={CompanyFour} style={{height:50}} />
                                <img src={CompanyFive} style={{height:50}} />
                                <img src={CompanySix} style={{height:50}} />
                            </div>

                        </div>
                    </Col>
                    
                        <Col><img src={CarouselTwoImg} 
                        style={{height:'77svh'}} 
                        /></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                    <Col style={{padding:100}}>
                        <div>
                            <h1 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h1>
                            <h1 style={{color:'#216ad9',fontWeight:700}}><i>DISCOUNTS</i></h1>
                            <h3 style={{marginBottom:20}}>Shop with layesr trendy prifdhyu</h3>
                            <div style={{marginBottom:20}}>
                                <Button style={{width:250}} onClick={handleCTAClick}>Browse Products</Button>
                            </div>
                            <div>
                                <h4>Products Available From:</h4>
                                <img src={CompanyOne} style={{height:50}} />
                                <img src={CompanyTwo} style={{height:50}} />
                                <img src={CompanyThree} style={{height:50}} />
                                <img src={CompanyFour} style={{height:50}} />
                                <img src={CompanyFive} style={{height:50}} />
                                <img src={CompanySix} style={{height:50}} />
                            </div>

                        </div>
                    </Col>
                        <Col><img src={CarouselThreeImg} style={{height:'77vh'}}/></Col>
                    </Row>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}