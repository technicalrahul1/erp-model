import React from 'react'
import { Link } from 'react-router-dom'
const ErpModelBlank1 = () => {
  return (
    <div style={{
      height: "390px",
      width: "100%",
      gap: "80px",
      justifyContent: "center",
      paddingTop: "200px",
      paddingBottom: "50px",
      paddingLeft: "600px",
    }}>
      
        <Link style={{color:"white",textDecoration:"none"}} to={"/erp-model/add-to-wishlist"}><button className='button-left1'>Add To Wishlist</button></Link>
        <Link style={{color:"white",textDecoration:"none"}} to={"/erp-model/show-wishlist"}><button className='button-left3'>Show Wishlist</button></Link>

    </div>
  )
}

export default ErpModelBlank1