import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/tamplates/Layout.tsx";
import LandingPage from "./pages/landingpage/LandingPage.tsx";
// import App from "./App.tsx";
// import { BrowserRouter, Route, Routes } from "react-router";
// import Layout from "./components/tamplates/Layout.tsx";
// import LandingPage from "./pages/landingpage/LandingPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/home" element={<LandingPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>
);
