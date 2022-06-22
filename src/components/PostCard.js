import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function PostCard({post}) {
  return (

    <div>
      <br/>
      <br/>
      <div class='card-container'>

      <Card style={{ width: '28rem' }}>
      <Card.Header>
        <img src={post.profilePic} alt='pfp' className='img-fluid rounded-circle float-left' style={{ width: '2em', height: '2em', marginRight:'1em'}}></img>
        <b>{post.username}</b>
        </Card.Header>
        <Card.Img variant="top" src={post.image}/>
        <Card.Body>
          <div>
        <Card.Subtitle >liked by</Card.Subtitle>
          <Card.Text>
            <b>{post.username}</b>  {post.caption}
          </Card.Text>
          </div>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default PostCard