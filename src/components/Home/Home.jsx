import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
