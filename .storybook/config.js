import { configure } from "@storybook/react";
import { load, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);
