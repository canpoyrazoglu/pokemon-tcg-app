import React from 'react';
import {
    ActivityIndicator
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NavigationWrapper from './src/navigation/NavigationWrapper';
import { persistor, store } from './src/state/store';

/** Entry point of our app. */
function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
            <SafeAreaProvider>
                <NavigationWrapper />
            </SafeAreaProvider>
        </PersistGate>
    </Provider>
  );
}

export default App;
