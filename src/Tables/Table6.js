import React from 'react'
import "../App.css";

const Table6 = (props) => {
  
  return (
    <>
     <div className='table'>
      <div className='table-box'>
       <tr className='table-row'>
        <th className='table-heading'>{props.header}</th>
        <th className='table-heading'>{props.header2}</th>
        <th className='table-heading'>{props.header3}</th>
        <th className='table-heading'>{props.header4}</th>
        <th className='table-heading'>{props.header5}</th>
        <th className='table-heading'>{props.header6}</th>
        {
              props.header7 ? <td>{props.TotalAmount}</td> : null
            }
       </tr>
      </div>
       {props?.data.map((items)=>{
        console.log("data",items)
        return(
          <tr>
            <td className='table-data'>{items.SrNo ? items.SrNo : "Rahul" }</td>
            <td className='table-data'>{items.CustomerID}</td>
            <td className='table-data'>{items.ProductName ? items.ProductName : items.GeneratedDiscount ? items.GeneratedDiscount : items.Gender}</td>
            <td className='table-data'>{items.NoOfVisits ? items.NoOfVisits : items.FirstDiscount ? items.FirstDiscount : items.State}</td>
            <td className='table-data'>{items.PurchasedAmount ? items.PurchasedAmount : items.SecondDiscount ? items.SecondDiscount : items.City}</td>
            <td className='table-data'>{items.PriceOfProducts ? items.PriceOfProducts : items.ThirdDiscount ? items.ThirdDiscount : items.GeneratedDiscount}</td>
            {props.header7 ? <td className='table-data'>{items.TotalAmount}</td> : null}
          </tr>
        )
       })}
       </div>
    </>
  )
}

export default Table6

