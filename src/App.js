import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { PostsView } from "./Pages/PostsView/PostsView";
import { useState, useEffect } from "react";

const App = () => {
  const [detailsView, setDetailsView] = useState({});

  // preserving the details view data in case of refresh
  useEffect(() => {
    if (Object.keys(detailsView).length !== 0) {
      localStorage.setItem("detailsView", JSON.stringify(detailsView));
    } else {
      const localStorageDetailsView = localStorage.getItem("detailsView");
      if (localStorageDetailsView) {
        setDetailsView(JSON.parse(localStorageDetailsView));
      }
    }
  }, [detailsView]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/listingPosts-edit-delete"
          element={<HomePage setDetailsView={setDetailsView} />}
        />
        <Route
          path="/listingPosts-edit-delete/details"
          element={<PostsView detailsView={detailsView} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
