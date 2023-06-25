import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/CSS/App.css";
import Activity from "./Activity";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Activity />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
