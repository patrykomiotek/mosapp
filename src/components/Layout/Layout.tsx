import { memo } from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = memo(() => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
    </ul>
  </nav>
));

const Footer = memo(() => (
  <footer>
    <p>&copy; 2023 ML</p>
  </footer>
));

export const Layout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};
