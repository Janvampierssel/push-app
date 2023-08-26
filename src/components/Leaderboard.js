const Leaderboard = ({ users }) => {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      {users.map((user) => (
        <div className="user" key={user.name}>
          <p>Name: {user.name}</p>
          <p>Push-ups: {user.pushups}</p>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
