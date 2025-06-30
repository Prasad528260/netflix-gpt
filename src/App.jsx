import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Body from "./components/Body";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Login />} />
          <Route path="browse" element={<Browse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
