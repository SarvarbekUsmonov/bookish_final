import Home from "./Home"
import View from './View'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import Post from "./Post";
import Signup from "./SignUp";
import ChangeAvatar from "./ChangeAvatar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/view' element = {<View/>} />
          <Route path='/login' element = {<Login/>} />
          <Route path="/search" element= {<Search/>}/>
          <Route path="/post" element={<Post />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/avatar" element={<ChangeAvatar/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
