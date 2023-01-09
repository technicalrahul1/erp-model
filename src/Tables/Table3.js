import React from 'react'
//import {Customer,Product,Products} from "../Data/Data"
import Blank from '../Pages/Blank';
import "../App.css";
const Table5 = (props) => {
  console.log("products",props)
  return (
    <>
     <div className='table'>
      <div className='table-box'>
       <tr className='table-row'>
        <th className='table-heading' >SrNo.</th>
        <th className='table-heading'>{props.header2}</th>
        <th className='table-heading'>{props.header3}</th>
        {props.header4 && <th className='table-heading'>{props.header4}</th>}
       </tr>
      </div>
       {props?.data.map((items)=>{
        console.log("data",items.GeneratedAmount)
        return(
          <tr>
            <td className='table-data'>{items.SrNo}</td>
            <td className='table-data'>{items.Dates ? items.Dates : items.customerID ? items.customerID : items.customerID }</td>
            <td className='table-data'>{items.PredictedAmount ? items.PredictedAmount : items.TotalPurchasingAmount ? items.TotalPurchasingAmount : items.GeneratedAmountForRetaindedAmount}</td>
            {props.header4 ? <td className='table-data'>{items.GeneratedAmount}  </td> : null}
          </tr>
        )
       })}
       </div>
    </>
  )
}

export default Table5