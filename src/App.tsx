import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListItem } from "./components/ListItem";

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://example.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem id={user} name={user} age={user} />
      ))}
    </div>
  );
};
