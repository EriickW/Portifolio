import React from "react";
import Home from "./pages/Home";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projetos" element={<Home/>}/>
      </Routes>
   </Router>
  )
}

export default App
