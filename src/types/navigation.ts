import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RouteParamMap = {
    home: undefined,
    cardDetails: {
        card: PokemonCard
    }
}

export type ScreenProps<T extends keyof RouteParamMap> = NativeStackScreenProps<RouteParamMap, T>;
