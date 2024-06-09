import About from "./components/about/About";
import SocilaLinks from "./components/SocialLinks";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Portfolio from "./portfolio/Portfolio";
import Experience from "./experience/Experience";

const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <SocilaLinks />
      <Portfolio />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
