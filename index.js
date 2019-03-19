/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App'; usar o Feed no lugar do App
//import Feed from './src/screens/Feed' usar o Navigator no lugar
import Navigator from './src/Navigator'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);
