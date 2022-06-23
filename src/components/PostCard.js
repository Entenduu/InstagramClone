import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function PostCard({post, user, onLike }) {

  const [likeList, setLikeList] = useState(post.likes)
  const [heart, setHeart] = useState({icon:"♡", color: ""})
  const [profilePic, setProfilePic] = useState("")

  useEffect(()=>{

  fetch('http://localhost:3001/users')
  .then(res=>res.json())
  .then(data=>{
    data.forEach(temp => {
      if(post.username === temp.name){
        setProfilePic(temp.profilePic)
      }
    })
  })

  },[])

  useEffect(()=>{
    toggleHeart()
  },[likeList])

  function toggleHeart(){
    console.log(likeList)
    if(likeList.includes(user.name)){
      setHeart({icon:"♥", color: "red"})
    }
    if(!likeList.includes(user.name)){
      setHeart({icon:"♡", color: ""})
    }
  }

  function handleClick(){

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
      <br/>
      <div className='card-container'>

      <Card style={{ width: '28rem' }}>
      <Card.Header>
        <Image src={profilePic} alt='pfp' className='img-fluid rounded-circle float-left' style={{ width: '2em', height: '2em', marginRight:'1em'}}></Image>
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
      <br/>
    </div>
  )
}

export default PostCard