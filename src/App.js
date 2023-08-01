import "./App.css";
import { GlobalStyles } from "./globalstyle.js/globalStyle";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SecOne from "./components/layouts/Section1";
import MiddleSec from "./components/layouts/Sec2/MiddleSec";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <SecOne />
      <MiddleSec />

      <>
        <Footer />
      </>
    </>
  );
}

export default App;
