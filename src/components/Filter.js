import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Filter({ updateBooks }) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/getAuthors")
      .then((response) => response.json())
      .then((data) => {
        setAuthors(data);
      });
  }, []);

  const authorRef = useRef(null);
  const genreRef = useRef(null);
  const yearRef = useRef(null);
  const inputRef = useRef(null);
  const location = useLocation();
  const qP = new URLSearchParams(location.search);
  const input = qP.get('input');

  function filter() {
    let author = authorRef.current.value;
    let genre = genreRef.current.value;
    let year = yearRef.current.value;
    if (author === "Author") {
      author = false;
    }
    if (genre === "Genre") {
      genre = false;
    }
    if (year === "Year") {
      year = false;
    }
    const url = `http://localhost:4000/filter/${author}/${year}/${genre}/${inputRef.current.value}`;
    console.log(url)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateBooks(data);
      });
  }

  function filter2() {
    const url = `http://localhost:4000/filter/${false}/${false}/${false}/${input}`;
    console.log(url)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateBooks(data);
      });
  }

  // Call filter2() only once when the component is mounted
  useEffect(() => {
    filter2();
  }, []);

   
  return (
    <div id="filter">
      <form id="searchForm" onSubmit={(e) => { e.preventDefault(); filter(); }}>
        <div className="form-group d-flex">
          <input ref={inputRef} id="search-bar" className="form-control  me-2 mx-2" type="search" placeholder="Search" aria-label="Search" required></input>
          <button id="search-button" className="btn btn-outline-success mx-2" type="submit">Search</button>
        </div>
        <div className="form-group d-flex my-4 mx-2 align-items-center">
          <label className="form-label">Genre:</label>
          <select ref={genreRef} className="form-select w-50 " aria-label="Default select example">
          <option value="">Select a genre</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="Nonfiction">Nonfiction</option>
          <option value="Young Adult">Young Adult</option>
          <option value="Biography">Biography</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Action and Adventure">Action and Adventure</option>
          <option value="Crime and Detective">Crime and Detective</option>
          </select>
        </div>
        <div className="form-group d-flex my-4 mx-2 align-items-center">
          <label className="form-label">Author:</label>
          <select ref={authorRef}  className="form-select w-50 " aria-label="Default select example">
            <option selected>Author</option>
            {authors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group d-flex my-4 mx-2 align-items-center">
          <label className="form-label">Year:</label>
          <select ref={yearRef}  className="form-select w-50" aria-label="Year" menuPosition="fixed">
            <option>Year</option>
            {Array.from({ length: new Date().getFullYear() - 1900 }, (_, index) => (
              <option key={index}>{new Date().getFullYear() - index}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filter
