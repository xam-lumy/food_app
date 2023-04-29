import { useState, useEffect } from 'react'
import { signinUserAuth, signOutUser} from './config/config'

import {View, 
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    keyboard,
    TextInput,
    Button
} 
    from  'react-native'
    import { useRouter } from 'expo-router'
    import { COLORS, FONTS, SIZES } from '../constants'


 




const Login = ({handleLogin}) => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
  
  

     
  

  const signoutHandler = async() => {
    await signOut()
  }
   

   
    
   

    return(
        <View>
                <Text style={styles.signupHeader}>Sign Up</Text>
                    <View style={styles.formContainer}>
                        
                        <View style={styles.inputContainer}>
                            <Text style={styles.formTitle}>Email</Text>
                            <TextInput
                            placeholder="email"
                            onChangeText={(text) => setEmail(text)}
                            style={styles.textInput}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.formTitle}>Password</Text>
                                <TextInput
                                placeholder="password"
                                onChangeText={(text) => setPassword(text)}
                                style={styles.textInput}
                                />
                        </View>
                        <TouchableOpacity style={styles.signUpContainer} onPress= {() => handleLogin(email, password)}>
                       <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => signoutHandler()}>
                    <Text>sign out</Text>
                </TouchableOpacity>
                </View>
            </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#109685',
        height: 50
        
    },
    signupHeader: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.large,
        color: COLORS.lightWhite,
        margin: 10
    },
    formContainer: {
        backgroundColor: COLORS.lightWhite,
      padding: 20,
      width: 300,
      height: 200,
      justifyContent: 'center',
     marginLeft: 30,
     marginTop: 5,
    
     borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 2,
        height: 0.23
    },
    elevation: 5,
    shadowRadius: 5.25,
    shadowOpacity: 0.5

        
    },
    textInput: {
        backgroundColor: COLORS.gray,
        padding: 5,
        borderRadius: 10
    },
    inputContainer: {
        marginTop: 5
    },
    formTitle: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium
    },
    signUpContainer: {
        paddingTop: 15,
    },
    signUpText: {
       width: 70,
       height: 30,
       backgroundColor: '#109685',
       color: '#fff',
       fontFamily: FONTS.bold,
       fontSize: SIZES.medium,
       textAlign: 'center'
    }
})

export default Login