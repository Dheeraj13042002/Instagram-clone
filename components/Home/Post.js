import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React , { useState} from 'react'

const postImg = 'https://user-images.githubusercontent.com/72385490/167628326-e7971d03-5062-4ef6-8c7f-213c19881b6e.jpeg'

const Post = (postInfo) => {
  const {imageUrl, user, likes, caption, profile_picture, comments} = postInfo.post;  

  const [commentsAll, setCommentsAll] = useState(false)

    const toggleComments = () => {
        setCommentsAll((commentsAll) ? false : true);
    }

  return (
    <View style={styles.postContainer}>
        {/* Post Top */}
      <View style={styles.postTop}>
          <View style={styles.postTopLeft}>
              <Image
                 style={styles.userImage}
                 source={{
                     uri:imageUrl
                 }}
              />
              <View><Text>{user}</Text></View>
          </View>
          <View style={styles.postTopRight}>
              <Image
                style={styles.dots}
                source={ require("../../assets/dots.png")}
              />
          </View>
      </View>

       {/* Hero Image */}
      <View>
          <Image
            style={styles.postImage}
            source={{
                uri:postImg
            }}
          />
      </View>

      <View style={styles.actionsContainer}>
          <View style={styles.actions}>
            <Image
                style={styles.actionBtn}
                source={{
                    uri : `https://img.icons8.com/ios/50/000000/like--v1.png`
                }}
              />
              <Image
                style={styles.actionBtn}
                source={{
                    uri : `https://img.icons8.com/ios/50/000000/topic.png`
                }}
              />
               <Image
                style={styles.actionBtn}
                source={{
                    uri : `https://img.icons8.com/ios/50/000000/share--v1.png`
                }}
              />
          </View>
          <View>
              <Image
                style={styles.actionBtn}
                source={{
                    uri : `https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-Save-social-media-bearicons-detailed-outline-bearicons.png`
                }}
              />
          </View>
      </View>

      <View style={styles.footerContainer}>
          {/* Likes */}
           <View>
            <Text style={styles.likesCount}>{likes} likes</Text>
           </View>

           {/* caption */}
           <View style={styles.commentContainer}>
               <Text>
                    <Text style={styles.userCommented}>{user}</Text>
                    <Text>{caption}</Text>
               </Text>
           </View>

           <TouchableWithoutFeedback
                onPress={toggleComments}
           >
               <Text style={styles.showAllComments}>View all {comments.length} Comments</Text>
           </TouchableWithoutFeedback>
           <View>
               {
                   commentsAll && 
                   comments.map((comment, index) => (
                    <View key={index} style={styles.commentContainer}>
                        <Text>
                            <Text style={styles.userCommented}>{comment.user}</Text>
                            <Text>{comment.comment}</Text>
                        </Text>
                    </View>
                   ))
               }
           </View>
      </View>

    </View>
  )
}


export default Post

const styles = StyleSheet.create({
    postContainer:{
        // borderWidth:2,
        // flex:1,
        marginBottom:15
    },
    postTop:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10
    },
    dots:{
        height:20,
        width:20,
        resizeMode:'contain',
        
    },
    userImage:{
        height:40,
        width:40,
        borderRadius:75,
        marginRight:2
    },
    postTopLeft:{
        flexDirection:'row',
        alignItems:'center'
    },
    postTopRight:{
        alignItems:'center',
        justifyContent:'center'
    },
    postImage:{
        height:300,
        width:'100%'
    },
    actionsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
    },
    actions:{
        flexDirection:'row',
    },
    actionBtn:{
        height:35,
        width:35,
        resizeMode:'contain',
        marginRight:6
    },
    footerContainer:{
        marginLeft:10
    },
    commentContainer:{
        flexDirection:'row'
    },
    likesCount:{
        fontWeight:'bold'
    },
    userCommented:{
        fontWeight:'bold',
        marginRight:4
    },
    showAllComments:{
        marginVertical:2,
        color:'gray'
    }
})