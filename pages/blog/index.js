import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
   <div>
     <h1>this is a Blog</h1>
     <ul>
        <li>
            <Link href="blog/2020">2020</Link>
        </li>
        <li>
            <Link href="blog/2020/10">2020/10</Link>
        </li>
        <li>
            <Link href="blog/2020/10/1">2020/10/1</Link>
        </li>
     </ul>
   </div>
  )
}

export default Blog