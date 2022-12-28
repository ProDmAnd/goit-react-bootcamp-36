import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import root from './reducer';

export const store = createStore(root, devToolsEnhancer());
