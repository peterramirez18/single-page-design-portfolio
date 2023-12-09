import AboutMe from "./components/AboutMe";
import CallWithMe from "./components/CallWithMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MyWork from "./components/MyWork";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <MyWork />
        <CallWithMe />
      </main>
      <Footer />
    </>
  );
}

export default App;
