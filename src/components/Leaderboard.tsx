import { FaSyncAlt } from 'react-icons/fa'

const Leaderboard = ({ usersList, updateUsersUI }) => {
  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <div>
          <h2 style={{display: 'inline-block', margin:"0"}}>Leaderboard</h2>
          <h3 style={{marginTop:"0px", fontWeight:"normal"}}>Push-ups, Round 2</h3>
        </div>
          <FaSyncAlt style={{color:"#f69e39", paddingRight: "10px", cursor: "pointer", marginTop:"8px"}} onClick={updateUsersUI}/>
      </div>
      <div className="leaderboard-users">
      <p style={{marginBottom:"5px", fontSize:".7rem", color:"gray", marginLeft:"10px"}}>Deadline: Sunday 24th Sep, 22:00</p>
        {usersList.map((user) => (
          <div className="user" key={user.name}>
            <div style={{display: "flex", justifyContent: 'space-between'}}>
              <p style={{display:"inline-block", fontSize:".8rem", fontWeight:"bold"}}>{user.name}</p>
              <p style={{display:"inline-block", fontSize:".8rem", color:"darkgray"}}>Total: {user.pushups}</p>
            </div>
            <p style={{fontSize:".9rem", marginTop:"5px"}}>Current round: {user.pushUpsCurrentRound}</p>
            {/* <button onClick={() => deleteUser(user)}>Delete User</button> */}
          </div>
        ))}
      </div>
      <div className="winner-previous-round">
        <p style={{fontSize:".8rem"}}>Winner of previous round</p>
        <p style={{display:"inline-block", width:"40%", borderTop:"1.5px solid #f69e39", padding:"5px 8px", marginTop:"3px"}}>Roman Klijn!</p>
      </div>
    </div>
  );
};

export default Leaderboard;
