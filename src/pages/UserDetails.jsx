import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <p>User not found...</p>;

  return (
    <div className="container">
      <Link to="/">⬅ Back</Link>

      <h1>{user.name}</h1>

      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      <h3>Address</h3>
      <p>
        {user.address.street}, {user.address.city}
      </p>

      <h3>Geo Location</h3>
      <p>
        Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
      </p>
    </div>
  );
};

export default UserDetails;
