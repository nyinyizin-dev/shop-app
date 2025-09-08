import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#CA64E3', width: '50%', height: '50%'}} />
      <View style={{backgroundColor: '#CA64ae', width: '100%', height: "50%"}} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    color: 'rgba(243, 211, 31, 0.93)',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
