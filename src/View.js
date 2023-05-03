import React from "react";
import ViewBook from './components/ViewBook';
import Rateandcomment from './components/Rateandcomment';
import Bookcomments from './components/Bookcomments';
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";


function View(){
  const location = useLocation();
  const qP = new URLSearchParams(location.search);
  const BookID = qP.get('BookID');
    return(
    <div>
        <Navbar />
        <ViewBook BookID={BookID}/>
        <Rateandcomment BookID={BookID}/>
        <Bookcomments bookId={BookID}/> 
    </div>
  )
}

export default View