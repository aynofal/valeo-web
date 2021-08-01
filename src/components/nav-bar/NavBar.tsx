import React, {FC, useMemo} from "react";
import {Link, useLocation} from "react-router-dom";
import styles from "../../features/counter/Counter.module.css";

const NavBar: FC<{}> = () => {
  const location = useLocation();
  const currentPath = useMemo(() => location.pathname, [location])

  return (
    <nav>
      <Link to="/">
        <button
          className={styles.button}
          style={currentPath === '/' ? {backgroundColor: 'rgba(112, 76, 182, 0.2)'} : undefined}
          type={"button"}
          disabled={currentPath === '/'}
        >
          Home
        </button>
      </Link>
      <Link to="/counter">
        <button
          className={styles.button}
          type={"button"}
          style={currentPath === '/counter' ? {backgroundColor: 'rgba(112, 76, 182, 0.2)'} : undefined}
          disabled={currentPath === '/counter'}
        >
          Counter
        </button>
      </Link>
    </nav>
  )
}

export default NavBar;
