import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { POSTS } from '../../data/posts'
import Post from './Post'


const Posts = () => {
  return (
   
        <ScrollView style={styles.container}>
            {
                POSTS.map((post, index)=> (
                    <Post key={index} post={post}/>
                ))
            }
        </ScrollView>
   
  )
}

export default Posts

const styles = StyleSheet.create({
    container:{
        // borderWidth:2
        // flex:100
        flexGrow:2
    }
})