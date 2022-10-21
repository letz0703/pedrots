import {addDoc, collection, doc, getDocs, query, where} from "firebase/firestore/lite"
import {useEffect, useState} from "react"
import {useAuthState} from "react-firebase-hooks/auth"
import {auth, db} from "../../ts/firebase"
import {Post as IPost} from "./main"

interface Props {
  post: IPost
}

interface Like {
  userId: string
}

const Post = (props: Props) => {
  const {post} = props
  //shape POSTs https://bit.ly/3VNGAQb 221021
  const [user] = useAuthState(auth)

  const [like, setLike] = useState<Like[] | null>(null)

  const likesRef = collection(db, "likes") // db = getFirestore(app)
  const likesDoc = query(likesRef, where("postId", "==", post.id))

  const getLikes = async () => {
    const data = await getDocs(likesDoc)
    setLike(data.docs.map((row) => ({userId: row.data().userId})))
    // console.log(data.docs.map((row) => ({...row.data(), id: row.id})))
  }

  const addLike = async () => {
    await addDoc(likesRef, {userId: user?.uid, postId: post.id})
  }

  useEffect(() => {
    getLikes()
  }, [])

  return (
    <>
      <div className='title'>
        <h1>{post.title}</h1>
      </div>
      <div className='body'>
        <p>{post.description}</p>
      </div>
      {/* Liking System : https://bit.ly/3SmeIzo */}
      <div className='footer'>
        <p>@{post.username}</p>
        <button onClick={addLike}>&#128077;</button>
        {like && <p>likes:{like.length} </p>}
      </div>
    </>
  )
}

export default Post
