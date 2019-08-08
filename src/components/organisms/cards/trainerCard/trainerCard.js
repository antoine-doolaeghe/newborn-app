import React from "react";
import { withRouter } from "react-router-dom";
import { CardWrapper } from "../newbornCard/newbornCard.style";
import CardHeader from "../newbornCard/header/cardHeader";
import NewbornCardLoader from "./loader/trainerCardLoader";

function TrainerCard({ history, loading }) {
  if (loading) {
    return <NewbornCardLoader />;
  }
  return (
    <CardWrapper
      onClick={() => {
        history.push("./builder");
      }}
    >
      <CardHeader title="Trainer" />
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
    </CardWrapper>
  );
}

export default withRouter(TrainerCard);
