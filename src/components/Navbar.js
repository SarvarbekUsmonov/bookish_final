import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageWithFallback from "./ImageWithFallback";

function Navbar() {
  const navBarReact = useRef(null); // create a ref using useRef hook
  const [searchValue, setSearchValue] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleSearchInputChange() {
    setSearchValue(navBarReact.current.value);
  }

  useEffect(() => {
    fetch("http://localhost:3000/get/avatar", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((data) => setAvatar(data.avatar))
      .catch((err) => console.log(err));
  }, []);

  const fallbackImageUrl =
    "https://www.shareicon.net/data/512x512/2016/02/22/722964_button_512x512.png";

  return (
    <div>
      <nav className="navbar navbar-expand-md sticky-top bg-white m-0 py-0">
        <a href="/">
          <img
            className="rounded d-block mx-4"
            alt=""
            id="logo-img"
            src={require("../images/photo_2023-04-13 23.51.37.jpeg")}
          />
        </a>
        <a className="navbar-brand" href="/">
          Bookish
        </a>
        <form
          className="d-flex mx-auto search"
          role="search"
          id="searchFormNavbar"
        >
          <input
            ref={navBarReact}
            id="search-bar"
            className="form-control me-2 mx-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearchInputChange}
          ></input>
          <Link
            id="search-button"
            className="btn btn-outline-success mx-auto"
            to={`/search?input=${searchValue}`}
          >
            Search
          </Link>
        </form>
        <button
          id="loginButton"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          <span>Log in</span>
        </button>
        <button
          id="signupButton"
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          <span>Sign up</span>
        </button>
        {console.log(avatar)}
        <ImageWithFallback
          inputImageUrl={avatar}
          fallbackImageUrl={fallbackImageUrl}
          className="card card-img-top"
          style={{ marginTop: "10px" }}
          alt="book cover"
          id="pfp-img"
        />
      </nav>
    </div>
  );
}

export default Navbar;