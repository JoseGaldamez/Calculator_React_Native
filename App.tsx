import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { CalcScreen } from './src/screens/CalcScreen';
import { styles } from './src/styles/StylesApp';

const App = () => {
  return (
    <SafeAreaView style={styles.background} >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalcScreen />
    </SafeAreaView>
  )
}


export default App;