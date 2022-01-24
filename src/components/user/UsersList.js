import UsertItem from "./UserItem";

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return <h1>No users founded</h1>;
  }

  return (
    <ul>
      {users.map((user) => (
        <UsertItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
