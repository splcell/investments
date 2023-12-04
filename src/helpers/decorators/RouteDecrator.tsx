import { Story, Decorator } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator: Decorator = (Story:  Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};