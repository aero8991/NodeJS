import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Register from "./Register"
import Premium from "./PremiumContent"
import Login from "./Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <div className="header">
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/register">Register</NavLink>
        <NavLink activeClassName="active" to="/login">Login</NavLink>
        <NavLink activeClassName="active" to="/premium-content">Premium Content</NavLink>

      </div>

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route  path="/premium" element={<Premium/>}/>

        </Routes>
        
        </div> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
