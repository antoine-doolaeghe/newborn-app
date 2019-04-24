import styled from "styled-components";

export const HeaderContainer = styled.section`
  font-size: 20px;
  flex: 1.5;
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

export const HeaderInfoContainer = styled.section`
  border: 2px solid black;
  border-radius: 5px;
  margin: 0px 10px 10px 10px;
  padding: 8px 0px 0px 0px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  flex: 1;
`;

export const HeaderInfoIcon = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  background: grey;
  right: 0px;
  bottom: 0px;
`;

export const HeaderInfo = styled.section`
  font-size: 20px;
  border-top: 1px dotted grey;
  margin-left: 10px;
`;

export const HeaderInfoWrap = styled.div`
  display: grid;
  flex: 1;
  margin-right: 10px;
`;

export const HeaderInfoTitle = styled.div`
  font-size: 12px;
  font-weight: 300;
  margin-top: 5px;
  text-transform: uppercase;
`;

export const HeaderInfoContent = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
`;
