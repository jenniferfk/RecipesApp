import {View, Text, StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MainNavigatorNavigationProp } from '../navigation/MainNavigator.types';
import {useTheme} from '../context/SettingsContext';

function HomeScreen(){
  const navigation= useNavigation<MainNavigatorNavigationProp>();
  const { theme} = useTheme();

  const navigateToRecipes = (category: string) => {
    navigation.navigate('Recipes', { category });
};
const goToSettings = () => {
  navigation.navigate('Settings');
};
const goToFav = () => {
  navigation.navigate('Favorites');
};
  return (
    <ScrollView style={theme == 'light' ? styles.container_light : styles.container_dark} >
    <View style={styles.viewone}>
      <Text style={styles.welcometxt}> Welcome to Our Recipes App! </Text>
    </View>
    <View style={styles.viewone}>
      <Text style={styles.slogantxt}> Where every dish tells a story and every recipe brings joy</Text>
    </View>
    <View style={styles.viewtwo}>
      <Text style={styles.gotorecipetxt}> Start exploring now and let the aroma of possibilities fill your kitchen. Happy cooking!
    </Text>
    </View>

    <View style={styles.viewtwo}>
      <Text style={styles.gotorecipetxt}>
        Select a category to show its recipes!
    </Text>

    <View style={styles.container2}>
      <View style={styles.row}>
        <TouchableOpacity style={theme == 'light' ? styles.button_light : styles.button_dark}>
          <Text style={styles.buttonText} onPress={() => navigateToRecipes('Italian')}>Italian</Text>
        </TouchableOpacity>
        <TouchableOpacity style={theme == 'light' ? styles.button_light : styles.button_dark}>
          <Text style={styles.buttonText} onPress={() => navigateToRecipes('Lebanese')}>Lebanese</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={theme == 'light' ? styles.button_light : styles.button_dark}>
          <Text style={styles.buttonText} onPress={() => navigateToRecipes('Chinese')}>Chinese</Text>
        </TouchableOpacity>
        <TouchableOpacity style={theme == 'light' ? styles.button_light : styles.button_dark}>
          <Text style={styles.buttonText} onPress={() => navigateToRecipes('Indian')}>Indian</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    
    <View style={styles.container2}>
    <Text style={styles.gotorecipetxt}>Go To Favs</Text>
      <TouchableOpacity style={theme == 'light' ? styles.button_light : styles.button_dark} onPress={goToFav}>
        <Text style={styles.buttonText} >Favorites</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.container2}>
    <Text style={styles.gotorecipetxt}>Go To Settings</Text>
      <TouchableOpacity style={theme == 'light' ? styles.button_light : styles.button_dark} onPress={goToSettings}>
        <Text style={styles.buttonText} >Settings ⚙️</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container_light: {
    flex:1,
    backgroundColor: '#993ef7',
  },
  container_dark: {
    flex:1,
    backgroundColor: '#3c1663',
  },
  viewone: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  welcometxt:{
    fontSize:30,
    color: '#FFFDCB',
    fontWeight:'bold'
  },
  slogantxt: {
    fontSize: 20,
    color: '#FFFDCB',
    textAlign: 'center',
  },
  viewtwo:{
    marginTop:50,
  },
  gotorecipetxt:{
    fontSize: 20,
    color: '#FFFDCB',
    textAlign: 'center',
  },
  container2:{
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button_light: {
    backgroundColor: '#FF3EA5',
    width: 150,
    height: 50, 
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  button_dark: {
    backgroundColor: '#a10056',
    width: 150,
    height: 50, 
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  favbutton:{
    backgroundColor: '#FF3EA5',
    width: 150,
    height: 50, 
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop:20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center'
  },
})
// i tried to see if there is an easier way to apply common styles between screens but i didn't find.