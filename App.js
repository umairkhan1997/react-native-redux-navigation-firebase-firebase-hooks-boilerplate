import React from 'react';
import {
  StyleSheet,Text
} from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./Redux/store";

import Main from './Main'
const App = () => {
  return (
    <>
    <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
<Main />
</PersistGate>
                  </Provider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
