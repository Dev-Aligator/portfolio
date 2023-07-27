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
  const data = FetchData<Models.Banner>("banner/", false) as
    | Models.Banner
    | undefined;
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner bannerData={data}></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
