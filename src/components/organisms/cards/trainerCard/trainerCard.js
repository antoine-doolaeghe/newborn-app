import React from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CardWrapper } from "../newbornCard/style/newbornCard.style";
import CardHeader from "../newbornCard/header/cardHeader";
import NewbornCardLoader from "./loader/trainerCardLoader";
import { TrainerCardImage } from "./style/trainerCard.style";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function TrainerCard({ loading, title, id }) {
  if (loading) {
    return <NewbornCardLoader />;
  }
  const path = `/builder/${id}`;
  return (
    <StyledLink to={path}>
      <CardWrapper>
        <CardHeader title={title} />
        <TrainerCardImage />
      </CardWrapper>
    </StyledLink>
  );
}

TrainerCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default withRouter(TrainerCard);
