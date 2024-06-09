import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TechRoles from "./pages/TechRoles";
import SkillEvaluationStart from "./pages/skill-evaluation/SkillEvaluationStart";
import CareerRecommendations from "./pages/skill-evaluation/CareerRecommendations";
import KnowledgeHub from "./pages/KnowledgeHub";
import Developer from "./pages/positions/Developer";
import ProductManager from "./pages/positions/ProductManager";
import UXDesigner from "./pages/positions/UXDesigner";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [evaluationResults, setEvaluationResults] = useState(null);

  const handleFormSubmit = (results) => {
    setEvaluationResults(results);
    setFormSubmitted(true);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-roles" element={<TechRoles />} />
          <Route
            path="/skill-evaluation"
            element={<SkillEvaluationStart onSubmit={handleFormSubmit} />}
          />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/product-manager" element={<ProductManager />} />
          <Route path="/ux-designer" element={<UXDesigner />} />
          <Route
            path="/career-recommendations"
            element={
              formSubmitted ? (
                <CareerRecommendations results={evaluationResults} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          {/* A catch-all route for unknown paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
