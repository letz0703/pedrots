import {Link} from "react-router-dom";
import styles from "./navbar.module.css";
import {auth} from "../ts/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

type Props = {};

export const Navbar = (props: Props) => {
  // const [user, loading, error] = useAuthState(auth);
  const [user] = useAuthState(auth);

  return (
    <>
      <div className={styles.nav}>
        <Link to='/'>home</Link>
        <Link to='/login'>login</Link>
      </div>
      <div>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} width='100' height='100' />
      </div>
    </>
  );
};
