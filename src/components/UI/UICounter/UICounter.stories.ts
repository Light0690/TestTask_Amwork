import type { Meta } from "@storybook/react";
import UICounter from "./UICounter";

const meta = {
  component: UICounter,
} satisfies Meta<typeof UICounter>;

export default meta;

export const Example = {
  args: { num: 3 },
} satisfies Meta<typeof UICounter>;
