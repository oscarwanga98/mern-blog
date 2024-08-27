import Post from "../Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const apiUrl = "https://mern-blog-backendapi.onrender.com";
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/post`).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    }); // eslint-disable-next-line
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
  );
}