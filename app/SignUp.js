import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { useRouter } from "expo-router";
import { Stack } from "expo-router";
import { useState } from "react";
import { createUserAuthWIthEmailAndPassword, 
    createUserDocument, 
    signinUserAuth, 
    signOutUser 
} from "./config/config";
import { FONTS, SIZES, COLORS, SHADOWS } from "../constants";
import HeaderRightBtn from "../components/home/header/headerRight";
import HeaderLeftBtn from "../components/home/header/headerLeft";
import Login from "./Login";

const SignUp = () => {
   
    const [ currentUser, setCurrentUser ] = useState(false)
    
   
    const router = useRouter()
    const [displayName, setDisplayName ] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const submitHandler = async() => {
       if (password !== confirmPassword) {
        alert('new baby')
        return;
       } try {
            const { user } = await createUserAuthWIthEmailAndPassword(email, password)
            
         const response= await createUserDocument(user, {displayName})
       
       return setCurrentUser(true);
        
       }
        catch(err) {
        console.log(err)
       }
       
    }
    const handleLogin =  async (email, password) => {
        if(!email || !password) return;
        
        try {
            const res = await signinUserAuth(email, password)
           return setCurrentUser(true)
        } catch(err) {
            console.log(err)
        }
    }
 const handleSignout = async() => {
    await signOutUser()
    return setCurrentUser(false)
 }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerRight: () => (
                        <HeaderRightBtn handleSignout={handleSignout}  currentUser={currentUser} />
                    ),
                    headerLeft: () => (
                        <HeaderLeftBtn  handlePress= {() => router.back()} />
                    ),
                    headerTitle: ''
                    
                }}
            />
            
            <Text style={styles.signupHeader}>if you don't have an account, sign up</Text>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.formTitle}>Username</Text>
                    <TextInput
                    placeholder="display name"
                    onChangeText={(text) => setDisplayName(text)}
                    style={styles.textInput}
                    />
                </View>
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
                <View style={styles.inputContainer}>
                    <Text style={styles.formTitle}>Confirm password</Text>
                    <TextInput
                    placeholder="confirm password"
                    onChangeText={(text) =>setConfirmPassword(text)}
                    style={styles.textInput}
                    />
                </View>
                
            
                <TouchableOpacity style={styles.signUpContainer} onPress= {() => submitHandler()}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Login handleLogin={handleLogin} />
            </View>
             
        </View>
    )
}
 const styles = StyleSheet.create({
    container: {
        backgroundColor: '#109685',
        height: '100%'
        
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
      height: 350,
      justifyContent: 'center',
     marginLeft: 30,
     marginTop: 10,
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
        marginTop: 15
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

export default SignUp