import { NavLink } from "react-router-dom";

export default function EventLink({ path, title }) {
  return <NavLink to={path}>{title}</NavLink>;
}
