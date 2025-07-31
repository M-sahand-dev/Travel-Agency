import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import {
  LandingPage,
  DetailPage,
  CheckTour,
  Place,
  LowsTure,
  HostTour,
  Coment,
  Review,
  ProductDetails,
} from "./components";

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
          <Route path="/detail/:id" element={<DetailPage />}>
            <Route path="check" element={<CheckTour />} />
            <Route path="place" element={<Place />} />
            <Route path="lows" element={<LowsTure />} />
            <Route path="hostTour" element={<HostTour />} />
            <Route path="coment" element={<Coment />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
