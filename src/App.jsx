import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
