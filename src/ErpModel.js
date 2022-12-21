import React from 'react'
import {Link} from "react-router-dom"

const ErpModel = (data) => {
  console.log("erp mdel",data);
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
        <button className="button-left1">
          <Link to="/erp-model/data-discription" >Company Historical Data & Analysis</Link>
        </button>
        <button className="button-left2">
          <Link to="/erp-model/profit-prediction">Discount Discount</Link>
        </button>
        <div
            className="box-right"
            style={{ flexDirection: "column", marginTop: "30px" }}
          >
            <button className="button-left3">
              <Link to="/erp-model/Blank">Sales Prediction</Link>
            </button>
            <button className="button-left4">
              <Link to="/erp-model/Blank1">Discount Distribution Toolset</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErpModel