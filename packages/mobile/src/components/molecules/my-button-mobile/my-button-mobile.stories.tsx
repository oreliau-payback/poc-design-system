import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MyButtonMobile } from '.';

const meta = {
  title: 'MyButtonMobile',
  component: MyButtonMobile,
  args: {
    text: 'my-button-mobile',
  },
  decorators: [
    (Story: React.ComponentType) => (
      <Story />
    ),
  ],
} satisfies Meta<typeof MyButtonMobile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onPress: action('onPress'),
  },
};
