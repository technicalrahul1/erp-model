import React from 'react'
import {Link} from "react-router-dom"

const ErpModel = () => {
  
  return (
    <>
      <div>
       <div
          style={{
            height: "396px",
            width: "100%",
            gap: "80px",
            justifyContent: "center",
            paddingTop: "200px",
            paddingBottom: "50px",
            paddingLeft: "600px",
          }}
        >
        <button className="button-left1">
          <Link to="/erp-model/data-discription" >Company Historical Data & Analysis</Link>
        </button>
        <button className="button-left2">
          <Link to="/erp-model/profit-prediction">Sales Prediction</Link>
        </button>
        <div
            className="box-right"
            style={{ flexDirection: "column", marginTop: "30px" }}
          >
            <button className="button-left3">
              <Link to="/erp-model/Blank">Discount Distribution</Link>
            </button>
            <button className="button-left4">
              <Link to="/erp-model/blank-1">Discount Distribution Toolset</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErpModel