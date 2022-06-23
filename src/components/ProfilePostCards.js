import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function ProfilePostCards({post, user}){
    return (
        <div class='card-columns'>
            <br/>
            <div className='card-container'>

                <Card style={{ width: '28rem',height: '100px' }}>
                    <Card.Img variant="top" src={post.image} style={{ height: '555px'}}/>
                </Card>
            </div>
        </div>
    )
}
export default ProfilePostCards;
