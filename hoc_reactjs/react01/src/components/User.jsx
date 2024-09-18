import PropTypes from "prop-types";
const User = ({ name, email }) => {
  return (
    <div
      style={{
        background: "yellow",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};
User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string.isRequired,
};
export default User;
