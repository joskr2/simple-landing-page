import React from 'react'

const getPosts = async () => {
  try {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    ).then(
      res => res.json()
    )

    const posts = data.map((post: any) => ({
      title: post.title,
      body: post.body
    }))

    return posts
  } catch (error) {
    console.error(error)
  }
}

interface Post {
  title: string
  body: string,
  userId: number | string
}

const getToken = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    },
    body: JSON.stringify({
      email: ''
    })
  })

  return data.json()
}

export const postPosts = async (url: string, newPost: Post, token?: string) => {
  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'bearer': token ? token : ''
    },
    body: JSON.stringify(newPost)
  }).then(
    res => res.json()
  )
  return data
}

const Posts = async () => {
  const posts = await getPosts()
  // const token = await getToken()
  // const newPost = {
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1
  // }

  // const newPost2 = await postPosts('https://jsonplaceholder.typicode.com/posts', newPost, token) .then((response) => response.json())
  // .then((json) => console.log(json));

  return (
    <>
      <div className='flex flex-col m-auto  p-5 gap-4'>
        <h1 className='text-3xl fw-bold'>
          Posts
        </h1>
        {
          posts.map((post: any) => (
            <div key={post.title}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))
        }

        {/* <button onClick={
          () => {
            console.log(newPost2)
          }
        }>
          hacer post
        </button> */}
      </div>

    </>
  )
}

export default Posts
