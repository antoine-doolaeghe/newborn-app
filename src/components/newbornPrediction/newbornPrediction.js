import React, { Fragment } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { NewbornPredictionContainer } from "./newbornPrediction.style";
import {
  HeaderInfoContainer,
  HeaderInfo,
  HeaderInfoWrap,
  HeaderInfoTitle,
  HeaderInfoContent
} from "../newbornRecordHeader/newbornRecordHeader.style";
import { Button } from "../../theme/buttons/button.style";

function NewbornPrediction(props) {
  const { newbornPredictionLoading, onPredictionClick } = props;
  return (
    <NewbornPredictionContainer data-testid="newbornRecordPrediction">
      {newbornPredictionLoading ? (
        <CircularProgress />
      ) : (
        <Fragment>
          <HeaderInfoContainer flex="1">
            <HeaderInfoWrap>
              <HeaderInfo>
                <HeaderInfoTitle>Born place</HeaderInfoTitle>
                <HeaderInfoContent>San Morino</HeaderInfoContent>
              </HeaderInfo>
            </HeaderInfoWrap>
            <HeaderInfoWrap>
              <HeaderInfo>
                <HeaderInfoTitle>Language</HeaderInfoTitle>
                <HeaderInfoContent>Engligh</HeaderInfoContent>
              </HeaderInfo>
            </HeaderInfoWrap>
            <HeaderInfoWrap>
              <HeaderInfo>
                <HeaderInfoTitle>hello 1</HeaderInfoTitle>
                <HeaderInfoContent>hello 1</HeaderInfoContent>
              </HeaderInfo>
            </HeaderInfoWrap>
          </HeaderInfoContainer>
          <HeaderInfoContainer flex="1">
            <HeaderInfoWrap>
              <HeaderInfo>
                <HeaderInfoTitle>Born place</HeaderInfoTitle>
                <input />
              </HeaderInfo>
            </HeaderInfoWrap>
            <HeaderInfoWrap>
              <HeaderInfo>
                <HeaderInfoTitle>Language</HeaderInfoTitle>
                <input />
              </HeaderInfo>
            </HeaderInfoWrap>
            <HeaderInfoWrap>
              <HeaderInfo>
                <HeaderInfoTitle>hello 1</HeaderInfoTitle>
                <input />
              </HeaderInfo>
            </HeaderInfoWrap>
          </HeaderInfoContainer>
          <HeaderInfoContainer flex="1">
            <HeaderInfoWrap>
              <HeaderInfo>
                <HeaderInfoTitle>Born place</HeaderInfoTitle>
                <input />
              </HeaderInfo>
            </HeaderInfoWrap>
            <HeaderInfoWrap>
              <HeaderInfo>
                <HeaderInfoTitle>Language</HeaderInfoTitle>
                <input />
              </HeaderInfo>
            </HeaderInfoWrap>
            <HeaderInfoWrap>
              <HeaderInfo>
                <HeaderInfoTitle>hello 1</HeaderInfoTitle>
                <input />
              </HeaderInfo>
            </HeaderInfoWrap>
          </HeaderInfoContainer>
        </Fragment>
      )}
      <Button>prediction</Button>
    </NewbornPredictionContainer>
  );
}

export default NewbornPrediction;
