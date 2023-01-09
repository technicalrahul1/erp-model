import React from 'react'
//import {Customer,Product,Products} from "../Data/Data"
import "../App.css";
const Table5 = (props) => {
  console.log("products",props)
  return (
    <>
     <div className='table'>
      <div className='table-box'>
       <tr className='table-row'>
        <th className='table-heading'>{props.first ? props.first : "Submission Tabric"}</th>
        <th className='table-heading'>{props.header2}</th>
        <th className='table-heading'>{props.header3}</th>
        <th className='table-heading'>{props.header4}</th>
        <th className='table-heading'>{props.header5}</th>
       </tr>
      </div>
       {props?.data.map((items)=>{
        console.log("data",items)
        return(
            <tr className='.table-row-data'>
            <td className='table-data'>{items.SrNo ? items.SrNo : items.SrNo ? items.SrNo : items.SrNo ? items.SrNo : items.submissionTime}</td>
            <td className='table-data'>{items.productname ? items.productname : items.customerID ? items.customerID : items.date ? items.date :items.customerID }</td>
            <td className='table-data'>{items.category ? items.category : items.city ? items.city : items.xgBoostAlgorithum ? items.xgBoostAlgorithum : items.items }</td>
            <td className='table-data'>{items.quantity ? items.quantity : items.state ? items.state : items.randomForestAlgorithum ? items.randomForestAlgorithum : items.activePrice}</td>
            <td className='table-data'>{items.Total_amount ? items.Total_amount : items.postalcode ? items.postalcode : items.predictedAverage ? items.predictedAverage : items.priceForOurValuableCustomers}</td>
            {
              items.quality && <td className='table-data'>{items.quality}</td>
            }
            {
              items.number && <td className='table-data'>{items.number}</td>
            }
            </tr>
        )
       })}
       </div>
    </>
  )
}

export default Table5


// ? items.productname : items.Productname ? items.Productname : ""