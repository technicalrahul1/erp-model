import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import ProfitPrediction from "./Pages/ProfitPrediction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./Pages/Blank"
import Blank1 from "./Pages/Blank1"
import ErpModel from "./Pages/ErpModel";
import DataDescription from "./Pages/DataDescription"
import Table5 from "./Tables/Table5";
import Table3 from "./Tables/Table3";
import Table6 from "./Tables/Table6";
import { Table7Content,Discount,Gender } from "./Data/Table6Data";
import ErpModelBlank1 from "./Pages/ErpModelBlank1";
import { Customer,Product,Products,Row3,predictedAverage,showWishlistButton4 } from "./Data/Data";
import Pararagraph from "./Paragraphs/Pararagraph";
const App = () => {
  // const [ data, setData] =useState()
  // const API ="https://jsonplaceholder.typicode.com/todos"
  // useEffect(()=>{
  //     fetch(API)
  //   .then(response => response.json())
  //   .then(json => setData(json.products))
  // },[])
  // const miniData =[
  //   {field:"SrNo",header:"SRNO"},
  //   {field:"city"},
  //   {field:"customerID"},
  //   {field:"postalcode"},
  //   {field:"state"},
  // ]
  return (
    <> 
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<ErpModel/>} />
          <Route exact path="/erp-model/data-discription" element={<DataDescription  />} />
              <Route path="/erp-model/sales-item-from-data-discription" element={<Table5 data={Product} header={"category"} first ={"SrNo"}/>} />
              <Route path="/erp-model/copy-of-data-discription-sales-item" element={<Table5 data={Customer} header={"customerID"} />} />
              <Route path="/erp-model/copy-of-data-discription-sales-item-1" element={<Table6 data={Table7Content} header={"SrNo"} header2={"CustomerID"} header3={"Product Name"} header4={"No Of Visits"} header5={"Purchased Amount"} header6={"Price Of Products"} header7={"Total Amount"}/>} />
               {/* <Route path="/erp-model/derived-algorithm" element={<Table} /> */}
          <Route exact path="/erp-model/profit-prediction" element={<ProfitPrediction />} />
              <Route path="/erp-model/xg-boost-algorithm" element={<Pararagraph/>} />
              <Route path="/erp-model/xg-boost-algo-generated-results" element={<Table3 data={Row3} header2={"Dates"} header3={"Predicted Amount"} />} />
              <Route path="/erp-model/random-forest-algo-generated-results" element={<Table3 data={Row3} header2={"Dates"} header3={"Predicted Amount"}/>} />
              <Route path="/erp-model/show-avg-of-predicted-results" element={<Table5 data={predictedAverage} />} />
          <Route exact path="/erp-model/Blank" element={<Blank/>} />
            <Route path="/erp-model/derived-algorithm" element={<Pararagraph/>} />
            
            <Route path="/erp-model/apply-derived-algorithim" element={<Table3 data={Row3} header2={"Customer ID"} header3={"Total Purchasing Amount"} header4={"Generated Amount"}/>} />
          <Route exact path="/erp-model/blank-1" element={<Blank1/>} />
            <Route exact path="/erp-model/wish-list" element={<ErpModelBlank1/> } />
            <Route path="/erp-model/return-gift" element={<Table3 data={Row3} header2={"Customer ID"} header3={"Genarated Amount For Retained Gift"}/>} />
            <Route path="/erp-model/discount-division-by-3" element={<Table6 data={Discount} header={"SrNo"} header2={"Customer ID"} header3={"Generated Amount"} header4={"First Discount"} header5={"Second Discount"} header6={"Third Discount"} />} />
            <Route path="/erp-model/show-wishlist" element={<Table5 data={showWishlistButton4} />} />
            <Route path="/erp-model/4thbtn" element={<Table6 data={Gender} header={"SrNo"} header2={"CustomerID"} header3={"Gender"} header4={"State"} header5={"City"} header6={"GeneratedDiscount"}/>} />

              {/* subcomponent k ander component */}

          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
