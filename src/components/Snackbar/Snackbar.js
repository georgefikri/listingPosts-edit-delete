import { useState, useEffect } from "react";
import "./Snackbar.css";
// create a snackbar component that displays a message for a certain amount of time
// and then hides it
export const Snackbar = ({ message, setMessage, duration }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (message) {
      setShow(true);
    }
  }, [message]);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, duration);
    }
  }, [show, duration]);

  return (
    <div
      className={`snackbar ${show ? "show" : "hide"}`}
      onClick={() => setMessage("")}
    >
      {message}
    </div>
  );
};
