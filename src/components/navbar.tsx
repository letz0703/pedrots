import {Link} from "react-router-dom";
import styles from "./navbar.module.css";
import {auth} from "../ts/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

type Props = {};

export const Navbar = (props: Props) => {
  // const [user, loading, error] = useAuthState(auth);
  const [user] = useAuthState(auth);
  //TODO: menu design 수정
  return (
    <>
      <div className={styles.nav}>
        <Link to='/'>home</Link>
        {!user ? (
          <Link to='/login'>login</Link>
        ) : (
          <>
            <Link to='/create-post'>create a post</Link>
          </>
        )}
        <div className={styles.google_user_info}>
          <p>{user?.displayName}</p>
          <img src={user?.photoURL || ""} />
        </div>
      </div>
    </>
  );
};
