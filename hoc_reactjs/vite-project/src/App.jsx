// import React from "react";
import User from "./components/User";
const App = () => {
  console.log("ok");

  const users = [
    {
      id: 1,
      name: "User 1",
      email: "user1@gmail.com",
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@gmail.com",
    },
    {
      id: 3,
      name: "User 3",
      email: "user3@gmail.com",
    },
    {
      id: 4,
      name: "User 4",
      email: "user4@gmail.com",
    },
  ];
  return (
    <div>
      <h1>User List</h1>
      <h2>124</h2>
      {users.map(({ id, ...rest }) => (
        <User key={id} {...rest} />
      ))}
    </div>
  );
};

export default App;

// Hook
// useState
// useEffect
