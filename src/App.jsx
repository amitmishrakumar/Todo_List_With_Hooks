
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() { return <h2>🏠 Home Page</h2>; }
function About() { return <h2>ℹ️ About Page</h2>; }
function Contact() { return <h2>📞 Contact Page</h2>; }

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

