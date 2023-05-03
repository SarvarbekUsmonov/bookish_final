import React, { useRef } from "react";
import NavBar from "./components/Navbar"

function Post() {
  const formRef = useRef(null);
  const refAuthor = useRef(null);
  const refTitle = useRef(null);
  const refYear = useRef(null);
  const refGenre = useRef(null);
  const refImg = useRef(null);
  const refDesc = useRef(null);

  function post() {
    fetch("http://localhost:4000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: refTitle.current.value,
        author: refAuthor.current.value,
        year: parseInt(refYear.current.value),
        genre: refGenre.current.value,
        description: refDesc.current.value,
        image: refImg.current.value,
      }),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formRef.current.reportValidity()) {
      post();
    }
  }

  return (
    <div>
      <NavBar></NavBar>
      <style>
      {".searchSection { visibility:hidden !important }"}
      </style>
    <form className="container mt-5" onSubmit={handleSubmit} ref={formRef}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          ref={refTitle}
          type="text"
          name="title"
          id="title"
          className="form-control"
          placeholder="Title"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          ref={refDesc}
          type="text"
          name="description"
          id="description"
          className="form-control"
          placeholder="Description"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input
          ref={refAuthor}
          type="text"
          name="author"
          id="author"
          className="form-control"
          placeholder="Author"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label me-3">Year:</label>
        <select
          ref={refYear}
          className="form-select"
          aria-label="Year"
          menuPosition="fixed"
          required
        >
          <option value="">Year</option>
          {Array.from(
            { length: new Date().getFullYear() - 1900 },
            (_, index) => (
              <option key={index}>
                {new Date().getFullYear() - index}
              </option>
            )
          )}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="genre" className="form-label">
          Genre
        </label>
        <select
        ref={refGenre}
        className="form-select"
        aria-label="Genre"
        menuPosition="fixed"
        required
        >
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
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image
        </label>
        <input
          ref={refImg}
          type="text"
          name="image"
          id="image"
          className="form-control"
          placeholder="Image URL"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
    </div>
  );
}

export default Post;