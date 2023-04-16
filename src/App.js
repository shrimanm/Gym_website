import "./App.css";
import Hero from "./component/Hero";
import Footer from "./component/footer/Footer";
import Join from "./component/join/Join";
import Plans from "./component/plans/Plans";
import Programs from "./component/programs/Programs";
import Reasons from "./component/reasons/Reasons";
import Testimonials from "./component/testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
