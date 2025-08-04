import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App.tsx";
import {
  LandingPage,
  DetailPage,
  CheckTour,
  Place,
  LowsTure,
  HostTour,
  Coment,
  Login,
  SignUp,
  AboutUs,
  CallUs,
  HotelTour,
} from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<App />} />
          <Route path="/hotel" element={<HotelTour />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/callUs" element={<CallUs />} />
          <Route path="/" element={<LandingPage />}>
            <Route path="/*" element={<LandingPage />} />
          </Route>
          <Route path="/detail/:id" element={<DetailPage />}>
            <Route index element={<CheckTour />} />
            <Route path="check" element={<CheckTour />} />
            <Route path="place" element={<Place />} />
            <Route path="lows" element={<LowsTure />} />
            <Route path="hostTour" element={<HostTour />} />
            <Route path="coment" element={<Coment />} />
          </Route>
          {/* <Route path="/detail/:id" element={<DetailPage />}>
            <Route path="/detail/:id/reserved" element={<ReservedMenu />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
