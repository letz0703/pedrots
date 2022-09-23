import {Link} from "react-router-dom";
import styles from "./navbar.module.css";
import {auth} from "../ts/firebase";

type Props = {};

export const Navbar = (props: Props) => {
  const displayUserName = auth.currentUser?.displayName;
  const displayUserPhoto = auth.currentUser?.photoURL;

  return (
    <>
      <div className={styles.nav}>
        <Link to='/'>home</Link>
        <Link to='/login'>login</Link>
        <Link to='/contact'>contact</Link>
      </div>
      <div>
        <p>{displayUserName}</p>
        <img src={displayUserPhoto || ""} />
      </div>
    </>
  );
};
