import React from "react";
import styled from "styled-components";

export const StyledBadge = styled.div`
  background-color: lightgreen;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  height: 25px;
  width: 35px;
  margin: 5px;
`;

const Badge = ({ label }) => {
  return <StyledBadge>{!label ? "--" : label}</StyledBadge>;
};
export default Badge;
