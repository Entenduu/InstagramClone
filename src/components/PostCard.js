import React from 'react'
import Card from 'react-bootstrap/Card'

function PostCard({post}) {
  return (

    <div>
      <br/>
      <br/>
      <div class='card-container'>
      <Card style={{ width: '28rem' }}>
        <Card.Img variant="top" src={post.image}/>
        <Card.Body>
        <Card.Subtitle>{post.username}</Card.Subtitle>
          <Card.Text>
            {post.caption}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default PostCard