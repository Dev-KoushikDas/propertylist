import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import List2 from "./pages/list/List2";
import Location1 from "./pages/list/Location1";
import Location2 from "./pages/list/Location2";
import Location3 from "./pages/list/Location3";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/list" element={<List2/>}/>
        <Route path="/locationkolkata" element={<Location1/>}/>
        <Route path="/locationbarasat" element={<Location2/>}/>
        <Route path="/locationsaltlake" element={<Location3/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
