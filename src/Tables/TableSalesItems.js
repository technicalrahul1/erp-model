import React from 'react'
import {Data, Customer} from "../Data/Data"
import "../App.css";
const TableSalesItems = () => {
  return (
    <>
     <div className='table'>
      <div className='table-box'>
       <tr className='table-row'>
        <th className='table-heading'>Sr.No.</th>
        <th>customerID</th>
        <th>city</th>
        <th>state</th>
        <th>postalcode</th>
       </tr>
      </div>
       {Data.map((items)=>{
        console.log("map",items)
        return(
          <tr>
          <td>{items.SrNo}</td>
            <td className='table-data'>{items.city}</td>
            <td className='table-data'>{items.customerID}</td>
            <td>{items.postalcode}</td>
            <td>{items.state}</td>
           
          </tr>
        )
       })}
       </div>
    </>
  )
}

export default TableSalesItems