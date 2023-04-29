import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Badge } from 'react-native-elements';
import { useSelector } from "react-redux";



const HeaderRightBtn = ({userauth, currentUser, handleSignout}) => {
    const router = useRouter()
    
    const quantity = useSelector(state => state.cart)
    console.log(quantity)
   

    return (
        <TouchableOpacity style={styles.headerRightContainer}>
            <TouchableOpacity  onPress={() =>router.push('/SignUp')}>
             {currentUser=== true ? 
             <TouchableOpacity onPress ={() =>handleSignout()}>
                <Text>SIGN OUT</Text>
             </TouchableOpacity>
             
             
             :<FontAwesome5 name="user" size={24} color="black" />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.basket} onPress={() => router.replace('/Checkout')}>
                <FontAwesome name="shopping-basket" size={24} color='black'  />
                 <Badge style={{ color: '109685'}}  value={quantity} status="error" badgeStyle={{backgroundColor: '#109685'}} containerStyle={{ position: 'absolute', top: -4, right: -4, }} />
            </TouchableOpacity>
                         
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerRightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30
    },
    basket: {
        paddingLeft: 20
    }
})

export default HeaderRightBtn