import { useState } from "react";

const AddPushUp = ({ newUser, bankPushUp }) => {
  const [name, setName] = useState("");
  const [pushUps, setPushUps] = useState("");
  /*   const [newName, setNewName] = useState("");
  const [newPushUps, setNewPushUps] = useState(""); */

  const onSubmit = async (e) => {
    e.preventDefault();
    bankPushUp(name, pushUps);
    setName("");
    setPushUps("");
  };

  /*   const addUser = async (e) => {
    e.preventDefault();
    console.log("Add user");

    newUser(newName, Number(newPushUps));
    setNewName("");
    setNewPushUps("");
  }; */

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-element">
          <label>First Name</label>
          <input
            type="text"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label>How many push-ups to bank?</label>
          <input
            type="text"
            placeholder="+/-"
            value={pushUps}
            onChange={(e) => setPushUps(e.target.value)}
          />
        </div>

        <input type="submit" value="Push" className="form-button" />
      </form>

      {/* <form className="add-form" onSubmit={addUser}>
        <div className="form-element">
          <label>User to Add</label>
          <input
            type="text"
            placeholder=""
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label>Pushups?</label>
          <input
            type="text"
            placeholder=""
            value={newPushUps}
            onChange={(e) => setNewPushUps(e.target.value)}
          />
        </div>

        <input type="submit" value="Add User" className="form-button" />
      </form> */}
    </>
  );
};

export default AddPushUp;
