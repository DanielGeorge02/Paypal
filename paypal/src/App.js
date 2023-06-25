import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/CSS/App.css";
import Activity from "./Activity";
import Home from "./JS/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/activity" element={<Activity />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
