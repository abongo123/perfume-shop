import { Link } from "react-router-dom";

export default function RightNav() {
  return (
    <nav className="fixed right-0 top-0 h-full w-40 flex items-center justify-center">
      <ul className="space-y-6 text-right text-white font-medium">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/shop" className="hover:underline">Shop All</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </li>
        <li>
          <Link to="/cart" className="hover:underline">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
