import { Platform } from 'react-native';
import { MyButtonCoreWeb } from './my-button-core-web';
import { MyButtonCoreRN } from './my-button-core-mobile';

const isReactWeb = Platform.OS === 'web';

export const MyButtonCore = isReactWeb ? MyButtonCoreWeb : MyButtonCoreRN;
