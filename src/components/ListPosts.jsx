import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "../assets/css/components/card.css"
import {getPost} from "../api/api"

export const ListPosts = ({ url }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPost(url, setPosts)
  }, [url])
  
  return (
    <section className="posts container">
      {
        posts.map( post => {
          const { id, title, metadescription, category } = post;
          return <Link to={`/posts/${id}`} key={id} className={`post__card post-card--${category}`}>
            <article>
              <h3 className="post-card__title">
                {title}
              </h3>
              <p className="post-card__meta">{metadescription}</p>
            </article>
            </Link>
        })
      }
    </section>
  ) 
}
