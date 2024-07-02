import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardDetailsScreen from "../screens/CardDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import { RouteParamMap } from "../types/navigation";

const Stack = createNativeStackNavigator<RouteParamMap>();


export default function NavigationWrapper(){
    return <NavigationContainer<RouteParamMap>>
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={HomeScreen} options={{
                title: 'Pokémon Cards'
            }} />
            <Stack.Screen name="cardDetails" component={CardDetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}