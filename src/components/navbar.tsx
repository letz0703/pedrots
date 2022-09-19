import {Link} from "react-router-dom";
import styles from "./navbar.module.css";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div className={styles.nav}>
      <Link to='/'>home</Link>
      <Link to='/login'>login</Link>
      <Link to='/contact'>contact</Link>
    </div>
  );
};
