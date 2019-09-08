import React from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CardWrapper } from "../newbornCard/style/newbornCard.style";
import CardHeader from "../newbornCard/header/cardHeader";
import NewbornCardLoader from "./loader/trainerCardLoader";
import { TrainerCardImage } from "./style/trainerCard.style";

function TrainerCard({ loading, title, id }) {
  if (loading) {
    return <NewbornCardLoader />;
  }
  const path = `/builder/${id}`;
  return (
    <Link to={path}>
      <CardWrapper>
        <CardHeader title={title} />
        <TrainerCardImage />
      </CardWrapper>
    </Link>
  );
}

TrainerCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default withRouter(TrainerCard);
