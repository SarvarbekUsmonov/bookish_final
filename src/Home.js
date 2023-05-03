import React from "react";
import MainHome from "./components/MainHome";
import SecondPageHome from "./components/SecondPageHome";
import Navbar from "./components/Navbar";

function Home(){
  return(
    <div id='body-home'>
      <Navbar />
      <MainHome />
      <SecondPageHome />
    </div>
  )
}

export default Home