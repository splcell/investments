
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { Story } from '@storybook/react';



// Создаем декоратор для Redux Store
export const StoreDecorator = (Story: Story, context: any) => {
  return (
    <Provider store={store}>
      <Story {...context} />
    </Provider>
  );
};