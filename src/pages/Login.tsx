import {auth, provider} from "../ts/firebase";
import {signInWithPopup} from "firebase/auth";
import React, {useState} from "react";
import {login, logout} from "../store";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [newUserName, setNewUserName] = useState<string>("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <h1>
      <p>계속 하시려면 암호를 넣거나, google로 로그인 하세요</p>

      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewUserName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(login({username: newUserName}));
        }}
      >
        로그인
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <button onClick={signInWithGoogle}>google 로그인</button>
      <p>welcome {username}</p>
    </h1>
  );
};
