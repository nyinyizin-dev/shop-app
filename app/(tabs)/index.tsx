import { StyleSheet, Text,  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello World</Text>
    </SafeAreaView>
  )
}

// RGB, RGBA

const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    color: 'rgba(243, 211, 31, 0.93)',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
