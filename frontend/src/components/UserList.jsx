import { useEffect, useState } from "react";
import api from "../api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(res => setUsers(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} - {user.email} ({user.role})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
