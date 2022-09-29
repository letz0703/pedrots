import {CreateForm} from "./create-form";
import React from "react";
//import styles from './create-post.module.css'

const CreatePost = () => {
  const myStyle = {
    backgroundColor: "orange"
  };
  return (
    <>
      <h1 style={myStyle}>CreatePost</h1>
      <CreateForm />
      {/* ep11. */}
    </>
  );
};

export default CreatePost;
