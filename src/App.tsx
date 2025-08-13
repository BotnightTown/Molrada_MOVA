import { useMediaQuery } from "@uidotdev/usehooks";
import HeaderMobile from "./components/HeaderMobile";
import HeaderDesktop from "./components/HeaderDesktop";

function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767.98px)");

  return (
    <div className="w-full min-h-full h-max font-e-Ukraine">
      {isSmallDevice ? <HeaderMobile /> : <HeaderDesktop />} 
    </div>
  )
}

export default App
