import { NavLink } from "react-router-dom";

export const Menu: React.FC = (): JSX.Element => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Tasks</NavLink>
          </li>
          <li>
            <NavLink to={"/addTask"}>Add Tasks</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
