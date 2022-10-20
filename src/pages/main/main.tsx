import {useEffect, useState} from "react"
import {getDocs, collection} from "firebase/firestore/lite"
import {db} from "../../ts/firebase"
import Post from "./post"

export interface Post {
  id: string
  userId: string
  title: string
  username: string
  description: string
}
export const Main = () => {
  const [postList, setPostList] = useState<Post[] | null>(null)
  const postRef = collection(db, "posts")

  const getDocs_postRef = async () => {
    const result = await getDocs(postRef)
    // console.log(result.docs.map((row) => ({...row.data(), id: row.id})));
    setPostList(result.docs.map((row) => ({...row.data(), id: row.id})) as Post[])
  }
  // PEDRO 17월-2210
  // https://youtu.be/skstYc-K6ws?list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&t=619

  useEffect(() => {
    getDocs_postRef()
  }, [])

  // return <div>Home Page</div>
  return (
    <div>
      <h1>hi</h1>
      {postList?.map((row) => (
        <Post post={row} />
      ))}
    </div>
  )
}
