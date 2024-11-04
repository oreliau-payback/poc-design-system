import { render } from '@testing-library/react-native';

import { MyButtonCore } from '.';

test('renders correctly', () => {
  const { getByTestId } = render(<MyButtonCore />);
  expect(getByTestId('my-button-core')).toHaveTextContent('my-button-core');
});
