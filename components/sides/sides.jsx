import { Text, View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { FONTS, COLORS, SIZES } from "../../constants";
import { AntDesign } from '@expo/vector-icons'; 
const Sides = ({side}) => {
    return (
        <View> 
            
            <FlatList
             data= {side ? [side] : []}
             renderItem={({item}) => (
                <View style={styles.sidesContainer}>
                    <AntDesign name="checkcircle" size={20} color='#109685' />
                    <Text style={styles.sidesText}>{item.sides}</Text>
                </View>
             )}
             keyExtractor={item => item._id}
            />
       </View>
    )
}

const styles = StyleSheet.create({
    sidesContainer: {
        flexDirection: 'row', 
       alignItems: 'center',
       margin: 20
    },
    sidesText: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium,
      paddingLeft: 10
    }
    
})

export default Sides;