import React, { useState, useEffect } from "react";
import Spinner from "react-spinkit";

function ViewBook(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      fetch(`http://127.0.0.1:4000/viewBookData/${props.BookID}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
          console.log(data); // log the fetched data
        })
        .catch((error) => console.error(error));
    }, 1000);
  }, [props.id]);

  if (loading) {
    return (
      <div className="container" style={{margin: "100px auto"}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="200px" width="200px" viewBox="0 0 200 200" class="pencil">
        <defs>
          <clipPath id="pencil-eraser">
          <rect height="30" width="30" ry="5" rx="5"></rect>
          </clipPath>
        </defs>
        <circle transform="rotate(-113,100,100)" stroke-linecap="round" stroke-dashoffset="439.82" stroke-dasharray="439.82 439.82" stroke-width="2" stroke="currentColor" fill="none" r="70" class="pencil__stroke"></circle>
        <g transform="translate(100,100)" class="pencil__rotate">
          <g fill="none">
          <circle transform="rotate(-90)" stroke-dashoffset="402" stroke-dasharray="402.12 402.12" stroke-width="30" stroke="hsl(223,90%,50%)" r="64" class="pencil__body1"></circle>
          <circle transform="rotate(-90)" stroke-dashoffset="465" stroke-dasharray="464.96 464.96" stroke-width="10" stroke="hsl(223,90%,60%)" r="74" class="pencil__body2"></circle>
          <circle transform="rotate(-90)" stroke-dashoffset="339" stroke-dasharray="339.29 339.29" stroke-width="10" stroke="hsl(223,90%,40%)" r="54" class="pencil__body3"></circle>
          </g>
          <g transform="rotate(-90) translate(49,0)" class="pencil__eraser">
          <g class="pencil__eraser-skew">
            <rect height="30" width="30" ry="5" rx="5" fill="hsl(223,90%,70%)"></rect>
            <rect clip-path="url(#pencil-eraser)" height="30" width="5" fill="hsl(223,90%,60%)"></rect>
            <rect height="20" width="30" fill="hsl(223,10%,90%)"></rect>
            <rect height="20" width="15" fill="hsl(223,10%,70%)"></rect>
            <rect height="20" width="5" fill="hsl(223,10%,80%)"></rect>
            <rect height="2" width="30" y="6" fill="hsla(223,10%,10%,0.2)"></rect>
            <rect height="2" width="30" y="13" fill="hsla(223,10%,10%,0.2)"></rect>
          </g>
          </g>
          <g transform="rotate(-90) translate(49,-30)" class="pencil__point">
          <polygon points="15 0,30 30,0 30" fill="hsl(33,90%,70%)"></polygon>
          <polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)"></polygon>
          <polygon points="15 0,20 10,10 10" fill="hsl(223,10%,10%)"></polygon>
          </g>
        </g>
        </svg>
      </div>
      
     );
  }
  
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi ${i <= rating ? "bi-star-fill" : "bi-star"}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="container">
      <div className="card mb-3" style={{ maxWidth: "auto" }}>
        <div className="row">
          <div className="col-md-3">
            <img
              src="https://m.media-amazon.com/images/I/41K8NV99juL.jpg"
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 id="s" className="card-title">{data[0].title}</h5>
              <div className="form-group">
                <label htmlFor="">Rating</label>
                <div className="">{renderStars(data[0].rating)}</div>
              </div>
              <p className="card-text">{data[0].author}</p>
              <p className="card-text">
                <q id="book-description-text">{data[0].description}</q>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Published: {data[0].year}
                </small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  <cite>©️Copyright</cite>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default ViewBook;
