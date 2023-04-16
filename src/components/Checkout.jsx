import React from "react"
import  CheckoutImg  from "../assets/16.png"

export default function CheckOut(){
    return(
        <div style={{display:'flex',justifyContent:'center'}}>
           <img src={CheckoutImg} height={300} style={{margin:70}} />
        </div>
    )
}