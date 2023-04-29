import { Text, View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";


const TabButton = ({name, activeTabs, onHandleSearch}) => (
    <TouchableOpacity onPress={() => onHandleSearch(name)} style={styles.buttonContainer(activeTabs, name)}>
        <Text style={styles.btnText(activeTabs, name)}>{name}</Text>
    </TouchableOpacity>
)

const FoodTabs = ({tabs, activeTabs, setActiveTabs}) => {
 
    return (
       <View style={styles.tabContainer}>
        <FlatList
         data={tabs}
          renderItem={({item}) => (
            <TabButton
             name={item}
              activeTabs={activeTabs}
              onHandleSearch={(name) => setActiveTabs(name)}
            />  
        )}
        keyExtractor={item => item}
        horizontal
        contentContainerStyle={{columnGap: SIZES.small}}
        />
       </View>
    )
}

const styles = StyleSheet.create({
 buttonContainer: (name, activeTabs) => ({
   width: 70,
   height: 30,
   backgroundColor: name === activeTabs? '#109685' : 'white',
   marginTop: 10,
   
   alignItems: 'center'
   
  
   
 }),
 btnText: (name, activeTabs) => ({
    color: name === activeTabs? 'white' : '#109685',
    fontFamily: FONTS.regular,
    fontSize: SIZES.large
 }),
 tabContainer: {
   justifyContent: 'space-between',
   alignItems: 'center'
 }
 
})

export default FoodTabs;