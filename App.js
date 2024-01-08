import 'react-native-gesture-handler'
import React from 'react'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import Routes from './src/routes'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Routes />
    </SafeAreaView>
  )
}
