import React from "react";
import { withRouter, Link } from "react-router-dom";
import { CardWrapper } from "../newbornCard/style/newbornCard.style";
import CardHeader from "../newbornCard/header/cardHeader";
import NewbornCardLoader from "./loader/trainerCardLoader";

function TrainerCard({ loading, title, id }) {
  if (loading) {
    return <NewbornCardLoader />;
  }
  return (
    <Link to={`/builder/${id}`}>
      <CardWrapper>
        <CardHeader title={title} />
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
    </Link>
  );
}

export default withRouter(TrainerCard);
