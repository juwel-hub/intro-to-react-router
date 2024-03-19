import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./Header/Header";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Home;
