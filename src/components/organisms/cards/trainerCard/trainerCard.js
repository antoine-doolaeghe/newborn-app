import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { CardWrapper } from "../newbornCard/newbornCard.style";

import { Theme } from "../../../../theme/theme";

function TrainerCard() {
  return (
    <CardWrapper color={Theme.palette.dark}>
      <Link to="./builder">
        <Fragment>
          <img
            src="/images/newborn-logo.png"
            style={{
              border: "none",
              background: "grey",
              height: "100%",
              width: "100%"
            }}
          />
        </Fragment>
      </Link>
    </CardWrapper>
  );
}

export default TrainerCard;
