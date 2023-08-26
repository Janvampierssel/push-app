import { useState } from "react";

const AddPushUp = () => {
  const [name, setName] = useState("");
  const [pushUps, setPushUps] = useState("");

  const onSubmit = () => {
    setName("");
    setPushUps("");
  };

  return (
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
  );
};

export default AddPushUp;
