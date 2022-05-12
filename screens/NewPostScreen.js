import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Header from '../components/NewPost/Header'
import Divider from '../components/General/Divider'
import FormikPost from '../components/NewPost/FormikPost'


const NewPostScreen = ({navigation}) => {
  return (
    <View>
        <Header navigation={navigation}/>
        <Divider/>
        <FormikPost navigation={navigation}/>
    </View>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({})