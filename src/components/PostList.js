import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import "../styles.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setTimeout(async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
      }, 2500);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostList;
