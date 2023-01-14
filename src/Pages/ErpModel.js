import React from 'react'
import {Link} from "react-router-dom"

const ErpModel = () => {
  
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
        
          <Link className="link-left2" to="/erp-model/data-discription" ><button className="button-left1">Company Historical Data & Analysis</button></Link>
          
        
          <Link className="link-left2"  to="/erp-model/profit-prediction">
          <button className="button-left2">Sales Prediction</button>
          </Link>
       
        <div
            className="box-right"
            style={{ flexDirection: "column", marginTop: "30px" }}
          >
              <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/Blank"><button className="button-left3">Discount Distribution</button></Link>
              <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/blank-1"><button className="button-left4">Discount Distribution Toolset</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErpModel