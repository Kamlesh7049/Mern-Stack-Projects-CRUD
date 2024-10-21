import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./Components/Footer";
import Footer from "./components/Footer"
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
