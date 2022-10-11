import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDocs, collection} from "firebase/firestore";
import {db} from "../ts/firebase";

export const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);
  const postRefs = collection(db, "posts"); // db = getFirestore(app)
  const [postList, setPostList] = useState(null);

  const getPost = async () => {
    const data = await getDocs(postRefs); // ac acbal 사용
  };

  return <div>{username && <h1>{username}!</h1>} wlecome to our Home</div>;
};

/* 데이터를 저장할 공간 생성 하고 keep trackin용
Track receivedData {
  1 : {list : "postList"},
  2 : {makeFun : "getPosts"},
  3 : {letz : "put ref into getDoc(레퍼런스 넣기)"
}

 */

/* Display Data {
  1 : import getDocs and collection
  2 : postRef 카피 from /create-form
  3 : import db with fix (kf) key
}*/
