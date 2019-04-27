import styled from "styled-components";

export const HeaderContainer = styled.section`
  font-size: 20px;
  height: 400px;
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const HeaderValueContainer = styled.section`
  display: flex;
  flex: 1.5;
  margin: 0px;
  margin-left: 10px;
  justify-content: space-between;
  width: 61%;
  align-items: center;
`;

export const HeaderName = styled.h1`
  margin: 0px;
  font-size: 18px;
  text-transform: uppercase;
`;

export const HeaderValue = styled.p`
  font-size: 60px;
  font-weight: 700;
  margin: 0px;
`;

export const HeaderPercentage = styled.p`
  font-size: 20px;
  margin: 0px;
`;
