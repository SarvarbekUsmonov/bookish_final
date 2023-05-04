import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import ViewBook from "./ViewBook";

function ContentSearch({books}){

  console.log(books)
  return(
    <div id="content">
      <Navbar></Navbar>
      <style>
      {"#searchFormNavbar { visibility:hidden !important }"}
      </style>
      {books.map((book, index)=>(
        <div class="card mb-3 mx-auto my-5" style={{border: "none", maxWidth: "540px", cursor: "pointer"}} onClick={() => {
          window.location.href = `/view?BookID=${book._id}#s`;
        }}>
        <ViewBook BookID={book._id}> </ViewBook>
        <style> {"#changeLeftMargin {margin-left: 10px}"} </style>
      </div>
      ))}

    </div>
  )
}

export default ContentSearch;