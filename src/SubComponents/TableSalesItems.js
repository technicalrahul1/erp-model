import React from 'react'
import Data from "../MapMethod/Data"
import "../App.css";
const TableSalesItems = (data) => {
  console.log("data erp tables",data.data);
    
  return (
    <>
     <div className='table'>
      <div className='table-box'>
       <tr className='table-row'>
        <th className='table-heading'>Sr.No.</th>
        <th>Product Name</th>
        <th>Category</th>
        <th>No. of Product Sold</th>
        <th>Amount</th>
       </tr>
      </div>
       {Data.Data.map((items)=>{
        return(
          <tr>
            <td className='table-data'>{items.SrNo}</td>
            <td className='table-data'>{items.ProductName}</td>
            <td>{items.Category}</td>
            <td>{items.PRoductSold}</td>
            <td>{items.Amount}</td>
          </tr>
        )
       })}
       </div>
    </>
  )
}

export default TableSalesItems