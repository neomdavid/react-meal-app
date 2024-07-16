import { StyleSheet, SafeAreaView } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import { NavigationContainer } from "@react-navigation/native";

import { CATEGORIES } from "./data/dummy-data";
import MealScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();
// function getNameByID(id) {
//   const matchingCategory = CATEGORIES.find((category) => category.id === id);
//   return matchingCategory ? matchingCategory.title : null;
// }

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   const title = getNameByID(catId);
            //   return {
            //     title: title,
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   const title = getNameByID(catId);
            //   return {
            //     title: title,
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
