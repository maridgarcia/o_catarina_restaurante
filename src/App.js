import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroPage />
      <OurServices />
      <AboutUs />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
