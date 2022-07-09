import { useState, useEffect } from "react";
import "./DetailsView.css";

import { PostDetail } from "../../components/PostDetail";
import { updatePost } from "../../API/UPDATE";

import { Snackbar } from "../../components/Snackbar/Snackbar";

export const PostsView = ({ detailsView }) => {
  const [post, setPost] = useState({});
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarDuration, setSnackbarDuration] = useState(5000);
  const [snackbarShow, setSnackbarShow] = useState(false);

  useEffect(() => {
    if (detailsView) {
      setPost(detailsView);
    }
  }, [detailsView]);

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(post.id, post).then((response) => {
      console.log("submit response", response);
    });
    setSnackbarShow(true);
    setSnackbarMessage("Post updated successfully");
  };

  return (
    <div>
      <PostDetail
        id={post.id}
        title={post.title}
        userId={post.userId}
        body={post.body}
        handleUpdate={handleUpdate}
        handleSubmit={handleSubmit}
      />
      {snackbarShow && (
        <Snackbar
          message={snackbarMessage}
          setMessage={"setSnackbarMessage"}
          duration={snackbarDuration}
        />
      )}
    </div>
  );
};
