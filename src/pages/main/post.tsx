import {Post as IPost} from "./main"

interface Props {
  post: IPost
}

const Post = (props: Props) => {
  const {post} = props
  return <div></div>
}

export default Post
