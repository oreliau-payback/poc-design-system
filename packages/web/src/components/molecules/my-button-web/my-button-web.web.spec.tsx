/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MyButtonWeb } from '.';

test('renders correctly web', () => {
  const { getByTestId } = render(<MyButtonWeb />);
  expect(getByTestId('my-button-web')).toHaveTextContent('my-button-web');
});
