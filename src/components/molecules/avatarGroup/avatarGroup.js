import React from "react";
import FaceIcon from "@material-ui/icons/Face";
import Avatar from "@material-ui/core/Avatar";
import { Pointer } from "highcharts";

const AvatarGroup = ({ avatars, setId }) => {
  const group = [];
  avatars.forEach((avatar, index) => {
    if (index === 3) {
      group.push(
        <Avatar
          style={{
            height: 35,
            width: 35,
            position: "absolute",
            cursor: "pointer",
            background: "lightBlue",
            fontWeight: "light",
            left: 25 * index
          }}
        >
          {`+${avatars.length - 3}`}
        </Avatar>
      );
    } else if (index < 3) {
      group.push(
        <Avatar
          onClick={() => {
            setId(avatar);
          }}
          style={{
            height: 35,
            width: 35,
            cursor: "pointer",
            position: "absolute",
            left: 25 * index
          }}
        >
          <FaceIcon />
        </Avatar>
      );
    }
  });
  return <div style={{ position: "relative", margin: "5px 0px" }}>{group}</div>;
};

AvatarGroup.defaultProps = {
  children: "",
  size: "55px"
};

AvatarGroup.propTypes = {};

export default AvatarGroup;
