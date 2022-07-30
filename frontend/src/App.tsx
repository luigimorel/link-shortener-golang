import "./styles/App.css";

import { Route, Routes } from "react-router-dom";

import { Home } from "./components/Home";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
     </Routes>
  );
}

export default App;
