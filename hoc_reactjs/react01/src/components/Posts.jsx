// import React from 'react'
import { useState, useEffect } from "react";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(true);
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    // console.log(data);
    setPosts(data);
    setLoading(false);
  };
  const handleLoadPosts = () => {
    getPosts();
  };
  // Công việc 1
  // Công việc 2
  // Công việc 3
  // ==> Gọi là side effect - công việc bên lề
  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  console.log("re-render");
  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    document.title = name;
    console.log("effect: ", name);
    return () => {
      // cleanup
      console.log("cleanup: ", name);
    };
  }, [name]);
  return (
    <div>
      <h1>Posts</h1>
      {console.log("UI Update: ", name)}
      <div>
        <input
          type="text"
          placeholder="Họ tên..."
          onChange={handleChangeValue}
        />{" "}
        {name}
      </div>
      <button onClick={handleLoadPosts}>Load Posts</button>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        posts.map(({ title, id }) => <p key={id}>{title}</p>)
      )}
    </div>
  );
};

export default Posts;

/**
 * useEffect(callback, dependencies?)
 * - callback là hàm thực thi các side effect
 * - dependencies là điều kiện để callback thực thi
 * + null | undefined ==> Component re-render callback sẽ chạy
 * + [] ==> component render lần đầu tiên thì callback sẽ chạy
 * [bien1, bien2, bien3] ==> khi nào 1 trong các biến thay đổi thì callback sẽ chạy
 *
 */
