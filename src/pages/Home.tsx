import React from "react";
import {useDispatch, useSelector} from "react-redux";

export const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);
  return <div>{username && <h1>{username}!</h1>} wlecome to our Home</div>;
};
