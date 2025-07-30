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
  // Review,
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
            {/* <Route path="/detail/:id" element={<Review />}> */}
            <Route path="/detail/:id/check" element={<CheckTour />} />
            <Route path="/detail/:id/place" element={<Place />} />
            <Route path="/detail/:id/lows" element={<LowsTure />} />
            <Route path="/detail/:id/hostTour" element={<HostTour />} />
            <Route path="/detail/:id/coment" element={<Coment />} />
            {/* </Route> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
