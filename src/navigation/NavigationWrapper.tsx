import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardDetailsScreen from "../screens/CardDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import { RouteParamMap } from "../types/navigation";

const Stack = createNativeStackNavigator<RouteParamMap>();

/** Wraps app navigation with the possible navigatable screens and their options. */
export default function NavigationWrapper(){
    return <NavigationContainer<RouteParamMap>>
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={HomeScreen} options={{
                title: 'Pokémon Cards'
            }} />
            <Stack.Screen name="cardDetails" component={CardDetailsScreen} options={props => ({
                title: props.route.params.card.name
            })} />
        </Stack.Navigator>
    </NavigationContainer>
}