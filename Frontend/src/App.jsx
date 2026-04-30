import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
// import Projects from "./components/Projects";
// import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CounterSection from "./components/CounterSection";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ScrollTop from "./components/ScrollTop";
import PastProjectsPage from "./pages/PastProjectsPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import ScrollDefault from "./components/ScrollDefault";

const router = createBrowserRouter(
  [
    {
      path:"*",
      element:
      <div>
        <ScrollDefault />
        <Header />
        <Slider />
        <About />
        <Features />
        <Services />
        <CounterSection/>
        {/* <Projects /> */}
        {/* <FAQ /> */}
        <Footer />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    },
    {
      path:"/about",
      element:
      <div>
        <ScrollDefault />
        <Header />
        <AboutPage />
        <Footer />
        <ScrollTop />
      </div>
    },
    {
      path:"/past-projects",
      element:
      <div>
        <ScrollDefault />
        <Header />
        <PastProjectsPage />
        <Footer />
        <ScrollTop />
      </div>
    },
    {
      path:"/clients",
      element:
      <div>
        <ScrollDefault />
        <Header />
        <ClientsPage />
        <Footer />
        <ScrollTop />
      </div>
    },
    {
      path:"/contact",
      element:
      <div>
        <ScrollDefault />
        <Header />
        <ContactPage />
        <Footer />
        <ScrollTop />
      </div>
    },
    // {
    //   path:"/pastes/:id",
    //   element:
    //   <div>
    //     <NavBar />
    //     <ViewPaste />
    //   </div>
    // },
  ]
)


function App() {
  return (
    // <Router>
    //   <Header />
    //   <Slider />
    //   <Features />
    //   <About />
    //   <Services />
    //   <Projects />
    //   <FAQ />
    //   <Footer />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </Router>
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
