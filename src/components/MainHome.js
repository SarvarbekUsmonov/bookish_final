import { useNavigate } from "react-router-dom";


function MainHome(){
  let navigate = useNavigate(); 
  const routeChangePost = () =>{  
    fetch('http://localhost:4000/userValid', {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      console.log(response.status)
      if (response.status === 200) {
        navigate('/post')
    }
    else{
      alert("Please login first")
      navigate('/login')
    }
    }
    )
    
  }
  const routeChangeAvatar = () =>{  
    navigate('/avatar');
  }
  return(
    <div id="main" className="row">
      <div id="main-page">
        <div id="text" className="column">
          <p style={{ fontWeight: 500, fontSize: "4em" }}>Bookish</p>
          <p style={{fontWeight: 300, fontSize: "1.5em"}}>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. 
            Tellus elementum sagittis vitae et</p>
        </div>
        <div id="background"><img alt="bacground-img"></img></div>
        <div id="buttons" className="d-flex justify-content-center align-items-center position-absolute bottom-0 start-50 translate-middle-x">
          <button className="cssbuttons-io-button mb-5 mr-5" onClick={routeChangePost}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
            <span>Add Book</span>
          </button>
          <button id="avatar" className="mb-5 ml-2" onClick={routeChangeAvatar}>
            Change Avatar
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainHome;
