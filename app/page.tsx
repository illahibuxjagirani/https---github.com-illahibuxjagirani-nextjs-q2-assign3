import Customize from "./components/Customize";
import Extension from "./components/Extension";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Sponsors from "./components/Sponsors";
import Task from "./components/Task";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Project/>
     <Work/>
     <Extension/>
     <Customize/>
     <Task/>
     <Sponsors />
     <Footer/>
    </div>
  );
}
