import About from "./About";
import Home from "./Home";
import Menu from "./menu";

const Layout = () => {
  return (
    <div className="main-container">
      <Home />
      <Menu />
      <About />
    </div>
  );
};
export default Layout;
