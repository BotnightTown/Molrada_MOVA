import { useMediaQuery } from "@uidotdev/usehooks";
import { Routes, Route } from "react-router";
import HeaderMobile from "./components/HeaderMobile";
import HeaderDesktop from "./components/HeaderDesktop";
import MainPage from "./pages/MainPage";

function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767.98px)");

  return (
    <div className="w-full min-h-full h-max font-e-Ukraine">
      {isSmallDevice ? <HeaderMobile /> : <HeaderDesktop />}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      {/* footer */}
    </div>
  )
}

export default App
