import React from 'react'
import noon from "./assets/noon-logo-en.svg"
import ae from "./assets/ae.svg"
const Navbar = () => {
  return (
    <div style={{background:'yellow', display:'flex', justifyContent:"center", gap:'50px', padding:'15px 0px 10px 0px'}}>
        <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
            <img src={noon} alt="" style={{height:'25px'}} />
            <img src={ae} alt="" />
            <div>
                <p>Deliver to</p>
                <b>Dubai</b>
            </div>
        </div>

        <div>
            <input type="text" placeholder='What are you looking for?' style={{backgroundColor:'white', border:'none', width:'600px', height:'30px', borderRadius:'5px', padding:'20px'}}/>
        </div>

        <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
            <p>العربية</p>
            <a href="" style={{textDecoration:"none"}}><b>Login</b></a>
            <a href="" style={{textDecoration:"none"}}><b>Wishlist</b></a>
            <a href="" style={{textDecoration:"none"}}><b>Cart</b></a>
        </div>
    </div>
  )
}

export default Navbar