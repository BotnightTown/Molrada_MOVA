import { useMediaQuery } from "@uidotdev/usehooks";
import { Routes, Route } from "react-router";
import HeaderMobile from "./components/HeaderMobile";
import HeaderDesktop from "./components/HeaderDesktop";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import MapPage from "./pages/MapPage";
import FeedbackPage from "./pages/FeedbackPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767.98px)");

  return (
    <div className="w-full min-h-full h-max font-e-Ukraine">
      {isSmallDevice ? <HeaderMobile /> : <HeaderDesktop />}
      <ScrollToTop />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
