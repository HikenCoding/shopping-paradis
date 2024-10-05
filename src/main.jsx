import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import './index.css'; // Tailwind korrekt eingebunden

// Import deiner Seiten
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Shopping from "./pages/Shopping";

// Layout-Komponente (mit Navbar und Outlet für Routen)
function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-500 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-lg">
            <Link to="/">ShoppingParadies</Link>
          </div>

          {/* Hamburger Icon für Mobile */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:w-auto w-full`}
          >
            <ul className="text-white lg:flex space-x-4">
              <li className="py-2 lg:py-0">
                <Link to="/" className="hover:text-gray-200">Home</Link>
              </li>
              <li className="py-2 lg:py-0">
                <Link to="/blogs" className="hover:text-gray-200">Blogs</Link>
              </li>
              <li className="py-2 lg:py-0">
                <Link to="/contact" className="hover:text-gray-200">Contact</Link>
              </li>
              <li className="py-2 lg:py-0">
                <Link to="/shopping" className="hover:text-gray-200">Shopping</Link>
              </li>
              <li className="py-2 lg:py-0">
                <Link to="/nopage" className="hover:text-gray-200">NoPage</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hier werden die Seiteninhalte gerendert */}
      <div className="container mx-auto px-4 py-8">
        <Outlet /> {/* WICHTIG: Outlet zum Rendern der verschachtelten Routen */}
      </div>
    </div>
  );
}

// Hauptkomponente App mit Routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Home-Seite */}
          <Route path="blogs" element={<Blogs />} /> {/* Blogs-Seite */}
          <Route path="contact" element={<Contact />} /> {/* Kontakt-Seite */}
          <Route path="shopping" element={<Shopping />} /> {/* Shopping-Seite */}
          <Route path="*" element={<NoPage />} /> {/* 404-Seite */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



// Rendern der App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
