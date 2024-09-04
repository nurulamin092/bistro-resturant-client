import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
