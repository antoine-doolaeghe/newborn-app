import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "../../../../components/molecules/buttons";
import { Badge } from "../../../../components/atoms/badges";

function NewbornListHeader({ title, newbornNumber, expanded, setExpanded }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton
        height="25px"
        width="25px"
        style={{ position: "absolute", left: 0 }}
        color="primary"
        onClick={() => setExpanded(!expanded)}
      >
        <ExpandMoreIcon />
      </IconButton>
      <Badge height="25px" width="25px" label={title} />
      <div style={{ marginLeft: 8 }}>
        <b>{newbornNumber}</b> Newborns
      </div>
    </div>
  );
}

NewbornListHeader.defaultProps = {
  newbornNumber: 0
};

export default NewbornListHeader;
