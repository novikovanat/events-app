import { Link } from "react-router-dom";
import { HiHomeModern } from "react-icons/hi2";


export default function NavigationComponent() {
  
  return (
    <nav>
      <Link to="/">
      <HiHomeModern />
      <span>Home</span></Link>
    </nav>
  );
}
