import React from "react";
import FaceIcon from "@material-ui/icons/Face";
import Avatar from "@material-ui/core/Avatar";

const AvatarGroup = ({ avatars }) => {
  const group = [];
  avatars.forEach((avatar, index) => {
    group.push(
      <Avatar
        style={{
          height: 35,
          width: 35,
          position: "absolute",
          left: 20 * index
        }}
      >
        <FaceIcon />
      </Avatar>
    );
  });
  return <div style={{ position: "relative", margin: "5px 0px" }}>{group}</div>;
};

AvatarGroup.defaultProps = {
  children: "",
  size: "55px"
};

AvatarGroup.propTypes = {};

export default AvatarGroup;
