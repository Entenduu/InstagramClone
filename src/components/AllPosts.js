import React from 'react';
import PostCard from './PostCard';

function AllPosts({postsData}){
    const allPosts = postsData.map(post => {
        return <PostCard key={post.id} post={post}/>
    })
    return (
        <>
        {allPosts}
        </>
    )
}

export default AllPosts;