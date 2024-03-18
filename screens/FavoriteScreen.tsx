import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';//I had to use FlatList even though we didnt cover it. i got help from https://reactnative.dev/docs/flatlist
import { useTheme } from '../context/SettingsContext';
import foodCategories from '../data/FoodCategories';

const FavoriteScreen = () => {
    const { favorites, toggleFavorite, theme,isFavorite } = useTheme();
  const favoriteFoods = foodCategories.flatMap(category =>
    category.foods.filter(food => favorites.includes(food.name))
  );
  const handleButtonPress = (foodName:string) => {
    toggleFavorite(foodName);
  };
  return (
    <View style={theme == 'light' ? styles.container_light : styles.container_dark}>
      {favoriteFoods.length > 0 ? (
        <FlatList
          data={favoriteFoods}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.foodContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
              <Text style={theme == 'light' ? styles.foodName : styles.foodNamedark}>{item.name}</Text>
              <TouchableOpacity
                style={[styles.circularButton, isFavorite(item.name) && styles.circularButtonActive]}
                onPress={() => handleButtonPress(item.name)}
              >
                <Text style={styles.buttonText}>fav</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noFavoritesText}>You have no favorite foods</Text>
      )}
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
    container_light: {
        flex:1,
        backgroundColor: '#993ef7',
      },
      container_dark: {
        flex:1,
        backgroundColor: '#3c1663',
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
    fontWeight: 'bold',
  },
  foodNamedark: {
    fontSize: 22,
    fontWeight:'bold',
    color:'#cc9cff',
  },
  noFavoritesText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    color:'white',
    fontWeight:'bold',
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
