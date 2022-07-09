import React, { useState, useEffect } from "react";

import { getPosts, getPostsById } from "../../API/GET";
import { PostsListing } from "../../components/PostsListing";
import "./HomePage.css";

export const HomePage = ({ setDetailsView }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const editPost = (id) => {
    getPostsById(id).then((response) => {
      setDetailsView(response.data);
    });
  };

  return (
    <div className="App postsListing">
      <PostsListing posts={posts} deletePost={deletePost} editPost={editPost} />
    </div>
  );
};
