import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState} from 'react'
import { authentication } from '../firebase/firebase-config'
import { db } from '../firebase/firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';


const Login = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    })
  }

  const getData = async () => {
    const citiesCol = collection(db, 'Cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());

    console.log(cityList);

  }

  const addData = async () => {
    const city = 'Kisumu';

    await setDoc(doc(db, "Cities", "LA"), {
      City_Name: city,
    });

  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
            <TextInput 
               placeholder='Email'
               value={email}
               onChangeText={text => setEmail(text)}
               style={styles.input}
            />

            <TextInput 
               placeholder='Password'
               value={password}
               onChangeText={text => setPassword(text)}
               style={styles.input}
               secureTextEntry
            />
            
            <Button title='Sign Up' onPress={signInUser}/>
            
            <Button title='Get Data' onPress={getData}/>

            <Button title='Add Data' onPress={addData}/>
            
            

        </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

inputContainer: {
    width: '80%',
},

input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
},


})