import React from "react";
import PropTypes from "prop-types";

import {
  InfoElement,
  Wrapper,
  LabelIcon,
  LabelAvatar,
  LabelAvatarBorder,
  Label,
  Value
} from "./style/info.style";

export default function Info({ label, size, value, icon, avatar }) {
  const returnInfoLabelIconAvatar = () => {
    if (icon) {
      return <LabelIcon>{icon}</LabelIcon>;
    }
    if (avatar) {
      return (
        <LabelAvatar avatar={avatar}>
          <LabelAvatarBorder />
        </LabelAvatar>
      );
    }
  };
  return (
    <Wrapper>
      {returnInfoLabelIconAvatar()}
      <InfoElement>
        <Label>{label}</Label>
        <Value fontSize={size}>{value}</Value>
      </InfoElement>
    </Wrapper>
  );
}

Info.defaultProps = {
  avatar: null,
  icon: null,
  size: "small",
  value: null
};

Info.propTypes = {
  avatar: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["x-small", "small", "medium", "large", "x-large"]),
  value: PropTypes.node
};
