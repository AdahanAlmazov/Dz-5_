import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/action";

const UserPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const message = useSelector((state) => state.userReducer.message);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name, username, email, website };

    dispatch(createUser(user));
    setName("");
    setUsername("");
    setEmail("");
    setWebsite("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>website:</label>
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />

        <button type="submit">Create User</button>
      </form>
      <div>
        {message === "success" && (
          <h2 style={{ color: "green" }}>Успешно Создано</h2>
        )}
      </div>
    </>
  );
};

export default UserPage;
