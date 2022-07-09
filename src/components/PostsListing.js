import { Outlet, Link } from "react-router-dom";

export const PostsListing = ({ posts, deletePost, editPost }) => {
  return (
    <div>
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>User ID</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.userId}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  to="/details"
                  onClick={() => editPost(post.id)}
                >
                  edit
                </Link>
              </td>
              <td>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
