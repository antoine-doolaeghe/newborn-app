import React from "react";

import { InfoElement, InfoWrap, Label, Value } from "./style/info.style";

export default function Info(props) {
  return (
    <InfoWrap>
      {props.withIcon && (
        <div
          style={{
            margin: "10px 10px 10px 0px",
            width: 55,
            height: 40,
            borderRadius: 40,
            backgroundColor: "black"
          }}
        />
      )}
      <InfoElement>
        <Label>{props.label}</Label>
        <Value fontSize={props.size}>{props.value}</Value>
      </InfoElement>
    </InfoWrap>
  );
}
