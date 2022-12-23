import React from 'react'
import { Link } from 'react-router-dom'
const Blank = () => {
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
          <Link to="/erp-model/derived-algorithm">Apply Derived Algorithum</Link>
        </button>
        <button className="button-left2">
          <h3>Show Results</h3>
        </button> 
        </div>
    </div>
    </>
  )
}

export default Blank