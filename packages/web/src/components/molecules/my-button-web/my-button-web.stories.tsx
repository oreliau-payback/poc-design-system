import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MyButtonWeb } from '.';

const meta = {
  title: 'MyButtonWeb',
  component: MyButtonWeb,
  args: {
    text: 'my-button-web',
  },
  decorators: [
    (Story: React.ComponentType) => (
      <Story />
    ),
  ],
} satisfies Meta<typeof MyButtonWeb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onPress: action('onPress'),
  },
};
