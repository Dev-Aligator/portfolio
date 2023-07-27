import "./App.css";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import * as Models from "./DataInterfaces";
import FetchData from "./FetchData";
function App() {
  const bannerData = FetchData<Models.Banner>("banner/", false) as
    | Models.Banner
    | undefined;

  const skillsData = FetchData<Models.Skill>("skills/", true) as Models.Skill[];
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner bannerData={bannerData}></Banner>
      <Skills skillData={skillsData}></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
