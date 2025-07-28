import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import { LandingPage, DetailPage } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<App />} />
          <Route path="/" element={<LandingPage />}>
            <Route path="/*" element={<LandingPage />} />
          </Route>
          <Route path="/detail/:id" element={<DetailPage />} />
          {/* Add other routes here as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
