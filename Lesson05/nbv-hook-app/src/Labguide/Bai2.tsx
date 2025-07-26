import React, { useEffect, useState } from 'react'
interface Post {
    id:number,
    title:string
}
export default function Bai2() {
    const [posts,setPosts] = useState<Post[]>([]);
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setPosts(data));
    },[]);
  return (
    <div>
        <h2>Danh sách bài viết</h2>
        <ul>
            {posts.slice(0,10).map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}
