import React from "react";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./App.css";

const users = [
  {
    userName: "ludsrill",
    name: "Luis Saavedra",
    isFollowing: true,
  },
  {
    userName: "sdo_usaka",
    name: "Luis Saavedra",
    isFollowing: false,
  },
];

export function App() {
  return (
    <React.Fragment>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          isFollowing={isFollowing}
        />
      ))}
    </React.Fragment>
  );
}
