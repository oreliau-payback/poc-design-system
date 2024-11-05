/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MyButtonCore } from '.';

test('renders correctly web', () => {
  const { getByTestId } = render(<MyButtonCore />);
  expect(getByTestId('my-button-core')).toHaveTextContent('my-button-core');
});
