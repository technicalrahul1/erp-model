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
          <Link>Xg boost Algorithum</Link>
        </button>
          <button className="button-left2">
          <Link>Random Forest Algorithum</Link>
          </button>
          <div
            className="box-right"
            style={{ flexDirection: "column", marginTop: "30px" }}
          >
            <button className="button-left3">
              <h3>Show Result</h3>
            </button>
            <button className="button-left4">
              <h3>Show Result</h3>
            </button>
            <button className="button-left4">
              <h3>Predicted Average</h3>
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default ProfitPrediction