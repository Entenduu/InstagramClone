import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function ProfilePostCards({post, user}){
    return (
        <div>
            <br/>
            <div className='card-container'>

                <Card style={{ width: '28rem' }}>
                    <Card.Img variant="top" src={post.image}/>
                </Card>
            </div>
        </div>
    )
}
export default ProfilePostCards;
