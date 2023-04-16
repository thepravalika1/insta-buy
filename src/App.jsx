import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import {Routes,Route, useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import  Navbar  from 'react-bootstrap/Navbar'
import './App.css'
import Home from './components/Home'
import Logo from './assets/7.png'
import Login from './components/Login'
import Signup from './components/Signup'
import ProductGallery from './components/ProductGallery'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import CheckOut from './components/Checkout'


export default function App() {
  const navigate= useNavigate()
  const[user,setUser]=useState('');
  const[cartItems,setCartItems]=useState({})

  useEffect(()=>{
    const userEmail=localStorage.getItem('userEmail')
    if(userEmail){
      setUser(userEmail)
    }
  },[])

  const handleAddToCart=(item)=>{
    setCartItems({...cartItems,...item})
  }

   return (
    <div>
    <Navbar className='instabuy-navbar'>
      <Navbar.Brand onClick={()=>navigate('/')} style={{padding:'5px 20px'}}>
        <img src={Logo} 
        alt="" 
        width='30'
        height='30'
        className='d-inline-block align-top'
        />{' '}
        InstaBuy!
      </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {user && <Button onClick={()=>navigate('/cart')}>Cart &nbsp; {Object.keys(cartItems).length >0 &&(<Badge bg='red'>{Object.keys(cartItems).length}</Badge>)}</Button>}
          &nbsp;&nbsp;&nbsp;
          <Button onClick={()=>navigate('/login')} style={{padding:'0.4rem 2rem'}}>{user ? 'LogOut':'Login'}</Button>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home user={user}/>} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/signup' element={<Signup setUser={setUser}/>} />
        <Route path='/products' element={<ProductGallery />} />
        <Route path='/product/:id' element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} />} />
        <Route path='/checkout' element={<CheckOut />} />
        
        
      </Routes>
      
    </div>
  )
}


