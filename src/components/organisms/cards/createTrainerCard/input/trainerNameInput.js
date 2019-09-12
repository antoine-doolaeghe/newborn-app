import React from "react";
import { withRouter } from "react-router-dom";
import TextInput from "../../../../molecules/inputs/textInput/textInput";

function TrainerNameInput({ error, setTitle }) {
  const handleChange = event => {
    setTitle(event.target.value);
  };
  return (
    <div style={{ padding: "0px 10px" }}>
      <TextInput
        error={error}
        onChange={handleChange}
        style={{ width: "100%" }}
        placeholder="Trainer name"
      />
    </div>
  );
}

export default withRouter(TrainerNameInput);
