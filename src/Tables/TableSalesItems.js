import React from 'react'
import {Customer,Product} from "../Data/Data"
import "../App.css";
const TableSalesItems = (props) => {
  return (
    <>
     <div className='table'>
      <div className='table-box'>
       <tr className='table-row'>
       {/* {props.miniData.map(()=>{})} */}
        <th className='table-heading'>Sr.No.</th>
        <th>customerID</th>
        <th>city</th>
        <th>state</th>
        <th>postalcode</th>
       </tr>
      </div>
       {props?.data.map((items)=>{
        console.log("data",items)
        return(
          <tr>
            <td>{items.SrNo || items.SrNo}</td>
            <td className='table-data'>{items.customerID || items.productname}</td>
            <td className='table-data'>{items.city || items.category}</td>
            <td>{items.state || items.quantity}</td>
            <td>{items.postalcode || items.Total_amount}</td>
          </tr>
        )
       })}
       </div>
    </>
  )
}

export default TableSalesItems