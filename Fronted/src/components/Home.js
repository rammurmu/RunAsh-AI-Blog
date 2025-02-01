// src/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>RunAsh AI Blog</h1>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

// Similar structure for Login, Register, and CreatePost components
