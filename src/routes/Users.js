import React, { useEffect, useState } from "react";
import UserContainer from "../components/UserContainer";

const Users = () => {
  const [users, setUsers] = useState([]);

  let BaseUrl = "https://api.github.com/users";

  async function AllUsers() {
    const response = await fetch(BaseUrl);
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    AllUsers();
  }, [setUsers]);

  return (
    <div>
      <UserContainer users={users} />
    </div>
  );
};

export default Users;
