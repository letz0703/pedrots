import {useState} from "react";
import {getDocs, collection} from "firebase/firestore/lite";
import {db} from "../ts/firebase";

export const Main = () => {
  const [postList, setPostList] = useState("");
  const postRef = collection(db, "posts");

  const getPosts = async () => {
    const result = await getDocs(postRef);
  };

  return <div>Home Page</div>;
};
