import { render } from '@testing-library/react-native';

import { MyButtonCoreRN } from './my-button-core-mobile';

test('renders correctly', () => {
  const { getByTestId } = render(<MyButtonCoreRN />);
  expect(getByTestId('my-button-core')).toHaveTextContent('my-button-core');
});
