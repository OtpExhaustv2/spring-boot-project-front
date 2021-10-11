import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Card from "../shared/Card";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setPosts(result.data);
        }
        getPosts();
    }, []);

    return (
        <main className="home">
            <h3>Écoutés récemment</h3>
            <div className="cards">
                {posts.map((post: any) => <Card key={post.id}/>)}
            </div>
        </main>
    );
};

export default Home;
