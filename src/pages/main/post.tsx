import {addDoc, collection, doc, getDocs, query, where} from "firebase/firestore/lite"
import {useEffect, useState} from "react"
import {useAuthState} from "react-firebase-hooks/auth"
import {auth, db} from "../../ts/firebase"
import {Post as IPost} from "./main"

interface Props {
  post: IPost
}

const Post = (props: Props) => {
  const {post} = props
  //shape POSTs https://bit.ly/3VNGAQb 221021
  const [user] = useAuthState(auth)

  const [likeAmount, setLikeAmount] = useState<number | null>(null)

  const likesRef = collection(db, "likes") // db = getFirestore(app)
  const likesDoc = query(likesRef, where("postId", "==", post.id))

  const getLikes = async () => {
    const data = await getDocs(likesDoc)
    setLikeAmount(data.docs.length)
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
      {/* Liking System  */}
      <div className='footer'>
        <p>@{post.username}</p>
        <button onClick={addLike}>&#128077;</button>
        {likeAmount && <p>likes:{likeAmount} </p>}
      </div>
    </>
  )
}

export default Post
