import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'


const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
            style={styles.logo}
            source={ require("../../assets/logo.png")}
        />
       </TouchableOpacity>

       <View style={styles.leftWrapper}>
           <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
               <Image
                    style={styles.btnPlus}
                    // source={ require("../../assets/plus.png")}
                    source={{
                        uri:'https://img.icons8.com/fluency-systems-regular/60/000000/plus-2-math.png'
                    }}
               />
           </TouchableOpacity>
           <TouchableOpacity >
                <Image
                    style={styles.btnPlus}
                    // source={ require("../../assets/plus.png")}
                    source={{
                        uri:'https://img.icons8.com/fluency-systems-regular/60/000000/like--v1.png'
                    }}
               />
           </TouchableOpacity >
           <TouchableOpacity >
               <View style={styles.unreadBadge}>
                   <Text style={styles.unreadBadgeText}>11</Text>
               </View>
                <Image
                    style={styles.btnPlus}
                    // source={ require("../../assets/plus.png")}
                    source={{
                        uri:'https://img.icons8.com/fluency-systems-regular/60/000000/facebook-messenger.png'
                    }}
                />
           </TouchableOpacity >
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },  
    logo:{
        height:50,
        width:120,
        resizeMode:'contain'
    },
    leftWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:4
    },
    btnPlus:{
       marginHorizontal:4,
       height:30,
       width:30,
       resizeMode:'contain'
    },
    btnHeart:{
        marginHorizontal:5,
        height:50,
        width:35,
        resizeMode:'contain'
    },
    btnMsg:{
        marginHorizontal:5,
        height:50,
        width:35,
        resizeMode:'contain'
    },
    unreadBadge:{
        backgroundColor:'#FF3250',
        position:'absolute',
        width:20,
        height:20,
        // padding:2,
        top:0,
        right:0,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100
    },
    unreadBadgeText:{
        color:'white',
        fontWeight:'600'
    }
})

export default Header