#React Native Food App

![Settings Dark Mode screenshot](https://github.com/jenniferfk/RecipesApp/assets/121551748/b4248ffd-0254-404d-bafb-c0926a412481)
![Indian Food Screenshot](https://github.com/jenniferfk/RecipesApp/assets/121551748/36b277ac-c0fd-43a8-9b2d-ebc63aa9c4c1)
![homeScreen screenshot](https://github.com/jenniferfk/RecipesApp/assets/121551748/2bc8baef-8ce7-4b4d-804c-b20e6b42e30b)
![Favorite Screenshot](https://github.com/jenniferfk/RecipesApp/assets/121551748/601f6ce6-e095-4596-b440-0810f404ac28)
![Settings Screenshot](https://github.com/jenniferfk/RecipesApp/assets/121551748/2d261d89-5b0b-4d9c-bc70-6d95db03d123)

## App Description:
- User can select what category of food he wants to see
- User can add Food to favorites with one click
- User can switch to dark mode anytime through the settings Screen

- Concerning the screen containing the food: The selected category is  passed as a parameter from the home screen to the screen containing types of food, where it is used to fetch and display relevant content.
- Concerning the favorites screen and settings : 
I put Context API to use: 
Main Provider: to manage the theme-related state and provide a way to toggle between light and dark themes & to handle the state related to favorite food items, maintains a list of favorites and provides functions to add or remove items.
Updating Context State:  For example, adding a food item to favorites triggers the corresponding function from the Provider.

## Problems Faced :
- Metro Bundler Errors: Encountered frequent issues with the Metro bundler failing to bundle ts files correctly.
- Navigation Module Issues:Experienced challenges with setting up and configuring navigation modules like React Navigation.
- Debugging and Troubleshooting: Spent significant time debugging and troubleshooting these issues.

## Features To Add:
- Search Functionality
- User Authentication and Profiles
- Bottom Tab Navigation
- Recipe Details and Instructions
- Integration with External APIs and Services
