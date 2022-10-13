import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDocs, collection} from "firebase/firestore/lite";
import {db} from "../ts/firebase";

export const Home = () => {
  // const username = useSelector((state: any) => state.user.value.username);
  const [postList, setPostList] = useState(null);
  const postRef = collection(db, "posts"); // db = getFirestore(app)

  const getPosts = async () => {
    const data = await getDocs(postRef);
    console.log(data);
  };

  getPosts();

  return <div>Home Page</div>;

  // return <div>{username && <h1>{username}!</h1>} wlecome to our Home</div>;
};
