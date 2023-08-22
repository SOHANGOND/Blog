import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import Post from "./components/post/Post";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";



function App() {
  const {user} = useContext(Context)

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route path="/register" element={user?<Home/>:<Register />} ></Route>
          <Route path="/login" element= {user ?<Home /> : <Login />} ></Route>
          <Route path="/write" element={user?<Write />:<Register/>} ></Route>
          <Route path="/setting" element={user?<Setting />:<Register/>} ></Route>
          <Route path="/post/:postId" element={<Single />} ></Route>

        </Routes>
      </Router>

    </>
  );
}

export default App;
