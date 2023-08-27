import { useState } from "react";

const AddPushUp = ({ currentUser, bankPushUp }) => {
  const [pushUps, setPushUps] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    bankPushUp(currentUser.displayName, pushUps);
    setPushUps("");
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-element">
          <label>How many push-ups <br/>to bank?</label>
          <input
            type="text"
            placeholder="+/-"
            value={pushUps}
            onChange={(e) => setPushUps(e.target.value)}
          />
        </div>

        <input type="submit" value="Bank" className="form-button bank-button" />
      </form>
    </>
  );
};

export default AddPushUp;
