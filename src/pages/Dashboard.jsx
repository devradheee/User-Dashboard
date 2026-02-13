import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import CreateUserForm from "../components/CreateUserForm";

const Dashboard = () => {
  const { users } = useContext(UserContext);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <h1>User Dashboard</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <CreateUserForm />

      <div className="grid">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
