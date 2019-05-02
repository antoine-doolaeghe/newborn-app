import React, { Fragment } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { NewbornPredictionContainer } from "./newbornPrediction.style";
import {
  InfoContainer,
  Info,
  InfoWrap,
  InfoTitle,
  InfoContent
} from "../../theme/infos/info.style";
import { Button } from "../../theme/buttons/button.style";
import { Input } from "../../theme/inputs/input.style";

function NewbornPrediction(props) {
  const { newbornPredictionLoading } = props;
  return (
    <NewbornPredictionContainer data-testid="newbornRecordPrediction">
      {newbornPredictionLoading ? (
        <CircularProgress />
      ) : (
        <Fragment>
          <InfoContainer>
            <InfoWrap>
              <Info>
                <InfoTitle>Environment Statistics</InfoTitle>
                <InfoContent>10.3</InfoContent>
              </Info>
            </InfoWrap>
            <InfoWrap>
              <Info>
                <InfoTitle>Policy Statistics</InfoTitle>
                <InfoContent>13.2</InfoContent>
              </Info>
            </InfoWrap>
            <InfoWrap>
              <Info>
                <InfoTitle>Learning Loss</InfoTitle>
                <InfoContent>34</InfoContent>
              </Info>
            </InfoWrap>
          </InfoContainer>
          <InfoContainer flex="1">
            <InfoWrap>
              <Info>
                <InfoTitle>Born place</InfoTitle>
                <Input />
              </Info>
            </InfoWrap>
            <InfoWrap>
              <Info>
                <InfoTitle>Language</InfoTitle>
                <Input />
              </Info>
            </InfoWrap>
            <InfoWrap>
              <Info>
                <InfoTitle>hello 1</InfoTitle>
                <Input />
              </Info>
            </InfoWrap>
          </InfoContainer>
          <InfoContainer flex="1">
            <InfoWrap>
              <Info>
                <InfoTitle>Born place</InfoTitle>
                <Input />
              </Info>
            </InfoWrap>
            <InfoWrap>
              <Info>
                <InfoTitle>Language</InfoTitle>
                <Input />
              </Info>
            </InfoWrap>
            <InfoWrap>
              <Info>
                <InfoTitle>hello 1</InfoTitle>
                <Input />
              </Info>
            </InfoWrap>
          </InfoContainer>
        </Fragment>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <div style={{ flex: 2 }}>Prediction summary</div>
        <Button color="primary" style={{ flex: 1 }}>
          Run prediction
        </Button>
      </div>
    </NewbornPredictionContainer>
  );
}

export default NewbornPrediction;
