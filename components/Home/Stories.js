import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { USERS } from '../../data/storiesData'
import Story from './Story'


const Stories = () => {
  return (
    <View style={styles.container}>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                USERS.map((user, index)=> (
                    <Story  key={index} photo={user.image} name={user.name}/>
                ))
            }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    }
})

export default Stories


{/* <FlatList 
                data={USERS}
                renderItem={
                itemData => (
                    <Story info={itemData.item}/>
                )
                }
            /> */}