import styled from 'styled-components';

export const HeaderContainer = styled.section`
  font-size: 20px;
  flex: 1.5;
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

export const HeaderValueContainer = styled.section`
  display: flex;
  flex: 1.5;
  margin: 0px;
  margin-left: 20px;
  justify-content: space-between;
  width: 61%;
  align-items: center;
`;

export const HeaderName = styled.h1`
  width: 100%;
  margin: 0px;
  flex: 1;
  font-size: 24px;
`;

export const HeaderBornPlace = styled.h2`
  width: 100%;
  margin: 0px;
  flex: 1;
  font-size: 18px;
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
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  flex: 2.5;
`;

export const HeaderInfo = styled.section`
  font-size: 20px;
  border-top: 1px dotted;
  margin-left: 20px;
`;

export const HeaderInfoWrap = styled.div`
  display: grid;
  flex: 1;
  margin-right: 20px;
`

export const HeaderInfoTitle = styled.div`
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
`

export const HeaderInfoContent = styled.div`
  font-size: 18px;
  font-weight: 700;
`
