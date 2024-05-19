import Link from 'next/link'
import { POST } from '../types/Types'

const Post: React.FC<POST> = ({ id, title }) => {
  return (
    <div>
      <span>{id}</span>
      {' : '}
      <Link href={`/posts/${id}`} className="cursor-pointer border-b border-gray-500 hover:bg-gray-300">
        {title}
      </Link>
    </div>
  )
}
export default Post
