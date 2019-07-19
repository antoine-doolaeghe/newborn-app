import React from "react";
import { RoundButton } from "../../../components/molecules/buttons";

const ProfileButton = ({ onClick, profileName }) => {
  return (
    <RoundButton onClick={onClick} color="dark">
      {profileName}
    </RoundButton>
  );
};

export default ProfileButton;
