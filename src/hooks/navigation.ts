import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParamMap } from "../types/navigation";

/** Wraps React Navigation to provide strongly-typed access for navigating to other screens. */
export function useNavigate() {
    const navigation = useNavigation() as NativeStackNavigationProp<RouteParamMap>;
    return navigation.navigate;
}