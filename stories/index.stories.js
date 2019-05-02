import React from "react";

import { storiesOf } from "@storybook/react";

import { Button, BuyButton } from "../src/theme/buttons/button.style";

storiesOf("Buttons", module)
  .add("default buttons", () => (
    <div>
      <Button color="default">000000</Button>
      <Button color="dark">000000</Button>
      <Button color="primary">000000</Button>
      <Button color="secondary">000000</Button>
      <Button color="sub">000000</Button>
    </div>
  ))
  .add("Buy Buttons", () => (
    <div>
      <BuyButton color="default" />
      <BuyButton color="dark" />
      <BuyButton color="primary" />
      <BuyButton color="secondary" />
      <BuyButton color="sub" />
    </div>
  ));
