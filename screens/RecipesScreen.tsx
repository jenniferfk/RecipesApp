import {View, Text,StyleSheet, Image, TouchableOpacity} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { MainNavigatorStackParamList } from '../navigation/MainNavigator.types';
import foodCategories from '../data/FoodCategories';
import {useTheme} from '../context/SettingsContext';
import { useState } from 'react';

type RecipesScreenProps = {
  route: RouteProp<MainNavigatorStackParamList, 'Recipes'>;
};

const RecipesScreen: React.FC<RecipesScreenProps> = ({ route }) => {
    const { category } = route.params;
    const { theme} = useTheme();
    const selectedCategory = foodCategories.find((item) => item.category === category);
    const foods = selectedCategory ? selectedCategory.foods : [];


    const { toggleFavorite, isFavorite } = useTheme();

    const handleButtonPress = (foodName: string) => {
      toggleFavorite(foodName);
    };

  return (
    <View style={theme == 'light' ? styles.container_light : styles.container_dark}>
    <View style={styles.viewone}>
      <Text style={styles.title}>{category} Recipes</Text>
    </View>
    <View style={styles.viewtwo} >
    {foods.map((food, index) => (
      <View key={index} style={styles.foodContainer}>
        <Image source={{ uri: food.imageUrl }} style={styles.foodImage} />
         <Text style={theme == 'light' ? styles.foodName : styles.foodNamedark}>{food.name}</Text>
         <TouchableOpacity
              style={[styles.circularButton, isFavorite(food.name) && styles.circularButtonActive]}
              onPress={() => handleButtonPress(food.name)}
            >
              <Text style={styles.buttontext}>Fav</Text>
          </TouchableOpacity>
      </View>
    ))}
    </View>
    </View>
  );
};
export default RecipesScreen;

const styles = StyleSheet.create({
  container_light: {
    flex:1,
    backgroundColor: '#993ef7',
  },
  container_dark: {
    flex:1,
    backgroundColor: '#3c1663',
  },
  title:{
    fontSize:30,
    color: '#FFFDCB',
    fontWeight:'bold'
  },
  viewone: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  viewtwo:{
    marginTop:50,
  },
  foodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
},
foodImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 35,
},
foodName: {
    fontSize: 22,
    fontWeight:'bold',
},
foodNamedark: {
  fontSize: 22,
  fontWeight:'bold',
  color:'#cc9cff',
},
buttontext:{
    color:'white',
    fontWeight:'bold'
},
circularButton: {
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderColor: '#FFD700',
  width: 40,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  marginRight:8,

},
circularButtonActive: {
  backgroundColor: '#FFD700',
},
})