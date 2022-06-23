import React, {useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function PostCard({post, user, onLike}) {

  useEffect(()=>{
    const likeIcon = document.getElementById('like-icon')

    if(post.likes.includes(user.name)){
      likeIcon.innerText = "♥"
      likeIcon.style.color = "red"
    }
    
  },[])

  function handleClick(){
    console.log("liked")
    onLike(post)
  }

  return (

    <div>
      <br/>
      <br/>
      <div className='card-container'>

      <Card style={{ width: '28rem' }}>
      <Card.Header>
        <Image src={post.profilePic} alt='pfp' className='img-fluid rounded-circle float-left' style={{ width: '2em', height: '2em', marginRight:'1em'}}></Image>
        <b>{post.username}</b>
        </Card.Header>
        <Card.Img variant="top" src={post.image}/>
        <Card.Body>
          <div>
        <Card.Subtitle >Liked by: {post.likes}</Card.Subtitle>
        <Card.Subtitle id="like-icon" onClick={handleClick}>♡</Card.Subtitle>
          <Card.Text>
            <b>{post.username}</b>  {post.caption}
            <br/>
            {}
          </Card.Text>
          </div>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default PostCard