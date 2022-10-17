import {useState} from "react";
import {getDocs, collection} from "firebase/firestore/lite";
import {db} from "../ts/firebase";

interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}
export const Main = () => {
  const [postList, setPostList] = useState<Post[] | null>(null);
  const postRef = collection(db, "posts");

  const getDocs_Posts = async () => {
    const result = await getDocs(postRef);
    // console.log(result.docs.map((row) => ({...row.data(), id: row.id})));
    setPostList(result.docs.map((row) => ({...row.data(), id: row.id})) as Post[]);
  };
  // XXX: PEDRO 17월-2210
  // https://youtu.be/skstYc-K6ws?list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&t=619

  getDocs_Posts();

  return <div>Home Page</div>;
};
