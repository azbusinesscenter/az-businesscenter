import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./i18n";

import App from "./App";
import Activities from "./Activities";
import Tarifs from "./Tarifs";
import TarifsCreationEntreprise from "./TarifsCreationEntreprise";
import TarifsSyndic from "./TarifsSyndic";
import TarifsSousLocation from "./TarifsSousLocation";

import "./index.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        position: "fixed",
        inset: 0,
        background: "#061222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}>
        <img
          src="/logo.png"
          alt="AZ Business Center"
          style={{
            width: "200px",
            objectFit: "contain",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(0.95); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/tarifs/creation-entreprise" element={<TarifsCreationEntreprise />} />
        <Route path="/tarifs/syndic" element={<TarifsSyndic />} />
        <Route path="/tarifs/sous-location" element={<TarifsSousLocation />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);