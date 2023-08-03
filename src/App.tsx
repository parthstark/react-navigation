import React from 'react'
import Navigation from './navigation/Navigation'

export type RootStackParamList = {
  'Screen1': undefined;
  'InfoScreen': undefined;
};

const App = () => {
  return (
    <Navigation />
  )
}

export default App