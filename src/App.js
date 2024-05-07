import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Assessments from "./pages/Assessments";
import JobDescriptions from "./pages/JobDescriptions";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-descriptions" element={<JobDescriptions />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/resources" element={<Resources />} />
          {/* A catch-all route for unknown paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
