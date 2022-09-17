import React, {useState} from "react";
import {login, logout} from "../store";
import {useDispatch, useSelector} from "react-redux";

export const Login = () => {
  const [newUserName, setNewUserName] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <h1>
      this is Login page
      <input
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(login({username: newUserName}));
        }}
      >
        Submit Login
      </button>
      <button>Logout</button>
      <p>welcome {username}</p>
    </h1>
  );
};
