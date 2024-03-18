import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
export type MainNavigatorStackParamList = {
    Home: undefined;
    Recipes: { category: string };
    Settings: undefined;
    Favorites: undefined;
};
export type MainNavigatorNavigationProp = NativeStackNavigationProp<MainNavigatorStackParamList>;
export type MainNavigatorRouteProp= RouteProp<MainNavigatorStackParamList>;