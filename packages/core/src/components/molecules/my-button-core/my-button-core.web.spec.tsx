/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MyButtonCoreWeb } from './my-button-core-web';

test('renders correctly web', () => {
  const { getByTestId } = render(<MyButtonCoreWeb />);
  expect(getByTestId('my-button-core')).toHaveTextContent('my-button-core');
});
