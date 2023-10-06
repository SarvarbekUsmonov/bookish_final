import React, { useState, useEffect, useCallback } from 'react';
import ImageWithFallback from "./ImageWithFallback";

function Bookcomments({ bookId }) {
  const [comments, setComments] = useState([]);
  const [avatar, setAvatar] = useState('')

  const fetchComments = useCallback(async () => {
    const response = await fetch(`http://167.99.60.236:4000/getCommentInfo/${bookId}`);
    const data = await response.json();
    console.log(data);
    setComments(data);
  }, [bookId]);
  
  useEffect(() => {
    // Call fetchComments initially to fetch comments on mount
    fetchComments();

    // Set an interval to call fetchComments every second
    const intervalId = setInterval(fetchComments, 1000);
    
    // Cleanup function to clear interval on unmount
    return () => clearInterval(intervalId);
  }, [fetchComments]);
  
  const fallbackImageUrl = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="container">
          <div className="card mb-3">
            <div className="row g-0 align-items-center">
              <div className="col-md-2 text-center">
                {/* <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  className="img-fluid rounded-circle avatar"
                  alt="avatar"
                  style={{ width: '50%' }}
                ></img> */}
                <ImageWithFallback
          inputImageUrl={comment.avatar}
          fallbackImageUrl={fallbackImageUrl}
          className="card card-img-top img-fluid rounded-circle avatar"
          style={{ marginTop: "10px", width: '50%', height: "50%", marginLeft: "40px" }}
          alt="book cover"
          id="pfp-img"
        />


              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title">
                    {comment.author}
                    {console.log(comment)}
                  </h5>
                  <div className="form-group">
                    <div className="">
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className="star" data-value={index + 1}>
                          <i className={`bi ${index < comment.rating ? "bi-star-fill" : "bi-star"}`}></i>
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="comment-text card-text">
                    {comment.comment}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bookcomments;