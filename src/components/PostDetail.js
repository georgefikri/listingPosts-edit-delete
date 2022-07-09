import React from "react";

export const PostDetail = ({
  id,
  title,
  userId,
  body,
  handleUpdate,
  handleSubmit,
}) => {
  return (
    <div>
      <h1>Details View</h1>
      <form className="detailsViewContainer" onSubmit={handleSubmit}>
        <label>
          <span>ID</span>
          <input type="text" name="id" value={id || ""} readOnly />
        </label>
        <label>
          <span>Title</span>
          <input
            type="text"
            value={title || ""}
            name="title"
            onChange={(titleValue) => handleUpdate(titleValue)}
          />
        </label>
        <label>
          <span>User ID</span>
          <input
            type="text"
            name="userId"
            value={userId || ""}
            onChange={(userId) => handleUpdate(userId)}
          />
        </label>
        <label>
          <span>Body</span>
          <textarea
            value={body || ""}
            name="body"
            rows="5"
            onChange={(body) => handleUpdate(body)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
