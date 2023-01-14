import React from 'react'
import { Link } from 'react-router-dom'
const Blank = () => {
  return (
    <>
       <div>
      
      <div
          style={{
            height: "390px",
            width: "40%",
            gap: "80px",
            justifyContent: "center",
            paddingTop: "200px",
            paddingBottom: "50px",
            paddingLeft: "600px",
            display:'flex',
            flexDirection:"column"
          }}
        >
        <button className='previousbtn'><Link to={-1}>Back</Link></button>
        
          <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/derived-algorithm"><button className="button-left1">Apply Derived Algorithum</button></Link>
        
        
          <Link style={{color:"white",textDecoration:"none"}} to="/erp-model/apply-derived-algorithim"><button className="button-left2">Show Results</button></Link>
        
        </div>
    </div>
    </>
  )
}

export default Blank