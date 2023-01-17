import React from 'react'

const Formula = () => {
  return (
    <div> 
           <h1>Derived Algorithm for Discount Generation</h1>
      <p>Total Amount invested by customer = XYZ ₹</p>
      <p>(Value of X % is decided by the company policies.)</p>
      <p>UB = (CADD * 10)/100   </p>
      <p>LB = (CADD * 20)/100     </p>
      <p>TA = PA + CIA  </p>
      <p>TT = PT+ CA          </p>
      <p>HD= Len (Total Amount)   </p>
      <p>DA=(((HD*TT)/5) *TA)/100</p>
      <p>DA= Round down(DA) </p>
      <p>if </p>
      <p>3line data missing</p>
      <p>CADD= Calculated Amount for discount distribution</p>
      <p>UB=Upper bound for Discount Generation</p>
      <p>LB=Lower bound for Discount Generation</p>
      <p>TA=Total Amount</p>
      <p>TT=Total Transactions</p>
      <p>PA= Previous Amount</p>
      <p>CIA=Current Invested Amount</p>
      <p>PA=Number of Previous Transaction</p>
      <p>CA=Number of current Transaction</p>
      <p>HD=Highest Digit of Invested Amount</p>
      <p>DA=Discounted Amount for Exiting Customer</p>
      <p>TDA=Total Discounted Amount</p>
      <p>AMD=Amount of Membership Discount    </p>
      <p>Average Amount Value =Total Sales amount / Total Unique customers whom at least one shipped order.</p>
      <p>No. of Loyal Customers = Count (Purchased items value more than Average Amount)</p>
      <p>AMD =Value of X % is decided by the company policies.</p>
      <p>“Final Generated Discount = AMD + TDA”</p>
    </div>
  )
}

export default Formula