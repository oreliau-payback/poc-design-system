import { render } from '@testing-library/react-native';

import { MyButtonMobile } from '.';

test('renders correctly', () => {
  const { getByTestId } = render(<MyButtonMobile />);
  expect(getByTestId('my-button-mobile')).toHaveTextContent('my-button-mobile');
});
