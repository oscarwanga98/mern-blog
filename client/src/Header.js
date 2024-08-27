import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";


export default function Header() {
  const apiUrl = "https://mern-blog-backendapi.onrender.com";
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch(`${apiUrl}/profile`, {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch(`${apiUrl}/logout`, {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">Digital info</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <h1 onClick={logout}>Logout ({username})</h1>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
