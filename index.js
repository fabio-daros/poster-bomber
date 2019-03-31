import React from 'react' //because have JSX
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native';
//import App from './App'; usar o Feed no lugar do App
//import Feed from './src/screens/Feed' usar o Navigator no lugar
import Navigator from './src/Navigator'
import { name as appName } from './app.json';

import storeConfig from './src/store/storeConfig'

const store = storeConfig()
const Redux = () => ( //new root point is "Provider" and no more "Navigator"
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux)
