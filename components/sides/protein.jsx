import { Text, View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { FONTS, COLORS, SIZES } from "../../constants";
const Protein = ({protein}) => {
    return (
        <View>
            <FlatList
             data= {protein ? [protein] : []}
             renderItem={({item}) => (
                <View style={styles.proteinContainer}>
                    <AntDesign name="checkcircle" size={20} color='#109685' />
                    <Text style={styles.proteinText}> {item.protein}</Text>
                </View>
             )}
             keyExtractor={item => item._id}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    proteinContainer: {
        flexDirection: 'row', 
       alignItems: 'center',
       margin: 20
    },
    proteinText: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium,
      paddingLeft: 10
    }
    
})

export default Protein