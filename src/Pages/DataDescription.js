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
        <button className="button-left1">
          <Link to="/erp-model/sales-item-from-data-discription" >Sales Item</Link>
        </button>
          <button className="button-left2">
            <Link to="/erp-model/copy-of-data-discription-sales-item">Users Detail</Link>
          </button>
          <div
            className="box-right"
            style={{ flexDirection: "column", marginTop: "30px" }}
          >
            <button className="button-left3-dropdown">
              <h3>Data Description Graph</h3>
            </button>
            <button className="button-left4">
              <Link to="/erp-model/copy-of-data-discription-sales-item-1">List of Loyal Customers</Link>
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default DataDescription