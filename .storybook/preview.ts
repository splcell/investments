import type { Preview } from "@storybook/react";
import '../src/reset.scss';
import '../src/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
