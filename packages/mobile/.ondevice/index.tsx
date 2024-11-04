import { MMKV } from 'react-native-mmkv';
import { view } from './storybook.requires';

export const storage = new MMKV();

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: storage.getString,
    setItem: storage.set,
  },
});

export default StorybookUIRoot;
