import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const CreateUserForm = () => {
  const { addUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: { name: "" },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addUser({
      id: Date.now(),
      ...formData,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: { name: "" },
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create New User</h2>

      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <input
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />

      <input
        placeholder="Company"
        value={formData.company.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            company: { name: e.target.value },
          })
        }
      />

      <button type="submit">Add User</button>
    </form>
  );
};

export default CreateUserForm;
