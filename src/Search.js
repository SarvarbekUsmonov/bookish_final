import React from "react";
import Filter from "./components/Filter";
import ContentSearch from "./components/ContentSearch";
import { useState} from "react";

function Search(){

  const [books, setBooks] = useState([]);
  function updateBooks(newBooks) {
    setBooks(newBooks);
  }
  console.log(books)
  return(
    <div id='main-search'>
      <Filter updateBooks={updateBooks} />
      <ContentSearch books={books} />
    </div>
  )
}

export default Search;