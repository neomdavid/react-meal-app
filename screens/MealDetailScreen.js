import { Text } from "react-native";
const MealScreen = ({ route }) => {
  return <Text>{route.params.mealId}</Text>;
};

export default MealScreen;
