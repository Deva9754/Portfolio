// import About from "./components/about/About";
import SocilaLinks from "./components/SocialLinks";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <SocilaLinks />
      <Contact />
      <Footer />
      {/* <About /> */}
    </div>
  );
};
export default App;
