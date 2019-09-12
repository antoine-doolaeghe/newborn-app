import React from "react";

import { storiesOf } from "@storybook/react";

import { NewbornCard } from "../../src/components/organisms/cards";

storiesOf("NewbornCard", module)
  .add("Empty data", () => (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <NewbornCard></NewbornCard>
    </div>
  ))
  .add("Default", () => (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <NewbornCard
        info={{ title: "test", summaries: { datasets: [{ data: {} }] } }}
        size="large"
      ></NewbornCard>
    </div>
  ));
