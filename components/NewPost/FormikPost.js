import { StyleSheet, Text, View, Image,TextInput, Pressable, Button, TouchableWithoutFeedback,Keyboard } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Divider from '../General/Divider'
import { TouchableOpacity } from 'react-native-gesture-handler'
import validUrl from 'valid-url';


const Placeholder = `https://user-images.githubusercontent.com/72385490/159117665-872025a9-2934-43a8-89fc-7d0cfc857445.jpeg`;

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the limit')
})

const FormikPost = ({navigation}) => {

  const [thumbNail, setThumbNail] = useState('');

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       
        <Formik
            initialValues={{caption:'', imageUrl:''}}
            onSubmit={(values) => {
                console.log(values)
                console.log("Success")
                navigation.goBack();
            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {
                ({handleBlur, handleChange, handleSubmit, values, errors, isValid})=> (
                    <>
                        <View style={{margin: 12, flexDirection:'row'}}>
                            <Image
                                style={{height:80, width:80}}
                                source={{
                                    uri: validUrl.isUri(thumbNail) ? thumbNail : Placeholder
                                }}
                            />
                            <TextInput 
                                style={{marginLeft: 12, fontSize:20}}
                                placeholder="Write a caption..."
                                placeholderTextColor={'gray'}
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                        <Divider/>
                        <View>
                            <TextInput 
                                style={{marginLeft: 12, fontSize:18}}
                                placeholder="Enter Image URL..."
                                placeholderTextColor={'gray'}
                                multiline={true}
                                onChangeText={handleChange('imageUrl')}
                                onBlur={handleBlur('imageUrl')}
                                value={values.imageUrl}
                                onChange={(e) => setThumbNail(e.nativeEvent.text)}
                            />
                        </View>

                        {
                            errors.imageUrl && (
                                <Text style={{fontSize:10, color:'red', marginLeft:15}}>
                                {errors.imageUrl}
                                </Text>
                            )
                        }

                         {/* <View style={{width:'40%', marginLeft:100, marginTop:25  , justifyContent:'center' }}>  
                            <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                        </View>  */}

                        <TouchableOpacity>
                            <Pressable style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.text}>{"Share"}</Text>
                            </Pressable>
                        </TouchableOpacity>
                    </>
                )
            }
        </Formik>
    </TouchableWithoutFeedback>
  )
}

export default FormikPost

const styles = StyleSheet.create({
    button: {
       
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',

        marginLeft:100,
        marginRight:100,
        marginTop:25
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },    
})