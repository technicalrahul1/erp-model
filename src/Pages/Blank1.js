import React from 'react'
import { Link } from 'react-router-dom'
const Blank1 = () => {
  return (
    <>
      <div>
      
      <div
          style={{
            height: "390px",
            width: "100%",
            gap: "80px",
            justifyContent: "center",
            paddingTop: "200px",
            paddingBottom: "50px",
            paddingLeft: "600px",
          }}
        >
        <button><Link to={-1}>Back</Link></button>
        {/* <Link to="/erp-model">{">"}</Link> */}
        
          <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/wish-list" ><button className="button-left1">Wish List</button></Link>
        
          
            <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/discount-division-by-3"><button className="button-left2">Discount Division</button></Link>
          
          <div
            className="box-right"
            style={{ flexDirection: "column", marginTop: "30px" }}
          >
            
              <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/return-gift"><button className="button-left3">Return Gift</button></Link>
              <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/4thbtn"> <button className="button-left4">Categorical Discount</button></Link>
            
          </div>
        </div>
    </div>
    </>
  )
}

export default Blank1