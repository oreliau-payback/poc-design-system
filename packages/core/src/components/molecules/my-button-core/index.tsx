
import { Platform } from 'react-native';
import { lazy } from 'react';

const isReactWeb = Platform.OS === 'web';

export const MyButtonCore = isReactWeb ? lazy(() => import("./my-button-core-web")) :require("./my-button-core-mobile").default;


