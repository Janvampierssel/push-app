import { FaSyncAlt } from 'react-icons/fa'

const Leaderboard = ({ usersList, updateUsersUI }) => {
  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <h2 style={{display: 'inline-block'}}>Leaderboard</h2>
        <FaSyncAlt style={{color: "gray", paddingRight: "10px", cursor: "pointer"}} onClick={updateUsersUI}/>
      </div>
      {usersList.map((user) => (
        <div className="user" key={user.name}>
          <p style={{fontSize:".8rem"}}>{user.name}</p>
          <p style={{fontSize:"1rem", fontWeight:"Bold"}}>Push-ups: {user.pushups}</p>
          {/* <button onClick={() => deleteUser(user)}>Delete User</button> */}
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
