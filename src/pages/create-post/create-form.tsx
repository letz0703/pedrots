import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
//import styles from './create-form.module.css'
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../ts/firebase";

export const CreateForm = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Need Title"),
    description: yup.string().required("Descritption")
  });

  interface createFormData {
    title: string;
    description: string;
  }

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<createFormData>({resolver: yupResolver(schema)});

  const onCreatePost = (data: createFormData) => {
    console.log(data);
  };

  const postRef = collection(db, "posts");
  return (
    <>
      <h1>CreateForm</h1>
      <form onSubmit={handleSubmit(onCreatePost)}>
        <input placeholder='Title...' {...register("title")} />
        <p>{errors.title?.message}</p>
        <textarea placeholder='Description...' {...register("description")} />
        <p>{errors.description?.message}</p>
        <input type='submit' />
      </form>
    </>
  );
};

export default CreateForm;
