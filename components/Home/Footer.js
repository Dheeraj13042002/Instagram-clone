import { StyleSheet, Text, View, Image,TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'
import { Tabs } from '../../data/FooterTabs'
// import {Divider} from 'react-native-element'

const Footer = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const Icon = ({url}) => (
    <TouchableWithoutFeedback onPress={() => setActiveTab(url.btn)}>
      <Image
          style={[styles.icon,(url.btn === 'User' && ( activeTab === 'User'?  styles.profilePicActive : styles.profilePic)) ]}
          source={{
            uri:  url.btn === activeTab ?  url.activeLink : url.unActiveLink
          }}
       /> 
      </TouchableWithoutFeedback>
  )


  return (
    <View style={styles.container}>

      <View
          style={styles.storySeparator}
      />
      <View style={styles.iconsWrapper}>
      {
         Tabs.map((icon, index)=> (
              <Icon key={index} url={icon}/>
         ))
      }
      </View>
    
    </View>
  )
}



export default Footer

const styles = StyleSheet.create({
    container:{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,

      height:50,
      width:'100%',
      backgroundColor:'#ffffff'
    },
    storySeparator:{
      borderBottomColor: '#D3D3D3',
      borderBottomWidth: 0.7,
    },
    icon:{
      height:30,
      width:30,
      marginTop:10
      // zIndex:100
    },
    iconsWrapper:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    },
    profilePic:{
      borderRadius:75
    },
    profilePicActive:{
      borderRadius:75,
      borderWidth:2,
      borderColor:'black'
    }
})