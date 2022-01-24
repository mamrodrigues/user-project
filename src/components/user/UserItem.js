const UsertItem = ({ user }) => {
  return (
    <div>
      <div>
        <h2>{user.title}</h2>
        <div>{user.amount}</div>
      </div>
    </div>
  );
};

export default UsertItem;
