import React from 'react'
const BelowNavBar = () => {
  return (
    <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
        <div>
            <h3 style={{width:'220px', color:'blue', height:'50px', border:'0.5px solid grey', padding:'10px 50px 15px 20px'}}>All Categories</h3>
        </div>
        <div style={{display:'flex', gap:'20px'}}>
            <h3>Electronics</h3>
            <h3>Men</h3>
            <h3>Women</h3>
            <h3>Home</h3>
            <h3>Beauty & Fragrance</h3>
            <h3>Baby</h3>
            <h3>Toys</h3>
            <h3>Sports</h3>
            <h3>Health & Nutrition</h3>
        </div>
        
    </div>
  )
}

export default BelowNavBar