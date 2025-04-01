import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register"; // ✅ Add this line

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />{" "}
            {/* ✅ Add this line */}
            {/* You can add Programs, Events, About here later */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
