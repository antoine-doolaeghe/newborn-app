import React from "react";
import PropTypes from "prop-types";
import { RoundButton } from "../../../components/molecules/buttons";

const ProfileButton = ({ onClick, profileName }) => {
  return (
    <RoundButton onClick={onClick} color="dark">
      {profileName}
    </RoundButton>
  );
};

ProfileButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  profileName: PropTypes.string.isRequired
};

export default ProfileButton;
