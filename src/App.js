import Header from "./layouts/header/header.layout";
import Landing from "./layouts/landing/landing.layout";
import "./App.css";
import Features from "./layouts/features/features.layout";
import Extension from "./layouts/extension/extension.layout";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Features />
      <Extension />
    </div>
  );
}

export default App;
