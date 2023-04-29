import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { useRouter } from "expo-router";
import { FONTS, SIZES, COLORS } from "../../constants";
import { Categories } from "../../data";
import { products } from "../../data";
import CategoryCard from "../cards/CategoryCard";
import { AntDesign } from '@expo/vector-icons';

const TopCategories = () => {
    const router = useRouter()
   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style= {styles.title}>Top Categories</Text>
                <AntDesign name="arrowright" size={15} color="gray" />
            </View>
            <FlatList 
             data={Categories}
             renderItem= {({item}) => (

                <CategoryCard item={item}  onPress={() => router.push(`/products/${item.category}`, { params: item.name})}
                 />
             )}
             horizontal
             contentContainerStyle={{columnGap: SIZES.medium}}
            />
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
      
        marginTop: 10,
        marginBottom: 10,
      
    },
    title: {
        fontSize: SIZES.large,
        
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingBottom: 10
    }
   
    
})

export default TopCategories;