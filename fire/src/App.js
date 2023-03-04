import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Body from "./pages/Body";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Body" element={<Body />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
