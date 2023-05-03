import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ContentSearch({books}){

  console.log(books)
  return(
    <div id="content">
      <nav class="navbar navbar-expand-md sticky-top bg-white border-bottom m-0 py-0">
        <img class="rounded d-block mx-2" id="logo-img" src={require("../images/photo_2023-04-13 23.51.37.jpeg")}></img>
        <a class="navbar-brand me-auto">Bookish</a>
        <img id="pfp-img" src="https://www.shareicon.net/data/512x512/2016/02/22/722964_button_512x512.png" class="rounded mx-4 d-block" alt="user image"></img>
        
      </nav>
      {books.map((book, index)=>(
        <div class="card mb-3 mx-auto my-5" style={{maxWidth: "540px"}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={require("../images/Game_of_thrones.webp")} class="img-fluid rounded-start" alt="..."></img>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{book.title}</h5>
              <p class="card-text">{book.description}</p>
              <p class="card-text"><small class="text-body-secondary">{book.author}</small></p>
            </div>
          </div>
        </div>
      </div>
      ))}

    </div>
  )
}

export default ContentSearch;