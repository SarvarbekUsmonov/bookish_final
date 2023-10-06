import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageWithFallback from "./ImageWithFallback"; // Import the ImageWithFallback component

function SecondPageHome() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    function fetchRecommendedBooks() {
      fetch("http://167.99.60.236:4000/recommended/")
        .then((response) => response.json())
        .then((data) => setBookList(data))
        .catch((error) => console.log(error));
    }

    fetchRecommendedBooks();
  }, []);

  const chunks = bookList.reduce((acc, book, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(book);
    return acc;
  }, []);

  const fallbackImageUrl = "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"; // Replace with your fallback image URL

  return (
    <div id="secondary">
      <h2 id="recommended-text">Recommended:</h2>
      <div id="recommended-books" className="container">
        {chunks.map((chunk, index) => (
          <div key={index} className="row">
            {chunk.map((book) => (
              <div className="column card mt-4 mx-auto" style={{ width: "18rem" }} key={book.id}>
                {/* Replace the img tag with the ImageWithFallback component */}
                <ImageWithFallback
                  inputImageUrl={book.image}
                  fallbackImageUrl={fallbackImageUrl}
                  className="card card-img-top"
                  style={{ marginTop: "10px" }}
                  alt="book cover"
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">
                    <em>{book.description}</em>
                  </p>
                  <a href={`/view?BookID=${book._id}#s`} className="btn btn-primary">
                    View book
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondPageHome;