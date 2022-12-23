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
          <Link to="/erp-model/data-discription" >Wish List</Link>
        </button>
          <button className="button-left2">
            <h3>Discount Division</h3>
          </button>
          <div
            className="box-right"
            style={{ flexDirection: "column", marginTop: "30px" }}
          >
            <button className="button-left3">
              <h3>Return Gift</h3>
            </button>
            <button className="button-left4">
              <h3>Categorical Discount</h3>
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Blank1