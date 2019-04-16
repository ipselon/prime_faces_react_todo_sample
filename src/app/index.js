import initialState from './schema/initialState';
import { initStore } from '@webcodesk/react-app-framework';

export let App = null;
let packageJson = {};
if (process.env.NODE_ENV !== 'production') {
  App = require('./AppDev').default;
  packageJson = require('../../package.json');
} else {
  App = require('./App').default;
}

export function initApp() {
  initStore(packageJson.name, packageJson.version, initialState);
}
