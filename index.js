/**
 * @format
 */
global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;

import 'fast-text-encoding';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
