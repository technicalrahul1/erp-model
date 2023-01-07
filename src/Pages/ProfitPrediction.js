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
        <button><Link to={-1}>Back</Link></button>
        <button className="button-left1">
          <Link to="/erp-model/xg-boost-algorithm">Xg boost Algorithum</Link>
        </button>
          <button className="button-left2">
          <h1 >Random Forest Algorithum</h1>
          </button>
          <div
            className="box-right"
            style={{ flexDirection: "column", marginTop: "30px" }}
          >
            <button className="button-left3">
              <Link to="/erp-model/xg-boost-algo-generated-results">Show Result</Link>
            </button>
            <button className="button-left4">
              <Link to="/erp-model/random-forest-algo-generated-results">Show Result</Link>
            </button>
            <button className="button-left4">
              <Link to="/erp-model/show-avg-of-predicted-results">Predicted Average</Link>
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default ProfitPrediction