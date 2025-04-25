import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import "../assets/css/components/card.css"
import { getPost } from "../api/api"

export const Post = ({ url }) => {
  const [post, setPost] = useState({})

  const { id } = useParams()
  
  useEffect(() => {
    getPost(`/posts/${id}`, setPost)
  }, [id])

  return (
    <main className="container flex flex--center">
      <article className="card post">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="text__card">{post.body}</p>
      </article>
    </main>
  )
}

