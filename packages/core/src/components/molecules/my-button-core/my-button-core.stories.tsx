import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MyButtonCore } from '.';

const meta = {
  title: 'MyButtonCore',
  component: MyButtonCore,
  args: {
    text: 'my-button-core',
  },
  decorators: [
    (Story: React.ComponentType) => (
      <Story />
    ),
  ],
} satisfies Meta<typeof MyButtonCore>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onPress: action('onPress'),
  },
};
