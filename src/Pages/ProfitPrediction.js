import React from 'react'
import { Link } from 'react-router-dom'
const ProfitPrediction = () => {
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
        
        <div>
      <button><Link to={-1}>Back</Link></button>
      </div>
          <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/xg-boost-algorithm"><button className="button-left1">Xg boost Algorithum</button></Link>
          
          <Link to="#" style={{color:"white",textDecoration:"none"}} ><button className="button-left2">Random Forest Algorithum</button></Link>
          
          <div
            className="box-right"
            style={{ flexDirection: "column", marginTop: "30px" }}
          >
            
              <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/xg-boost-algo-generated-results"><button className="button-left3">Show Result</button></Link>
            
            
              <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/random-forest-algo-generated-results"><button className="button-left4">Show Result</button></Link>
              </div>  
          <div>  
              <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/show-avg-of-predicted-results"><button className="button-left5">Predicted Average</button></Link>
              </div>
          
        </div>
    </div>
    </>
  )
}

export default ProfitPrediction