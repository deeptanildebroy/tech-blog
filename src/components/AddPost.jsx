import React, { useState } from 'react'
import Header from './Header'

const AddPost = () => {

    const [posts,setPosts] = useState([
        {id:1,title:"post 1"},
        {id:2,title:"post 2"},
        {id:3,title:"post 3"},
    ])
  return (
    <div>
        <Header/>
        <div>
          {posts.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
    </div>
  )
}

export default AddPost