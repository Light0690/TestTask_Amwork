import type { Meta } from "@storybook/react";
import UITag from "./UITag";

const meta = {
  component: UITag,
} satisfies Meta<typeof UITag>;

export default meta;

export const Primary = {
  args: {
    sheme:'primary',
    text:'primary'
  },
} satisfies Meta<typeof UITag>;

export const Normal = {
  args: {
    sheme:'normal',
    text:'normal'
  },
} satisfies Meta<typeof UITag>;