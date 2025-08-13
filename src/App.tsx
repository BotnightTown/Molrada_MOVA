import { useMediaQuery } from "@uidotdev/usehooks";
import HeaderMobile from "./components/HeaderMobile";
import HeaderDesktop from "./components/HeaderDesktop";

function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767.98px)");

  return (
    <>
      {isSmallDevice ? <HeaderMobile /> : <HeaderDesktop />} 
    </>
  )
}

export default App
