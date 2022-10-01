import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
//import styles from './create-form.module.css'

export const CreateForm = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Error Message"),
    description: yup.string().required("Error Message")
  });

  const res_schema_into_yupResolver = yupResolver(schema);
  const {} = useForm({resolver: res_schema_into_yupResolver});
  const myStyle = {
    backgroundColor: "orange"
  };
  return (
    <>
      <h1 style={myStyle}>CreateForm</h1>
      <form>
        <input placeholder='Title...' />
        <textarea placeholder='Description...' />
        <input type='submit' />
      </form>
    </>
  );
};

export default CreateForm;
