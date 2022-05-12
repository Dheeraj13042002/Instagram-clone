import React from 'react';
import {Text,View, SafeAreaView, Platform, StyleSheet, ScrollView} from 'react-native';
import Divider from '../components/General/Divider'
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import Posts from '../components/Home/Posts';
import Stories from '../components/Home/Stories';




function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        <Header navigation={navigation} />
        <Stories/>
        {/* <View
          style={styles.storySeparator}
        /> */}
        <Divider/>
     
        <Posts/>
        <Footer/>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        // paddingTop: Platform.OS === "android" ? 25 : 0,
        flex:1
    },
    storySeparator:{
      borderBottomColor: '#D3D3D3',
      borderBottomWidth: 0.7,
    }
})

export default HomeScreen;