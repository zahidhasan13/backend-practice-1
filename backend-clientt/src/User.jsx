/* eslint-disable react/prop-types */
const User = ({ user }) => {
  return (
    <div className="flex justify-between items-center mt-4">
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.email}</div>
    </div>
  );
};

export default User;
