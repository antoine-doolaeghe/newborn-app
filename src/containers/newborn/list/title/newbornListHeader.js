import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "../../../../components/molecules/buttons";
import { Badge } from "../../../../components/atoms/badges";
import { Wrapper, NewbornInfoTitle } from "./newbornListHeader.style";

function NewbornListHeader({
  generationNumber,
  newbornNumber,
  expanded,
  setExpanded
}) {
  const IconBadgeSize = "25px";
  return (
    <Wrapper>
      <IconButton
        height={IconBadgeSize}
        width={IconBadgeSize}
        color="primary"
        onClick={() => setExpanded(!expanded)}
      >
        <ExpandMoreIcon />
      </IconButton>
      <Badge
        height={IconBadgeSize}
        width={IconBadgeSize}
        label={generationNumber}
      />
      <NewbornInfoTitle>
        <b>{newbornNumber}</b> Newborns
      </NewbornInfoTitle>
    </Wrapper>
  );
}

NewbornListHeader.defaultProps = {
  newbornNumber: 0
};

export default NewbornListHeader;
