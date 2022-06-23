import React from 'react';
import PostCard from './PostCard';

function AllPosts({postsData, user, onLike}){
    const allPosts = postsData.map(post => {
        return <PostCard key={post.id} post={post} user={user} onLike={onLike}/>
    })
    return (
        <>
        {allPosts}
        </>
    )
}

export default AllPosts;