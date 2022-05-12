import { StyleSheet, Text, View, Image,TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const Header = ({navigation}) => {
  return (
    <View>

        {/* Header */}
        <View style={styles.headerWrapper}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Image
        
                    style={styles.backBtn}
                    source={{
                        uri : `https://img.icons8.com/ios-filled/50/000000/back.png`
                    }}
                />
            </TouchableWithoutFeedback>
            <View style={styles.newPostHeading}>
                <Text style={styles.newPostHeadingText}>NEW POST</Text>
            </View>
        </View>
    
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerWrapper:{
        flexDirection:'row',
        padding:15,
        alignItems:'center'
    },
    newPostHeading:{
        marginLeft:90,
    },
    newPostHeadingText:{
        fontSize:20,
        fontWeight:'700'
    },
    backBtn:{
        height:30,
        width:30,
    }
})