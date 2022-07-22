import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import SearchAppBar from './components/AppBar';

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Tour" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;