import React, { useState, useEffect, Component } from "react";
import { Link } from 'react-router-dom';

function SecondPageHome(){
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    function fetchRecommendedBooks() {
      fetch('http://localhost:4000/recommended/')
        .then((response) => response.json())
        .then((data) => setBookList(data))
        .catch((error) => console.log(error));
    }

    fetchRecommendedBooks();
  }, []);

  // Divide the bookList into chunks of three
  const chunks = bookList.reduce((acc, book, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(book);
    return acc;
  }, []);

  return(
    <div id="secondary">
      <h2 id="recommended-text">Recommended:</h2>
      <div id="recommended-books" className="container">
        {chunks.map((chunk, index) => (
          <div key={index} className="row">
            {chunk.map((book) => (
              <div className="column card mt-4 mx-auto" style={{width: "18rem"}} key={book.id}>
                <img src={require('../images/Game_of_thrones.webp')} className="card-img-top" alt="book cover"></img>
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.description}</p>
                  <a href={`/view?BookID=${book._id}#s`}>View component</a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecondPageHome;
