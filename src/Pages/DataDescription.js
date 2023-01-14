import React from 'react'
import {Link} from "react-router-dom"
import TableSalesItems from '../Tables/Table5'

const DataDescription = () => {
  
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
        
          <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/sales-item-from-data-discription" ><button className="button-left1">Sales Item</button></Link>
          
            <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/copy-of-data-discription-sales-item"><button className="button-left2">Users Detail</button></Link>
        
          <div
            className="box-right"
            style={{ flexDirection: "column", marginTop: "30px" }}
          >
            
              <Link to="#" style={{color:"white",textDecoration:"none"}}><button className="button-left3-dropdown">Data Description Graph</button></Link>
              <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/copy-of-data-discription-sales-item-1"> <button className="button-left4">List of Loyal Customers</button></Link>

          </div>
        </div>
    </div>
    </>
  )
}

export default DataDescription