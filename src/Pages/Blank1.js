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
        <button className="button-left1">
          <Link to="/erp-model/wish-list" >Wish List</Link>
        </button>
          <button className="button-left2">
            <Link to="/erp-model/discount-division-by-3">Discount Division</Link>
          </button>
          <div
            className="box-right"
            style={{ flexDirection: "column", marginTop: "30px" }}
          >
            <button className="button-left3">
              <Link to="/erp-model/return-gift">Return Gift</Link>
            </button>
            <button className="button-left4">
              <Link to="/erp-model/4thbtn">Categorical Discount</Link>
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Blank1