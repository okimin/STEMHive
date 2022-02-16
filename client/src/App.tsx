import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./screens/Home";
import { About } from "./screens/About";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
