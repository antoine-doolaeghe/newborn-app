import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Build from "@material-ui/icons/Build";
import { CardWrapper } from "../newbornCard/newbornCard.style";
import CardHeader from "../newbornCard/header/cardHeader";
import { Theme } from "../../../../theme/theme";

function TrainerCard() {
  return (
    <CardWrapper>
      <Link style={{ textDecoration: "none" }} to="./builder">
        <Fragment>
          <CardHeader title="hey" subTitle="hey" data-testid="newbornHeader" />
          <div
            style={{
              backgroundImage: "url('/images/builder.png')",
              border: "none",
              backgroundRepeat: "round",
              borderRadius: 5,
              height: "100%",
              position: "absolute",
              top: 0,
              zIndex: -1,
              width: "100%"
            }}
          />
        </Fragment>
      </Link>
    </CardWrapper>
  );
}

export default TrainerCard;
