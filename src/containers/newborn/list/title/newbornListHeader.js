import React, { Fragment } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "../../../../components/molecules/buttons";

function NewbornListHeader({ title, newbornNumber, collapsed, setCollapsed }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton
        height={15}
        width={15}
        style={{ position: "absolute", left: 0 }}
        color="primary"
        onClick={() => setCollapsed(!collapsed)}
      >
        <ExpandMoreIcon />
      </IconButton>
      {title}
      <span>{newbornNumber} newborns</span>
      {collapsed && (
        <Fragment>
          <FormControlLabel
            control={<Checkbox checked value="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked value="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox checked value="antoine" />}
            label="Antoine Llorca"
          />
        </Fragment>
      )}
    </div>
  );
}

NewbornListHeader.defaultProps = {
  newbornNumber: 0
};

export default NewbornListHeader;
