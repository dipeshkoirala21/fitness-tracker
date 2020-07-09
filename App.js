import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// import store from './src/redux/store';
// import AppContainer from './src';
import AppContainer from './src/screens/initial';
import configureStore from './src/redux/store';

const { store, persistor } = configureStore();

const App = () => {
  const [ready, setReady] = useState(false);

  const loadAsync = async () => {
    await Font.loadAsync({
      icomoon: require('./assets/fonts/icomoon.ttf'),
      avenirNextCondensedRegular: require('./assets/fonts/AvenirNextCondensed-Regular-08.ttf'),
      avenirNextCondensedDemiBold: require('./assets/fonts/AvenirNextCondensed-DemiBold-03.ttf'),
      avenirNextRegular: require('./assets/fonts/AvenirNext-Regular-08.ttf'),
      avenirNextMedium: require('./assets/fonts/AvenirNext-Medium-06.ttf'),
    });
    setReady(true);
  };

  useEffect(() => {
    loadAsync();
  }, []);

  if (!ready) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<AppLoading />} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
