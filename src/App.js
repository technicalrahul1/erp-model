import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import ProfitPrediction from "./Pages/ProfitPrediction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./Pages/Blank"
import Blank1 from "./Pages/Blank1"
import ErpModel from "./Pages/ErpModel";
import DataDescription from "./Pages/DataDescription"
import TableSalesItems from "./Tables/TableSalesItems";
const App = () => {
  // const [ data, setData] =useState()
  // const API ="https://jsonplaceholder.typicode.com/todos"
  // useEffect(()=>{
  //     fetch(API)
  //   .then(response => response.json())
  //   .then(json => setData(json.products))
  // },[])
  
  return (
    <> 
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<ErpModel/>} />
          <Route exact path="/erp-model/data-discription" element={<DataDescription  />} />
              <Route path="/erp-model/sales-item-from-data-discription" element={<TableSalesItems />} />
              <Route path="/erp-model/copy-of-data-discription-sales-item" element={<TableSalesItems/>} />
              <Route path="/erp-model/copy-of-data-discription-sales-item-1" element={<TableSalesItems/>} />
               {/* <Route path="/erp-model/derived-algorithm" element={} /> */}
          <Route exact path="/erp-model/profit-prediction" element={<ProfitPrediction/>} />
              
          <Route exact path="/erp-model/Blank" element={<Blank/>} />
          <Route exact path="/erp-model/Blank1" element={<Blank1/>} />

              {/* subcomponent k ander component */}

          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
