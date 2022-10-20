import {Post as IPost} from "./main"

interface Props {
  post: IPost
}

const Post = (props: Props) => {
  const {post} = props
  //TODO: shape POSTs
  return (
    <>
      <div className='title'>
        <h1>{post.title}</h1>
      </div>
      <div className='body'>
        <p>{post.description}</p>
      </div>
      <div className='footer'>
        <p>@{post.username}</p>
      </div>
    </>
  )
}

export default Post
