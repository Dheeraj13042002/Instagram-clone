import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Divider = () => {
  return (
    <View
        style={styles.separator}
    />
  )
}

export default Divider

const styles = StyleSheet.create({
    separator:{
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0.7,
    }
})