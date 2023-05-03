import React, { useState, useEffect, useCallback } from 'react';

function Bookcomments({ bookId }) {
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(async () => {
    // Replace this URL with the API endpoint you're using to fetch comments
    const response = await fetch(`http://localhost:4000/getCommentInfo/${bookId}`);
    const data = await response.json();
    console.log(data);
    setComments(data);
  }, [bookId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="container">
          <div className="card mb-3">
            <div className="row g-0 align-items-center">
              <div className="col-md-2 text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  className="img-fluid rounded-circle avatar"
                  alt="avatar"
                  style={{ width: '50%' }}
                ></img>
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title">
                    {comment.authorName}
                    <button
                      className="btn btn-outline-secondary like-button"
                      style={{ float: 'right' }}
                    >
                      <i className="bi bi-heart"></i> Like
                    </button>
                  </h5>
                  <div className="form-group">
                    <div className="">
                      <span className="star" data-value="1">
                        <i className="bi bi-star"></i>
                      </span>
                      <span className="star" data-value="2">
                        <i className="bi bi-star"></i>
                      </span>
                      <span className="star" data-value="3">
                        <i className="bi bi-star"></i>
                      </span>
                      <span className="star" data-value="4">
                        <i className="bi bi-star"></i>
                      </span>
                      <span className="star" data-value="5">
                        <i className="bi bi-star"></i>
                      </span>
                    </div>
                  </div>
                  <p className="comment-text card-text">
                    {comment.comment}
                  </p>
                  <button className="read-more-button btn btn-link">
                    Read More
                  </button>
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
