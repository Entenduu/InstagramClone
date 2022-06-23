import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function PostCard({post, user, onLike}) {

  // console.log(post)
  const [likeList, setLikeList] = useState(post.likes)
  const [heart, setHeart] = useState({icon:"♡", color: ""})

  useEffect(()=>{
  if(post.likes.includes(user.name)){
    toggleHeart()
  }
  setLikeList(post.likes)
  },[])


  useEffect(()=>{
    toggleHeart()
  },[likeList])

  function toggleHeart(){
    if(likeList.includes(user.name)){
      setHeart({icon:"♥", color: "red"})
    }
    if(!likeList.includes(user.name)){
      setHeart({icon:"♡", color: ""})
    }
  }

  function handleClick(){
    // const likeIcon = document.getElementById('like-icon')

    if(likeList.includes(user.name)){
      setLikeList(likeList.filter(temp => {
        if(temp === user.name){
          return false
        }
        return true
      }))

    } else {
      setLikeList([...likeList, user.name])
    }
    onLike(post)
  }

  return (

    <div>
      <br></br>
      <div className='card-container'>
      <Card style={{ width: '28rem' }}>
      <Card.Header>
        <Image src={post.profilePic} alt='pfp' className='img-fluid rounded-circle float-left' style={{ width: '2em', height: '2em', marginRight:'1em'}}></Image>
        <b>{post.username}</b>
        </Card.Header>
        <Card.Img variant="top" src={post.image}/>
        <Card.Body>
          <div>
        <Card.Subtitle >Liked by: {likeList.join(", ").toString()}</Card.Subtitle>
        <Card.Subtitle id="like-icon" onClick={handleClick} style={{color: heart.color}}>{heart.icon}</Card.Subtitle>
          <Card.Text>
            <b>{post.username}</b>  {post.caption}
            <br/>
            {}
          </Card.Text>
          </div>
        </Card.Body>
      </Card>
      </div>
      <br></br>
    </div>
  )
}

export default PostCard