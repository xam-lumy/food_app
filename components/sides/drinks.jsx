import { Text, View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { FONTS, COLORS, SIZES } from "../../constants";

const Drinks = ({drinks}) => {
    return (
        <View>
        <FlatList
             data= {drinks ? [drinks] : []}
             renderItem={({item}) => (
                <View style={styles.drinkContainer}>
                    <AntDesign name="checkcircle" size={20} color='#109685' />
                    <Text style={styles.drinkText}>{item.drinks}</Text>
                </View>
             )}
             keyExtractor={item => item._id}
            />
    </View>
    )
}

const styles = StyleSheet.create({
    drinkContainer: {
        flexDirection: 'row', 
       alignItems: 'center',
       margin: 20
    },
    drinkText: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium,
      paddingLeft: 10
    }
    
})

export default Drinks