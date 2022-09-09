import Header from "./layouts/header/header.layout";
import Landing from "./layouts/landing/landing.layout";
import "./App.css";
import Features from "./layouts/features/features.layout";
import Extension from "./layouts/extension/extension.layout";
import FAQ from "./layouts/faq/faq.layout";
import CTA from "./layouts/cta/cta.layout";
import Footer from "./layouts/footer/footer.layout";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Features />
      <Extension />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
