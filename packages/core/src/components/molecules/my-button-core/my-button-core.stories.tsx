import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styledWeb from 'styled-components';
import styledRN from 'styled-components/native';
import { MyButtonCore } from '.';

const isReactWeb =
  typeof window !== 'undefined' && typeof document !== 'undefined';

const View = (isReactWeb? styledWeb.div : styledRN.View)`
padding: 16px;
`;

const meta = {
  title: 'MyButtonCore',
  component: MyButtonCore,
  args: {
    text: 'my-button-core',
  },
  decorators: [
    (Story: React.ComponentType) => (
      <View>
        <Story />
      </View>
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
