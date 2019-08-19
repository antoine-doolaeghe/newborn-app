import React from "react";
import FaceIcon from "@material-ui/icons/Face";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AvatarDefault } from "../../atoms/avatars";
import { Theme } from "../../../theme/theme";

const AvatarWrapper = styled.div`
  position: relative;
  margin: ${Theme.spacing.small} 0px;
`;

const AvatarGroup = ({ avatars, setId }) => {
  const max = 3;
  const avatarGroup = avatars.map((avatar, index) => {
    if (index === max) {
      return (
        <AvatarDefault index={index}>{`+${avatars.length - 3}`}</AvatarDefault>
      );
    }

    return (
      <AvatarDefault
        onClick={() => {
          setId(avatar);
        }}
        index={index}
        last
      >
        <FaceIcon />
      </AvatarDefault>
    );
  });
  return <AvatarWrapper>{avatarGroup}</AvatarWrapper>;
};

AvatarGroup.propTypes = {
  setId: PropTypes.func.isRequired,
  avatars: PropTypes.arrayOf(PropTypes.string)
};

export default AvatarGroup;
