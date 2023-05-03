import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";

function Rateandcomment() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const commentRef = useRef();

  const location = useLocation();
  const qP = new URLSearchParams(location.search);
  const BookID = qP.get('BookID');


  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form submission and page reload
    userCheck();
  };

  const handleStarClick = (e) => {
    const newRating = parseInt(e.currentTarget.dataset.value, 10);
    setRating(newRating);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };


    

  async function userCheck(){
    fetch("http://localhost:4000/rateandcomment", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: rating, comment: comment, bookId: BookID }),
    })
    setRating(0);
    commentRef.current.value = '';
  }

  return (
    <div className="container">
      <div className="card mb-3">
        <div className="card-body">
          <h4 className="card-title">Rate and Comment on the Book</h4>
          <form onSubmit={handleSubmit}>
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={`star ${index + 1 <= rating ? "selected" : ""}`}
                  data-value={index + 1}
                  onClick={handleStarClick}
                >
                  <i className={`bi ${index + 1 <= rating ? "bi-star-fill" : "bi-star"}`}></i>
                </span>
              ))}
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea
                className="form-control"
                id="comment"
                rows="3"
                onChange={handleCommentChange}
                ref={commentRef}
              ></textarea>
            </div>
            {/* <button type="submit" className="btn btn-primary" onClick={userCheck}> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Rateandcomment;
