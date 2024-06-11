import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Menu from "./Components/Menu/Menu";
import RouterProducts from "./Pages/Products/RouterProducts";


function App() {
  return (
    <div>
      <BrowserRouter>
       <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/*" element={<RouterProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
