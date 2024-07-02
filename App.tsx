/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NavigationWrapper from './src/navigation/NavigationWrapper';
import { persistor, store } from './src/state/store';

function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <NavigationWrapper />
            </SafeAreaView>
        </PersistGate>
       
    </Provider>
  );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1
    }
})

export default App;
