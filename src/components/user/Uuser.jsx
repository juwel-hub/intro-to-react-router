import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const navigate = useNavigate();
  const userStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "20px",
    marginBottom: "30px",
  };
  const handleShowDetails = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <h3>Email: {email} </h3>
      <h3>Phone: {phone} </h3>
      <Link to={`/user/${id}`}>Show Details </Link>
      <button onClick={handleShowDetails}>Click me to see details</button>
    </div>
  );
};

export default User;
