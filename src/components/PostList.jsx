import { useState, useEffect } from 'react'
import { PostItem } from './PostItem';

export function PostList(){

  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@michaeldsimmons')
    .then(response => response.json())
    .then(data => {
      console.log(data.items);
      setPosts(data.items)
    })
  },[]);
  
  
  return(
    <section className="repository-list">   
      <div className="main-title">
        <h1>Posts imported from Medium</h1>
      </div>
   
        { 
          posts.slice(0, 5).map((post) => {
            return <PostItem key={post.title} post={post} />
          })

        }
        
    </section>
  );
}