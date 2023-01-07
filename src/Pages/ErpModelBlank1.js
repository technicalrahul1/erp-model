import React from 'react'
import { Link } from 'react-router-dom'
const ErpModelBlank1 = () => {
  return (
    <div style={{
      height: "390px",
      width: "100%",
      gap: "80px",
      justifyContent: "center",
      paddingTop: "200px",
      paddingBottom: "50px",
      paddingLeft: "600px",
    }}>
      <button>
        <Link to={"/erp-model/add-to-wishlist"}>Add To Wishlist</Link>
      </button>
      <button>
        <Link to={"/erp-model/show-wishlist"}>Show Wishlist</Link>
      </button>
    </div>
  )
}

export default ErpModelBlank1