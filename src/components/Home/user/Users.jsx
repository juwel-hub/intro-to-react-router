import { useLoaderData } from "react-router-dom";
import User from "../../user/Uuser";

const Users = () => {
  const users = useLoaderData();
  const userStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "10px",
  };
  return (
    <div>
      <h1>Our users {users.length} </h1>
      <h1>User interface</h1>
      <div style={userStyles}>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
