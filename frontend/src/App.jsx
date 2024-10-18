import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search"
import Update from "./pages/Update";



const App = () => {
  return (
    <>
      {/* <h1 style={{textAlign:"center"}}>Welcome</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="insert" element={<Insert />} />
            <Route path="display" element={<Display />} />
            <Route path="search" element={<Search/>} />
            <Route path="update" element={<Update/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

