import React from "react";

import {
  InfoElement,
  InfoWrap,
  InfoLabelIcon,
  InfoLabelAvatar,
  Label,
  Value
} from "./style/info.style";

export default function Info({ label, size, value, icon, avatar }) {
  const returnInfoLabelIconAvatar = () => {
    if (icon) {
      return <InfoLabelIcon>{icon}</InfoLabelIcon>;
    }
    if (avatar) {
      return <InfoLabelAvatar avatar={avatar} />;
    }
  };
  return (
    <InfoWrap>
      {returnInfoLabelIconAvatar()}
      <InfoElement>
        <Label>{label}</Label>
        <Value fontSize={size}>{value}</Value>
      </InfoElement>
    </InfoWrap>
  );
}
