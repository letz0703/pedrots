import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
//import styles from './create-form.module.css'

export const CreateForm = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Error Message"),
    description: yup.string().required("Error Message")
  });
  const myStyle = {
    backgroundColor: "orange"
  };
  return (
    <>
      <h1 style={myStyle}>CreateForm</h1>
      <input placeholder='Title...' />
      <textarea placeholder='Description...' />
      <input type='submit' />
    </>
  );
};

export default CreateForm;
