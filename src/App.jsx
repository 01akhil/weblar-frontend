
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
 

  return (
    <>
       <Router>
        <Routes>
        
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<ProtectedRoute>
          <Home/>
        </ProtectedRoute>} />
      
        
        </Routes>
      </Router>
    </>
  )
}

export default App
