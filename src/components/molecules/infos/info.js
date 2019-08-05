import React from "react";

import {
  InfoElement,
  InfoWrap,
  InfoTitle,
  InfoContent
} from "./style/info.style";

export default function Info(props) {
  return (
    <InfoWrap>
      <InfoElement>
        <InfoTitle>{props.label}</InfoTitle>
        <InfoContent>{props.value}</InfoContent>
      </InfoElement>
    </InfoWrap>
  );
}
