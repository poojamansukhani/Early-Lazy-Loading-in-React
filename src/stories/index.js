import React from "react";
import { storiesOf } from "@storybook/react";
import BenzButton from "../../src/features/common/BenzButton";

storiesOf("BenzButton", module)
  .add("active with fill", () => (
    <BenzButton label={`continue`} fill={true} active={true} />
  ))
  .add("active with no fill", () => (
    <BenzButton label={`sign up`} fill={false} active={true} />
  ))
  .add("disabled", () => <BenzButton label={`continue`} active={false} />);