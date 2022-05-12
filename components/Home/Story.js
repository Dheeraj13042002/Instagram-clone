import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Story = ({photo, name}) => {
  return (
    <View style={styles.container}>
        <Image
            style={styles.photo}
            source={{
                uri : photo
            }}
            // resizeMode="stretch"
        /> 
        <Text style={styles.nameStyle}>{
             (name.length > 10 ? name.slice(0,10) + "..." : name)
        }</Text>
    </View>
  )
}

export default Story

const styles = StyleSheet.create({
    container:{
        margin:10,
        // borderWidth:2,

    },
    photo:{
        height:70,
        width:70,
        borderRadius:100,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: "#FF8501"
    },
    nameStyle:{
        marginLeft:13
    }
})